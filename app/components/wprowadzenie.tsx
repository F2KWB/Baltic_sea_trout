

"use client";
import { motion } from "framer-motion";

export default function Wstep() {
  return (
    // Zmniejszono py-24 na py-8 oraz px-6 na px-4
    <section 
      id="o-nas" 
      className="py-8 md:py-24 px-4 md:px-6 max-w-7xl mx-auto overflow-hidden scroll-mt-24"
    >
      {/* Zmniejszono gap-12 na gap-6 na mobile */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-20">
        
        {/* LEWA STRONA: ZDJĘCIE - Drastycznie obniżone h-[400px] na h-[280px] */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="relative w-full md:w-1/2"
        >
          <div className="relative z-10 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="/troc_pion_ja2.jpg" 
              alt="Pasja wędkarska" 
              className="w-full h-[280px] md:h-[600px] object-cover"
            />
          </div>
          {/* Zmniejszono ozdobne narożniki na mobile */}
          <div className="absolute -top-2 -left-2 w-12 h-12 border-t border-l border-blue-600 z-0"></div>
          <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b border-r border-blue-600 z-0"></div>
        </motion.div>

        {/* PRAWA STRONA: TEKST - Zredukowane space-y-6 na space-y-4 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full md:w-1/2 space-y-3 md:space-y-6"
        >
          <div className="inline-block border border-blue-600/50 px-3 py-0.5 rounded-full">
            <span className="text-blue-600 uppercase tracking-widest text-[8px] md:text-[10px] font-bold">
              Nasza Misja
            </span>
          </div>
          
          {/* Nagłówek: text-4xl -> text-2xl */}
          <h2 className="text-2xl md:text-6xl font-black uppercase tracking-tighter leading-tight text-white">
            Pasja wykuta <br /> 
            <span className="text-blue-600">nad brzegiem rzeki</span>
          </h2>
          
          {/* Tekst: text-lg -> text-xs/sm */}
          <div className="space-y-3 text-zinc-400 leading-relaxed text-xs md:text-lg">
            <p>
              Ta strona powstała z głębokiej pasji do wędkarstwa szlachetnego. Naszym celem jest stworzenie mapy...
            </p>
            <p className="hidden md:block"> {/* Ukrycie drugiego akapitu na bardzo małych ekranach */}
              Prezentujemy tutaj autorskie zestawienie najlepszych łowisk...
            </p>
          </div>

          {/* Podpis - skondensowany padding pt-6 -> pt-4 */}
          <div className="pt-4 border-t border-white/10 text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-blue-600"></div>
              <p className="font-serif italic text-base md:text-xl leading-none">Adam Kowalski</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}