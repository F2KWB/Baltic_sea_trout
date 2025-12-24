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
                    ? "bg-sky-700 border-transparent text-white shadow-lg shadow-blue-600/20" 
                    : "bg-zinc-900 border-white/5 text-zinc-500 hover:border-white/20"}
                `}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* SIATKA NOCLEGÓW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2">
          <AnimatePresence mode="popLayout">
            {filtrowaneMiejsca.map((miejsce) => (
              <motion.div
                key={miejsce.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-white/10"
              >
                {/* ZDJĘCIE */}
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={miejsce.img} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={miejsce.nazwa}
                  />
                  <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest">
                    {miejsce.kategoria}
                  </div>
                </div>

                {/* TREŚĆ - POPRAWIONY PADDING */}
                <div className="p-8 md:p-10">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tight">{miejsce.nazwa}</h3>
                      <div className="flex items-center gap-1 text-sky-700 mt-2">
                        <MapPin size={14} />
                        <span className="text-xs font-bold uppercase tracking-wide">{miejsce.lokalizacja}</span>
                      </div>
                    </div>
                    <div className="bg-white/5 p-3 rounded-2xl border border-white/5 min-w-[120px]">
                      <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-1">Cena</p>
                      <p className="text-lg font-black text-white leading-none">{miejsce.cena}</p>
                    </div>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                    {miejsce.opis}
                  </p>

                  {/* UDOGODNIENIA */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                    {miejsce.tagi.map(tag => (
                      <span key={tag} className="text-[9px] bg-white/5 px-3 py-1.5 rounded-lg text-zinc-400 font-bold uppercase tracking-wider border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* NAKŁADKA PO NAJECHANIU */}
                <div className="absolute inset-0 bg-blue-600/95 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm p-8 text-center">
                  <h4 className="text-3xl font-black uppercase mb-6 text-white leading-tight">Gotowy na<br/>wyprawę?</h4>
                  <button className="px-10 py-5 bg-white text-black font-black uppercase text-xs rounded-full hover:scale-105 active:scale-95 transition-all shadow-2xl">
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