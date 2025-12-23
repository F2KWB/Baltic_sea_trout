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
    // DODANO: id="noclegi-info" oraz scroll-mt-24
    <section id="noclegi-info" className="py-24 px-6 text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        
        {/* NAGŁÓWEK I FILTRY */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Baza <span className="text-blue-500">Noclegowa</span>
            </h2>
            <p className="text-zinc-500 mt-4">Sprawdzone miejsca przyjazne wędkarzom.</p>
          </motion.div>

         {/* Kontener przycisków filtrowania */}
<div className="flex flex-wrap md:flex-nowrap gap-2 mb-8 px-4 md:px-0 w-full">
  {['Wszystkie', 'Nad rzeką', 'Nad morzem'].map((filter) => (
    <button
      key={filter}
      className="flex-1 md:flex-none px-4 py-3 bg-zinc-900 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
    >
      {filter}
    </button>
  ))}
</div>
        </div>

        {/* SIATKA NOCLEGÓW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filtrowaneMiejsca.map((miejsce) => (
              <motion.div
                key={miejsce.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-zinc-900 rounded-[2rem] overflow-hidden border border-white/10"
              >
                {/* ZDJĘCIE */}
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={miejsce.img} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={miejsce.nazwa}
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-1 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest">
                    {miejsce.kategoria}
                  </div>
                </div>

                {/* TREŚĆ */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold uppercase tracking-tight">{miejsce.nazwa}</h3>
                      <div className="flex items-center gap-1 text-blue-500 mt-1">
                        <MapPin size={14} />
                        <span className="text-xs font-medium">{miejsce.lokalizacja}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-zinc-500 uppercase font-bold tracking-tighter text-nowrap">Cena</p>
                      <p className="text-lg font-black text-white">{miejsce.cena}</p>
                    </div>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {miejsce.opis}
                  </p>

                  {/* UDOGODNIENIA */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                    {miejsce.tagi.map(tag => (
                      <span key={tag} className="text-[10px] bg-white/5 px-3 py-1 rounded-md text-zinc-300 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* NAKŁADKA PO NAJECHANIU */}
                <div className="absolute inset-0 bg-blue-600/90 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm p-6 text-center">
                  <h4 className="text-2xl font-black uppercase mb-4 text-white">Gotowy na wyprawę?</h4>
                  <button className="px-10 py-4 bg-white text-black font-black uppercase text-xs rounded-full hover:scale-105 transition-transform">
                    Sprawdź dostępność
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}