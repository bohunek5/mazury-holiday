import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Proszę wypełnić wszystkie wymagane pola.' },
                { status: 400 }
            );
        }

        // Configure transporter with environment variables
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Email content options
        const mailOptions = {
            from: process.env.SMTP_FROM || process.env.SMTP_USER,
            to: process.env.SMTP_TO || 'rezerwacje@mazury.holiday',
            replyTo: email,
            subject: `[Formularz Kontaktowy] ${subject || 'Nowa wiadomość'} - ${name}`,
            text: `
Nowa wiadomość z formularza kontaktowego mazury.holiday:

Imię i nazwisko: ${name}
Email: ${email}
Telefon: ${phone || 'Nie podano'}
Temat: ${subject || 'Brak'}

Wiadomość:
${message}
            `,
            html: `
<h3>Nowa wiadomość z formularza kontaktowego mazury.holiday</h3>
<p><strong>Od:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
<p><strong>Telefon:</strong> ${phone || 'Nie podano'}</p>
<p><strong>Temat:</strong> ${subject || 'Brak'}</p>
<hr />
<p><strong>Treść wiadomości:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Wiadomość wysłana pomyślnie!' });
    } catch (error: unknown) {
        console.error('Błąd wysyłania maila:', error);
        return NextResponse.json(
            { error: 'Wystąpił błąd podczas wysyłania wiadomości.', details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}
