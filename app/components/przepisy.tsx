"use client";
import { useState } from "react";
import { SectionHeader } from "./ui/naglowek_tekst";
import { Card } from "./ui/karty";

export default function Przepisy() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const danePrzepisow = [
    { id: 1, tytul: "Troć w Soli", kategoria: "Pieczenie", opisKrotki: "Soczysta i delikatna.", opisDlugi: "Pieczenie w grubym pancerzu z soli morskiej to najlepszy sposób na zachowanie wilgotności ryby.", img: "/klif.jpg", kolor: "bg-orange-900" },
    { id: 2, tytul: "Tatar z Troci", kategoria: "Przystawka", opisKrotki: "Świeżość morza.", opisDlugi: "Drobno siekana ryba z dodatkiem kaparów, szalotki i dobrej jakości oliwy.", img: "/klif.jpg", kolor: "bg-emerald-950" },
    { id: 3, tytul: "Wędzona Ryba", kategoria: "Wędzarnia", opisKrotki: "Tradycyjny aromat.", opisDlugi: "Przepis na solankę i czas wędzenia w dymie olchowym dla uzyskania złotego koloru.", img: "/klif.jpg", kolor: "bg-yellow-950" },
    { id: 4, tytul: "Zupa Rybna", kategoria: "Zupy", opisKrotki: "Rozgrzewająca.", opisDlugi: "Wywar na głowach i kręgosłupach z dodatkiem warzyw i szafranu.", img: "/ryba.jpg", kolor: "bg-red-950" }
  ];

  return (
    <section id="przepisy" className="py-12 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
      <SectionHeader title="Nasze" subtitle="Przepisy" color="orange-500" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {danePrzepisow.map((item) => (
          <Card 
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