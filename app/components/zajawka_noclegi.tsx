// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import dynamic from "next/dynamic";
// import { BedDouble, ChevronRight } from "lucide-react";

// // Importujemy mapę Google bez SSR
// const MapBackground = dynamic(() => import("../components/mapa_google"), {
//   ssr: false,
//   loading: () => <div className="absolute inset-0 bg-zinc-900 animate-pulse" />
// });

// export default function ZajawkaNoclegi() {
//   return (
//     <section id="noclegi-info" className="py-24 px-6  scroll-mt-24 overflow-hidden border-t border-white/5">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="group relative h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl"
//         >
//           {/* TŁO: MAPA GOOGLE NA CAŁOŚCI */}
//           <div className="absolute inset-0 z-0 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000">
//             <MapBackground />
//             {/* Szklana tarcza – blokuje przesuwanie mapy palcem, by móc przewijać stronę */}
//             <div className="absolute inset-0 z-10 pointer-events-auto cursor-default" />
//           </div>

//           {/* GRADIENT MASKUJĄCY (Dla czytelności tekstu) */}
//           <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none" />

//           {/* TREŚĆ (Pozycjonowana identycznie jak w Miejscówkach) */}
// {/* TREŚĆ - Zmieniony padding na p-6 dla małych ekranów */}
//           <div className="absolute inset-0 z-20 p-6 md:p-16 flex flex-col justify-end items-start">
//             <div className="flex items-center gap-3 text-blue-500 mb-4">
//               <BedDouble size={24} />
//               <span className="text-[10px] font-black uppercase tracking-[0.4em]">Baza Wypadowa</span>
//             </div>
            
//             {/* Nagłówek - dodano text-4xl jako bazowy i mniejszy tracking na mobile */}
//             <h3 className="text-4xl min-[400px]:text-5xl md:text-8xl font-black text-white uppercase tracking-tight min-[400px]:tracking-tighter mb-6 leading-[0.9]">
//               Baza<br/><span className="text-blue-600">Noclegowa</span>
//             </h3>
            
//             <p className="text-zinc-400 text-sm md:text-lg leading-relaxed mb-10 max-w-xl">
//               Wyselekcjonowane domki i apartamenty przyjazne wędkarzom. Blisko wody, z bezpiecznym miejscem na sprzęt i klimatem, którego szukasz.
//             </p>

//             <Link href="/noclegi" className="inline-flex items-center gap-4 group/btn">
//               <div className="px-10 py-5 bg-white text-black rounded-full text-xs font-black uppercase tracking-widest transition-all group-hover/btn:bg-blue-600 group-hover/btn:text-white shadow-xl">
//                 Otwórz Mapę Noclegów
//               </div>
//               <div className="w-14 h-14 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-white group-hover/btn:bg-white group-hover/btn:text-black transition-all">
//                 <ChevronRight size={24} />
//               </div>
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { BedDouble, ChevronRight } from "lucide-react";

const MapBackground = dynamic(() => import("../components/mapa_google"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-zinc-900 animate-pulse" />
});

export default function ZajawkaNoclegi() {
  return (
    // Zmniejszono py-24 -> py-6 oraz px-6 -> px-4
    <section id="noclegi-info" className="py-6 px-4 md:py-24 md:px-6 scroll-mt-24 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          // Drastycznie zmniejszono wysokość na mobile: h-[320px] zamiast h-[500px]
          className="group relative h-[320px] md:h-[600px] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl"
        >
          {/* TŁO */}
          <div className="absolute inset-0 z-0 grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-1000">
            <MapBackground />
            <div className="absolute inset-0 z-10 pointer-events-auto cursor-default" />
          </div>

          {/* GRADIENT */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent pointer-events-none" />

          {/* TREŚĆ - Zmniejszony padding p-6 */}
          <div className="absolute inset-0 z-20 p-6 md:p-16 flex flex-col justify-end items-start">
            <div className="flex items-center gap-2 text-blue-500 mb-2 md:mb-4">
              <BedDouble size={18} className="md:w-6 md:h-6" />
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em]">Baza Wypadowa</span>
            </div>
            
            {/* Nagłówek: text-3xl zamiast 4xl/5xl na mobile */}
            <h3 className="text-3xl md:text-8xl font-black text-white uppercase tracking-tighter mb-3 md:mb-6 leading-none">
              Baza<br/><span className="text-blue-600">Noclegowa</span>
            </h3>
            
            {/* Opis: text-[11px] i line-clamp-2, aby nie rozpychać banera */}
            <p className="text-zinc-400 text-[11px] md:text-lg leading-relaxed mb-6 md:mb-10 max-w-xl line-clamp-2 md:line-clamp-none">
              Wyselekcjonowane domki i apartamenty przyjazne wędkarzom. Blisko wody i z bezpiecznym miejscem na sprzęt.
            </p>

            <Link href="/noclegi" className="inline-flex items-center gap-2 group/btn">
              {/* Przycisk: skondensowany padding i rozmiar textu */}
              <div className="px-6 py-3 md:px-10 md:py-5 bg-white text-black rounded-full text-[9px] md:text-xs font-black uppercase tracking-widest transition-all group-hover/btn:bg-blue-600 group-hover/btn:text-white shadow-xl">
                Mapa Noclegów
              </div>
              {/* Strzałka: zmniejszona w-10 */}
              <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-white group-hover/btn:bg-white group-hover/btn:text-black transition-all">
                <ChevronRight size={18} />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}