"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { BedDouble, ChevronRight } from "lucide-react";

// Importujemy mapę Google bez SSR
const MapBackground = dynamic(() => import("../components/mapa_google"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-zinc-900 animate-pulse" />
});

export default function ZajawkaNoclegi() {
  return (
    <section id="noclegi-info" className="py-24 px-6  scroll-mt-24 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} 
          className="group relative h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl"
        >
          {/* TŁO: MAPA GOOGLE NA CAŁOŚCI */}
          <div className="absolute inset-0 z-0 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000">
            <MapBackground />
            {/* Szklana tarcza – blokuje przesuwanie mapy palcem, by móc przewijać stronę */}
            <div className="absolute inset-0 z-10 pointer-events-auto cursor-default" />
          </div>

          {/* GRADIENT MASKUJĄCY (Dla czytelności tekstu) */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none" />

          {/* TREŚĆ (Pozycjonowana identycznie jak w Miejscówkach) */}
{/* TREŚĆ - Zmieniony padding na p-6 dla małych ekranów */}
          <div className="absolute inset-0 z-20 p-6 md:p-16 flex flex-col justify-end items-start">
            <div className="flex items-center gap-3 text-blue-500 mb-4">
              <BedDouble size={24} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Baza Wypadowa</span>
            </div>
            
            {/* Nagłówek - dodano text-4xl jako bazowy i mniejszy tracking na mobile */}
            <h3 className="text-4xl min-[400px]:text-5xl md:text-8xl font-black text-white uppercase tracking-tight min-[400px]:tracking-tighter mb-6 leading-[0.9]">
              Baza<br/><span className="text-blue-500">Noclegowa</span>
            </h3>
            
            <p className="text-zinc-400 text-sm md:text-lg leading-relaxed mb-10 max-w-xl">
              Wyselekcjonowane domki i apartamenty przyjazne wędkarzom. Blisko wody, z bezpiecznym miejscem na sprzęt i klimatem, którego szukasz.
            </p>

            <Link href="/noclegi" className="inline-flex items-center gap-4 group/btn">
              <div className="px-10 py-5 bg-white text-black rounded-full text-xs font-black uppercase tracking-widest transition-all group-hover/btn:bg-blue-500 group-hover/btn:text-white shadow-xl">
                Otwórz Mapę Noclegów
              </div>
              <div className="w-14 h-14 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-white group-hover/btn:bg-white group-hover/btn:text-black transition-all">
                <ChevronRight size={24} />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}