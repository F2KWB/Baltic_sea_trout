// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { Map, ChevronRight } from "lucide-react";

// export default function ZajawkaMiejscowki() {
//   return (
//     <section id="miejscowki-info" className="py-24 px-6 scroll-mt-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="group relative h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl"
//         >
//           {/* TŁO */}
//           <div className="absolute inset-0">
//             <img 
//               src="/mapa.webp" 
//               className="w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-105" 
//               alt="Mapa Rewirów" 
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
//           </div>

//           {/* TREŚĆ */}
//           <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end">
//             <div className="flex items-center gap-3 text-blue-500 mb-4">
//               <Map size={24} />
//               <span className="text-[10px] font-black uppercase tracking-[0.4em]">Eksploruj Rewiry</span>
//             </div>
            
//             <h3 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
//               Mapa<br/><span className="text-blue-600">Łowisk</span>
//             </h3>
            
//             <p className="text-zinc-400 text-sm md:text-lg leading-relaxed mb-10 max-w-xl">
//               Interaktywny przewodnik po najlepszych miejscówkach trociowych. Sprawdź parkingi, dojścia do wody i techniczne opisy łowisk przygotowane przez praktyków.
//             </p>

//             <Link href="/miejscowki" className="inline-flex items-center gap-4 group/btn">
//               <div className="px-10 py-5 bg-blue-600 rounded-full text-white text-xs font-black uppercase tracking-widest transition-all group-hover/btn:bg-blue-500 shadow-xl">
//                 Otwórz Pełną Mapę
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
import { Map, ChevronRight } from "lucide-react";

export default function ZajawkaMiejscowki() {
  return (
    // Zmniejszono py-24 na py-6 oraz px-6 na px-4
    <section id="miejscowki-info" className="py-6 px-4 md:py-24 md:px-6 scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          // Drastycznie zmniejszono wysokość h-[500px] -> h-[320px] na mobile
          className="group relative h-[320px] md:h-[600px] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl"
        >
          {/* TŁO */}
          <div className="absolute inset-0">
            <img 
              src="/mapa.webp" 
              className="w-full h-full object-cover opacity-40 transition-transform duration-1000 group-hover:scale-105" 
              alt="Mapa Rewirów" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-black/20" />
          </div>

          {/* TREŚĆ - mniejszy padding p-8 -> p-6 */}
          <div className="absolute inset-0 p-6 md:p-16 flex flex-col justify-end">
            <div className="flex items-center gap-2 text-blue-500 mb-2 md:mb-4">
              <Map size={18} className="md:w-6 md:h-6" />
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em]">Eksploruj Rewiry</span>
            </div>
            
            {/* Nagłówek: text-5xl -> text-3xl */}
            <h3 className="text-3xl md:text-8xl font-black text-white uppercase tracking-tighter mb-3 md:mb-6 leading-none">
              Mapa<br/><span className="text-blue-600">Łowisk</span>
            </h3>
            
            {/* Opis: text-sm -> text-[11px] i line-clamp */}
            <p className="text-zinc-400 text-[11px] md:text-lg leading-relaxed mb-6 md:mb-10 max-w-xl line-clamp-3 md:line-clamp-none">
              Interaktywny przewodnik po najlepszych miejscówkach trociowych. Sprawdź parkingi i dojścia do wody.
            </p>

            <Link href="/miejscowki" className="inline-flex items-center gap-2 group/btn">
              {/* Przycisk: mniejszy padding i font */}
              <div className="px-6 py-3 md:px-10 md:py-5 bg-blue-600 rounded-full text-white text-[9px] md:text-xs font-black uppercase tracking-widest transition-all group-hover/btn:bg-blue-500 shadow-xl">
                Otwórz Mapę
              </div>
              {/* Przycisk strzałki: mniejszy rozmiar w-14 -> w-10 */}
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