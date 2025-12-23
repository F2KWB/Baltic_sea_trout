"use client";
import { motion } from "framer-motion";

export default function Wstep() {
  return (
    // DODANO: id="o-nas" oraz scroll-mt-24 (odstęp od góry przy przewijaniu)
    <section 
      id="o-nas" 
      className="py-24 px-6 max-w-7xl mx-auto overflow-hidden scroll-mt-24"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* LEWA STRONA: ZDJĘCIE */}
        <motion.div 
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1, margin: "-50px" }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full md:w-1/2"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="/troc_pion_ja2.jpg" 
              alt="Pasja wędkarska" 
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
          </div>
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-blue-600 z-0"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-blue-600 z-0"></div>
        </motion.div>

        {/* PRAWA STRONA: TEKST */}
        <motion.div 
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-1/2 space-y-6"
        >
          <div className="inline-block border border-blue-600/50 px-4 py-1 rounded-full">
            <span className="text-blue-500 uppercase tracking-widest text-[10px] font-bold">
              Nasza Misja
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white">
            Pasja wykuta <br /> 
            <span className="text-blue-600">nad brzegiem rzeki</span>
          </h2>
          
          <div className="space-y-4 text-zinc-400 leading-relaxed text-lg">
            <p>
              Ta strona powstała z głębokiej pasji do wędkarstwa szlachetnego. Naszym celem jest stworzenie mapy...
            </p>
            <p>
              Prezentujemy tutaj autorskie zestawienie najlepszych łowisk...
            </p>
          </div>

          <div className="pt-6 border-t border-white/10 text-white">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-blue-600"></div>
              <p className="font-serif italic text-xl">Adam Kowalski</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}