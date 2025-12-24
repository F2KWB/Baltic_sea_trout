"use client";
import { motion } from "framer-motion";
import { Anchor, TreePine, Map, CheckCircle2 } from "lucide-react";

const oferty = [
  {
    id: "lodz",
    tytul: "Wyprawy z Łodzi",
    ikona: <Anchor className="text-blue-500" size={32} />,
    opis: "Pełny profesjonalizm na falach Bałtyku i estuariach rzek. Nowoczesna łódź, echosonda i topowy sprzęt.",
    cechy: ["Echosonda SideScan", "Sprzęt w cenie", "Paliwo w cenie"],
    img: "/lodz.jpg",
    cena: "od 800 zł / dzień"
  },
  {
    id: "brzeg",
    tytul: "Przewodnik Brzegowy",
    ikona: <TreePine className="text-green-500" size={32} />,
    opis: "Trekking wzdłuż dzikich odcinków Regi i Parsęty. Nauka czytania wody i cichego podejścia do ryby.",
    cechy: ["Dojazd na miejsce", "Lokalna wiedza", "Analiza rynien"],
    img: "/lodz.jpg", // Tutaj podmień na właściwe zdjęcie
    cena: "od 400 zł / dzień"
  },
  {
    id: "full",
    tytul: "Full Trip",
    ikona: <Map className="text-red-500" size={32} />,
    opis: "Kompleksowa organizacja: nocleg, wyżywienie i 3 dni intensywnego łowienia pod okiem ekspertów.",
    cechy: ["Nocleg w cenie", "Pełne wyżywienie", "Transfer z lotniska"],
    img: "/lodz.jpg", // Tutaj podmień na właściwe zdjęcie
    cena: "od 2200 zł / os"
  }
];

export default function Wyprawy() {
  return (
    <section id="wyprawy" className="relative py-24 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
            Profesjonalne <br /><span className="text-blue-600">Wyprawy</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg italic font-serif">
            "Nie sprzedajemy tylko czasu nad wodą. Sprzedajemy lata doświadczeń, 
            setki zerwanych przynęt i wiedzę."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {oferty.map((oferta, index) => (
            <motion.div
              key={oferta.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-[600px] bg-zinc-900/50 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-blue-500/50 transition-all duration-500"
            >
              {/* ZDJĘCIE WYPEŁNIAJĄCE CAŁOŚĆ (Kolorowe + Zoom) */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={oferta.img} 
                  className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-1000 ease-in-out" 
                  alt={oferta.tytul}
                />
                {/* SMUGA (GRADIENT) - dla czytelności napisów */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90" />
              </div>

              {/* TREŚĆ NA ZDJĘCIU */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <div className="mb-4">{oferta.ikona}</div>
                <h3 className="text-3xl font-bold text-white uppercase mb-2 tracking-tighter">
                  {oferta.tytul}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-serif italic">
                  {oferta.opis}
                </p>

                <ul className="space-y-2 mb-6">
                  {oferta.cechy.map((cecha) => (
                    <li key={cecha} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-white/80">
                      <CheckCircle2 size={12} className="text-blue-500" />
                      {cecha}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <span className="text-blue-400 font-black text-xl">{oferta.cena}</span>
                  <a href="/kontakt" className="p-3 bg-white text-black rounded-full hover:bg-blue-600 hover:text-white transition-all">
                    <CheckCircle2 size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}