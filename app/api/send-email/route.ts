import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Tutaj wklej swój klucz API zamiast kropek
const resend = new Resend('re_Wmp73Zhj_BUSihqj1zhuctPbBSv4s8ddJ');

export async function POST(request: Request) {
  try {
    // Pobieramy dane wysłane z formularza (Imie, Email, Tresc)
    const { imie, email, tresc } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Resend wymaga tego adresu na darmowym koncie
      to: 'f2krzysiek@gmail.com',     // Twój email, na który mają przychodzić zapytania
      subject: `Nowa wiadomość od: ${imie || 'Anonim'}`,
      replyTo: email,               // Umożliwi Ci odpisanie bezpośrednio do klienta
      html: `
        <h3>Nowa wiadomość z Baltic Sea Trout</h3>
        <p><strong>Imię:</strong> ${imie || 'Nie podano'}</p>
        <p><strong>Email zwrotny:</strong> ${email}</p>
        <p><strong>Treść:</strong></p>
        <p>${tresc}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    return NextResponse.json({ error: 'Błąd serwera' }, { status: 500 });
  }
}