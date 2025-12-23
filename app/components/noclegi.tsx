"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Noclegi() {
  const [filter, setFilter] = useState("Wszystkie");

  const miejsca = [
    {
      id: 1,
      nazwa: "Przystań Wędkarza",
      kategoria: "Nad rzeką",
      lokalizacja: "Dorzecze Regi",
      opis: "Tradycyjna chata z bezpośrednim dostępem do najlepszych miejscówek trociowych. Posiadamy własną wędzarnię.",
      cena: "od 150 zł / noc",
      img: "/nogi.jpg",
      tagi: ["Suszarnia ubrań", "Parking", "WiFi"]
    },
    {
      id: 2,
      nazwa: "Bałtycka Bryza",
      kategoria: "Nad morzem",
      lokalizacja: "Kołobrzeg",
      opis: "Apartamenty przygotowane specjalnie dla spinningistów brzegowych. Z tarasu widać warunki na morzu.",
      cena: "od 220 zł / noc",
      img: "/nogi.jpg",
      tagi: ["Widok na morze", "Aneks kuchenny"]
    }
  ];

  const filtrowaneMiejsca = filter === "Wszystkie" 
    ? miejsca 
    : miejsca.filter(m => m.kategoria === filter);

  return (
    <section id="noclegi-info" className="py-24 px-4 sm:px-6 text-white scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* NAGŁÓWEK I FILTRY */}
        <div className="flex flex-col mb-16 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="px-2" // Dodatkowy padding, żeby tekst nie dotykał krawędzi
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Baza <span className="text-blue-500">Noclegowa</span>
            </h2>
            <p className="text-zinc-500 mt-4 text-sm md:text-base max-w-xl">
              Sprawdzone miejsca przyjazne wędkarzom. Blisko wody i z klimatem.
            </p>
          </motion.div>

          {/* FILTRY - POPRAWIONE: flex-1 na mobile, onClick przywrócony */}
          <div className="flex flex-row flex-wrap md:flex-nowrap gap-2 w-full px-2">
            {['Wszystkie', 'Nad rzeką', 'Nad morzem'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)} // PRZYWRÓCONO DZIAŁANIE
                className={`
                  flex-1 md:flex-none px-4 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border
                  ${filter === f 
                    ? "bg-blue-600 border-transparent text-white shadow-lg shadow-blue-600/20" 
                    : "bg-zinc-900 border-white/5 text-zinc-500 hover:border-white/20"}
                `}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

{/* SIATKA NOCLEGÓW - Zmniejszono gap z 10 na 6 na mobile */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-2">
  <AnimatePresence mode="popLayout">
    {filtrowaneMiejsca.map((miejsce) => (
      <motion.div
        key={miejsce.id}
        layout
        // ... Twoje animacje bez zmian
        className="group relative bg-zinc-900 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/10"
      >
        {/* ZDJĘCIE - Zmieniono h-64 na h-48 na mobile */}
        <div className="h-48 md:h-64 overflow-hidden relative">
          <img 
            src={miejsce.img} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            alt={miejsce.nazwa}
          />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[9px] font-bold uppercase tracking-widest">
            {miejsce.kategoria}
          </div>
        </div>

        {/* TREŚĆ - Zmieniono p-8 na p-5 na mobile */}
        <div className="p-5 md:p-10">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
            <div>
              {/* Zmniejszono text-2xl na text-xl na mobile */}
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-tight">{miejsce.nazwa}</h3>
              <div className="flex items-center gap-1 text-blue-500 mt-1">
                <MapPin size={12} />
                <span className="text-[10px] md:text-xs font-bold uppercase">{miejsce.lokalizacja}</span>
              </div>
            </div>
            <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 sm:gap-0">
              <p className="text-[9px] text-zinc-500 uppercase font-black tracking-tighter">Cena</p>
              <p className="text-base md:text-lg font-black text-white">{miejsce.cena}</p>
            </div>
          </div>

          {/* Skrócono margines mb-6 na mb-4 i zmniejszono text na xs */}
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-4 line-clamp-2 md:line-clamp-none">
            {miejsce.opis}
          </p>

          {/* UDOGODNIENIA - mniejszy padding pt-4 */}
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
            {miejsce.tagi.map(tag => (
              <span key={tag} className="text-[8px] md:text-[10px] bg-white/5 px-2 py-1 rounded-md text-zinc-400 uppercase font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* ... Nakładka po najechaniu bez zmian */}
      </motion.div>
    ))}
  </AnimatePresence>
</div>
      </div>
    </section>
  );
}