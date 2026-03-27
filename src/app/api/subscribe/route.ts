import { NextRequest, NextResponse } from "next/server";

// Validare email simplu
const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;

// Sanitizare — elimină tag-uri HTML și trunchiează
function sanitize(str: unknown, maxLen: number): string {
  if (typeof str !== "string") return "";
  return str.replace(/<[^>]*>/g, "").trim().slice(0, maxLen);
}

export async function POST(req: NextRequest) {
  // Acceptăm doar JSON
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;
  const name = sanitize(raw.name, 120);
  const email = sanitize(raw.email, 254);
  const phone = sanitize(raw.phone, 30);

  if (!name || !email) {
    return NextResponse.json({ error: "Câmpurile obligatorii lipsesc." }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Adresa de email nu este validă." }, { status: 400 });
  }

  const apiKey = process.env.MAILERLITE_API_KEY;
  const groupId = process.env.MAILERLITE_GROUP_ID;

  if (!apiKey || !groupId) {
    return NextResponse.json({ error: "Configurare server incompletă." }, { status: 500 });
  }

  const payload: Record<string, unknown> = {
    email,
    fields: { name, ...(phone ? { phone } : {}) },
    groups: [groupId],
  };

  const mlRes = await fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(payload),
  });

  if (!mlRes.ok) {
    // 422 = email deja există — tratăm ca succes (nu blocăm utilizatorul)
    if (mlRes.status === 422) {
      return NextResponse.json({ ok: true });
    }
    const err = await mlRes.json().catch(() => ({}));
    console.error("MailerLite error:", err);
    return NextResponse.json({ error: "Eroare la înregistrare. Încearcă din nou." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

// Respinge orice altă metodă HTTP
export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
