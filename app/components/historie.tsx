"use client";
import { useState } from "react";
import { SectionHeader } from "./ui/naglowek_tekst";
import { Card } from "./ui/karty";

export default function Historie() {
  // Centralne zarządzanie otwartą historią (jeden mózg dla wszystkich kart)
  const [activeId, setActiveId] = useState<number | null>(null);

  const daneHistorii = [
    {
      id: 1,
      tytul: "Nocny Gość",
      kategoria: "Straszne",
      opisKrotki: "Oko w oko z dziką naturą.",
      opisDlugi: "Podczas nocnej zasiadki na troć poczułem oddech na karku. Myślałem, że to inny wędkarz, ale gdy odwróciłem latarkę, zobaczyłem parę świecących oczu zaledwie metr ode mnie. To był dorodny jeleń, który przyszedł do wodopoju.",
      img: "/pociag.jpg",
      kolor: "bg-red-950" 
    },
    {
      id: 2,
      tytul: "Zaginiona Przynęta",
      kategoria: "Niesamowite",
      opisKrotki: "Historia pewnego powrotu.",
      opisDlugi: "Straciłem swój ulubiony wobler na wielkiej rybie w 2019 roku. Trzy lata później, w tej samej rynnie, złowiłem tę samą rybę... z moją przynętą wciąż w pysku. Niewiarygodne, ale prawdziwe!",
      img: "/klif.jpg",
      kolor: "bg-slate-900"
    },
        {
      id: 3,
      tytul: "Zaginiona Przynęta",
      kategoria: "Niesamowite",
      opisKrotki: "Historia pewnego powrotu.",
      opisDlugi: "Straciłem swój ulubiony wobler na wielkiej rybie w 2019 roku. Trzy lata później, w tej samej rynnie, złowiłem tę samą rybę... z moją przynętą wciąż w pysku. Niewiarygodne, ale prawdziwe!",
      img: "/klif.jpg",
      kolor: "bg-slate-900"
    },
        {
      id: 4,
      tytul: "Zaginiona Przynęta",
      kategoria: "Niesamowite",
      opisKrotki: "Historia pewnego powrotu.",
      opisDlugi: "Straciłem swój ulubiony wobler na wielkiej rybie w 2019 roku. Trzy lata później, w tej samej rynnie, złowiłem tę samą rybę... z moją przynętą wciąż w pysku. Niewiarygodne, ale prawdziwe!",
      img: "/klif.jpg",
      kolor: "bg-slate-900"
    },
            {
      id: 5,
      tytul: "Zaginiona Przynęta",
      kategoria: "Niesamowite",
      opisKrotki: "Historia pewnego powrotu.",
      opisDlugi: "Straciłem swój ulubiony wobler na wielkiej rybie w 2019 roku. Trzy lata później, w tej samej rynnie, złowiłem tę samą rybę... z moją przynętą wciąż w pysku. Niewiarygodne, ale prawdziwe!",
      img: "/klif.jpg",
      kolor: "bg-slate-900"
    }
  ];

  return (
    <section id="historie" className="py-4 md:py-6 px-4 md:px-6 max-w-7xl mx-auto">
      
      {/* Nagłówek z czerwonym akcentem dla klimatu opowieści */}
      <SectionHeader 
        title="Opowieści" 
        subtitle="Nadbrzeżne" 
        color="red-600" 
      />

      {/* Siatka historii - 2 kolumny dla większych kart opowieści */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {daneHistorii.map((story) => (
          <Card 
          titleColor="text-red-600"
            key={story.id} 
            item={story} 
            // Kontrola otwarcia: karta pyta rodzica "czy to ja mam być otwarta?"
            isOpen={activeId === story.id} 
            // Powiadomienie: "kliknięto mnie, przełącz mój stan w centrali"
            onToggle={() => setActiveId(activeId === story.id ? null : story.id)}
            // Ustawiamy wyższe zdjęcie (2/3), żeby pasowało do klimatu opowieści
            aspectRatio="h-2/3" 
          />
        ))}
      </div>

    </section>
  );
}