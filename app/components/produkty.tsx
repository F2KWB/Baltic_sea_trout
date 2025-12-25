"use client";
import { useState } from "react";
import { SectionHeader } from "./ui/naglowek_tekst";
import { Card } from "./ui/karty";

export default function Produkty() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const daneProduktow = [
    { id: 1, tytul: "Woblery Lipowe", kategoria: "Rękodzieło", opisKrotki: "Ręcznie strugane.", opisDlugi: "Każdy wobler jest indywidualnie dociążany i testowany w nurcie rzeki dla idealnej pracy.", img: "/klif.jpg", kolor: "bg-blue-900" },
    { id: 2, tytul: "Muchy", kategoria: "Przynęty", opisKrotki: "Zestaw na troć.", opisDlugi: "Klasyczne wzory much, które sprawdziły się na rzekach Reda i Rega.", img: "/klif.jpg", kolor: "bg-zinc-900" },
    { id: 3, tytul: "Żyłki", kategoria: "Sprzęt", opisKrotki: "Wytrzymałość.", opisDlugi: "Specjalistyczne linki o niskiej pamięci kształtu, idealne do dalekich rzutów.", img: "/klif.jpg" },
    { id: 4, tytul: "Kotwice", kategoria: "Akcesoria", opisKrotki: "Pewne zacięcie.", opisDlugi: "Niezwykle ostre i kute kotwice, odporne na słoną wodę morską.", img: "/klif.jpg" }
  ];

  return (
    <section id="produkty" className="py-4 md:py-6 px-4 md:px-6 max-w-7xl mx-auto">
      <SectionHeader title="Nasze" subtitle="Produkty" color="green-600" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {daneProduktow.map((item) => (
          <Card 
          titleColor="text-green-600"
            key={item.id} 
            item={item} 
            isOpen={activeId === item.id} 
            onToggle={() => setActiveId(activeId === item.id ? null : item.id)}
            aspectRatio="h-2/3" 
          />
        ))}
      </div>
    </section>
  );
}