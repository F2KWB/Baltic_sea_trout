import HeroSekcjaMiesiaca from "./ui/karta_miesiaca";

export default function PrzepisMiesiaca() {
  return (
    <HeroSekcjaMiesiaca 
      id="kulinaria"
      nadtytul="Smaki Bałtyku"
      tytulGlowny="Troć"
      tytulPochylony="w Soli"
      opis="Idealnie soczysta ryba zamknięta w pancerzu z morskiej soli..."
      imgSrc="/ryba.jpg"
      akcentKolor="orange-500"
      przyciskTekst="Sprawdź przepis"
    />
  );
}