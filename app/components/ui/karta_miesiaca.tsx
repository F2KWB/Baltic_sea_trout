
"use client";
import { motion } from "framer-motion";

// Definicja "wtyczek" (propsów) dla naszego wzoru
interface HeroProps {
  id: string;               // np. "ryba", "przepis", "historia"
  nadtytul: string;         // np. "Wyjątkowe Chwile"
  tytulGlowny: string;      // np. "Duchy"
  tytulPochylony: string;   // np. "Parsęty"
  opis: string;             // Cytat lub opis
  imgSrc: string;           // Ścieżka do zdjęcia
  akcentKolor: string;      // np. "red-500", "orange-500", "blue-500"
  przyciskTekst?: string;   // Opcjonalny tekst przycisku
}



export default function HeroSekcjaMiesiaca({
  id,
  nadtytul,
  tytulGlowny,
  tytulPochylony,
  opis,
  imgSrc,
  akcentKolor,
  przyciskTekst = "Czytaj więcej"
}: HeroProps) {
  return (
    <section id={id} className="relative py-10 md:py-20 bg-transparent">
      <div className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center overflow-hidden text-white rounded-[2rem] md:rounded-[3rem] mx-auto max-w-[95vw]">
        
        {/* TŁO */}
        <img
          src={imgSrc}
          className="absolute inset-0 w-full h-full object-cover"
          alt={tytulGlowny}
        />
        
        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/60" />

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
          className="relative z-10 text-center px-4 w-full"
        >
          {/* Etykieta nad tytułem */}
          <span className={`inline-block border border-${akcentKolor}/50 bg-black/40 backdrop-blur-sm text-${akcentKolor} px-6 py-1.5 rounded-full font-bold uppercase tracking-[0.2em] text-[9px] md:text-xs mb-6`}>
            {nadtytul}
          </span>
          
          <h1 className="flex flex-col items-center justify-center leading-[0.9] tracking-tighter uppercase font-black">
            <span className="text-[14vw] md:text-[10vw] lg:text-[7.5rem] text-zinc-300 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
              {tytulGlowny}
            </span>
            <span
              className={`text-transparent border-t-2 border-b-2 border-${akcentKolor} py-1 md:py-2 px-6 italic text-[11vw] md:text-[8vw] lg:text-[6.5rem] mt-2 md:mt-4`}
              style={{ WebkitTextStroke: "1px white" }}
            >
              {tytulPochylony}
            </span>
          </h1>
          
          <p className="mt-6 md:mt-10 text-white text-sm md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed italic font-serif drop-shadow-[0_2px_10px_rgba(0,0,0,1)] px-2">
            "{opis}"
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-10 md:px-12 py-3 md:py-4 border border-white/20 bg-black/20 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300 uppercase text-[10px] md:text-xs font-bold tracking-widest"
          >
            {przyciskTekst}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}