import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, phone } = await req.json();

  if (!email || !name) {
    return NextResponse.json({ error: "Câmpurile obligatorii lipsesc." }, { status: 400 });
  }

  const apiKey = process.env.MAILERLITE_API_KEY;
  const groupId = process.env.MAILERLITE_GROUP_ID;

  if (!apiKey || !groupId) {
    return NextResponse.json({ error: "Configurare server incompletă." }, { status: 500 });
  }

  const body: Record<string, unknown> = {
    email,
    fields: { name, ...(phone ? { phone } : {}) },
    groups: [groupId],
  };

  const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    console.error("MailerLite error:", err);
    return NextResponse.json({ error: "Eroare la înregistrare. Încearcă din nou." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
