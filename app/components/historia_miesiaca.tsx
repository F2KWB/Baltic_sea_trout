import HeroSekcjaMiesiaca from "./ui/karta_miesiaca";

export default function HistoriaMiesiaca() {
  return (
    <HeroSekcjaMiesiaca 
      id="historie"
      nadtytul="Wyjątkowe Chwile"
      tytulGlowny="Duchy"
      tytulPochylony="Parsęty"
      opis="Zegar wskazywał trzecią rano, gdy mgła nad wodą zgęstniała tak bardzo..."
      imgSrc="/klif.jpg"
      akcentKolor="red-500"
      przyciskTekst="Czytaj całą historię"
    />
  );
}