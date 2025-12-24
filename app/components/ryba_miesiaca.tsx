"use client";
import { motion } from "framer-motion";

export default function RybaMiesiacaHero() {
  return (
    <section id="okazy" className="relative py-10 md:py-20 bg-transparent">
      <div 
        className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center overflow-hidden text-white rounded-[2rem] md:rounded-[3rem] mx-auto max-w-[95vw]"
      >
        {/* ZDJĘCIE - Pełna widoczność (bez opacity-60) */}
        <img
          src="/ryba.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Ryba Miesiąca"
        />
        
        {/* GRADIENTY DLA CZYTELNOŚCI (Smuga) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/50" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }} 
          className="relative z-10 text-center px-4 w-full"
        >
          <span className="inline-block border border-blue-600/50 bg-black/40 backdrop-blur-sm text-blue-400 px-6 py-1.5 rounded-full font-bold uppercase tracking-[0.2em] text-[9px] md:text-xs mb-4">
            Aktualne Trofeum
          </span>
          
          {/* IDEALNIE RESPONSYWNY NAGŁÓWEK (Jednostki vw) */}
          <h1 className="flex flex-col items-center justify-center leading-[0.9] tracking-tighter uppercase font-black">
            <span className="text-[14vw] md:text-[10vw] lg:text-[7.5rem] drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
              Ryba
            </span>
            <span
              className="text-transparent border-t-2 border-b-2 border-white py-1 md:py-2 px-6 italic text-[11vw] md:text-[8vw] lg:text-[6.5rem] mt-2 md:mt-4"
              style={{ WebkitTextStroke: "1px white" }}
            >
              Miesiąca
            </span>
          </h1>
          
          <p className="mt-6 md:mt-10 text-white text-sm md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed italic font-serif drop-shadow-[0_2px_10px_rgba(0,0,0,1)] px-2">
            "Potężny samiec troci wędrownej złowiony o świcie w dorzeczu
            Parsęty. Ryba po krótkiej sesji zdjęciowej wróciła do wody."
          </p>
        </motion.div>
      </div>
    </section>
  );
}