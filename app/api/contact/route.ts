import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "stevecaleb37@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body as {
      name: string;
      email: string;
      subject: string;
      message: string;
    };

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      // Resend requires a verified sender domain on free plan.
      // Use their shared test domain for now; swap with your own domain later.
      from: "MONDE Contact <onboarding@resend.dev>",
      to: [TO_EMAIL],
      replyTo: email,
      subject: subject ? `[MONDE] ${subject}` : `[MONDE] New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <h2 style="font-size: 24px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.02em; margin: 0 0 24px;">
            New Contact Message
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 100px;">From</td>
              <td style="padding: 8px 0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #18181b;">${email}</a></td>
            </tr>
            ${subject ? `
            <tr>
              <td style="padding: 8px 0; color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Subject</td>
              <td style="padding: 8px 0;">${subject}</td>
            </tr>` : ""}
          </table>

          <div style="border-top: 1px solid #e4e4e7; padding-top: 24px;">
            <p style="color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 12px;">Message</p>
            <p style="font-size: 15px; line-height: 1.7; white-space: pre-wrap; margin: 0;">${message}</p>
          </div>

          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e4e4e7; color: #a1a1aa; font-size: 11px;">
            Sent via MONDE contact form — monde.fashion
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
