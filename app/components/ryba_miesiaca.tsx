import HeroSekcjaMiesiaca from "./ui/karta_miesiaca";

export default function RybaMiesiaca() {
  return (
    <HeroSekcjaMiesiaca 
      id="okazy"
      nadtytul="Król Rzeki"
      tytulGlowny="Wielka"
      tytulPochylony="Troć"
      opis="Srebrna torpeda, która w tym roku pobiła wszelkie rekordy na pomorskich rzekach."
      imgSrc="/ryba.jpg"
      akcentKolor="blue-500"
      przyciskTekst="Zobacz okaz"
    />
  );
}