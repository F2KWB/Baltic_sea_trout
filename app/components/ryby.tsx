"use client";
import { useState } from "react";
import { SectionHeader } from "./ui/naglowek_tekst";
import { Card } from "./ui/karty";

export default function Ryby() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const daneRyb = [
    { id: 1, tytul: "Troć Wędrowna", kategoria: "Rzeki", opisKrotki: "Król pomorskich rzek.", opisDlugi: "Ryba o niesamowitej sile, wpływająca do rzek jesienią. Najlepsze wyniki osiąga się na srebrne wahadłówki.", img: "/ryba.jpg", kolor: "bg-blue-950" },
    { id: 2, tytul: "Srebrniak", kategoria: "Morze", opisKrotki: "Bałtyckie srebro z plaży.", opisDlugi: "Świeża ryba prosto z morza, charakteryzująca się jasnym ubarwieniem i niesamowitą walecznością na wędce.", img: "/ryba.jpg", kolor: "bg-cyan-950" },
    { id: 3, tytul: "Łosoś", kategoria: "Zatoka", opisKrotki: "Potężny przeciwnik.", opisDlugi: "Największy z łososiowatych, spotykany głównie w trollingu głębinowym na otwartym morzu.", img: "/ryba.jpg", kolor: "bg-indigo-950" },
    { id: 4, tytul: "Potokowiec", kategoria: "Potoki", opisKrotki: "Górski wojownik.", opisDlugi: "Pięknie ubarwiony mieszkaniec krystalicznie czystych wód o wartkim nurcie.", img: "/ryba.jpg", kolor: "bg-emerald-950" }
  ];

  return (
    <section id="nasze-ryby" className="py-12 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
      <SectionHeader title="Nasze" subtitle="Okazy" color="blue-600" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {daneRyb.map((ryba) => (
          <Card 
            key={ryba.id} 
            item={ryba} 
            isOpen={activeId === ryba.id} 
            onToggle={() => setActiveId(activeId === ryba.id ? null : ryba.id)}
            aspectRatio="h-2/3" 
          />
        ))}
      </div>
    </section>
  );
}