// "use client";
// import { motion } from "framer-motion";

// export default function HistoriaMiesiacaHero() {
//   return (
//     <section id="historie" className="relative py-10 md:py-20 bg-transparent">
//       <div 
//         className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center overflow-hidden text-white rounded-[2rem] md:rounded-[3rem] mx-auto max-w-[95vw]"
//       >        
//         {/* ZDJĘCIE - Pełna widoczność (bez opacity-40) */}
//         <img
//           src="/klif.jpg" 
//           className="absolute inset-0 w-full h-full object-cover"
//           alt="Mglista rzeka o świcie"
//         />
        
//         {/* CIEMNY, MGLISTY GRADIENT (Smuga dla czytelności) */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/60" />

//         <motion.div 
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2, ease: "easeOut" }}
//           viewport={{ amount: 0.3 }}
//           className="relative z-10 text-center px-4 w-full"
//         >
//           <span className="inline-block border border-red-900/50 bg-black/40 backdrop-blur-sm text-red-500 px-6 py-1.5 rounded-full font-bold uppercase tracking-[0.2em] text-[9px] md:text-xs mb-6">
//             Wyjątkowe Chwile
//           </span>
          
//           {/* RESPONSYWNY NAGŁÓWEK (Jednostki vw) */}
//           <h1 className="flex flex-col items-center justify-center leading-[0.9] tracking-tighter uppercase font-black">
//             <span className="text-[14vw] md:text-[10vw] lg:text-[7.5rem] text-zinc-300 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
//               Duchy
//             </span>
//             <span
//               className="text-transparent border-t-2 border-b-2 border-white py-1 md:py-2 px-6 italic text-[11vw] md:text-[8vw] lg:text-[6.5rem] mt-2 md:mt-4"
//               style={{ WebkitTextStroke: "1px white" }}
//             >
//               Parsęty
//             </span>
//           </h1>
          
//           <p className="mt-6 md:mt-10 text-white text-sm md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed italic font-serif drop-shadow-[0_2px_10px_rgba(0,0,0,1)] px-2">
//             "Zegar wskazywał trzecią rano, gdy mgła nad wodą zgęstniała tak bardzo, że nie widziałem czubka wędziska. Wtedy usłyszałem plusk..."
//           </p>
          
//           <motion.button 
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="mt-10 px-10 md:px-12 py-3 md:py-4 border border-white/20 bg-black/20 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300 uppercase text-[10px] md:text-xs font-bold tracking-widest"
//           >
//             Czytaj całą historię
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";

export default function HistoriaMiesiacaHero() {
  return (
    // Zmniejszono py-10 na py-4 (oszczędność miejsca)
    <section id="historie" className="relative py-4 md:py-20 bg-transparent">
      <div 
        // Drastycznie zmniejszono wysokość na mobile: h-[500px] -> h-[350px]
        className="relative h-[350px] md:h-[600px] w-full flex items-center justify-center overflow-hidden text-white rounded-[1.5rem] md:rounded-[3rem] mx-auto max-w-[95vw]"
      >        
        <img
          src="/klif.jpg" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Klif"
        />
        
        {/* Mocniejszy gradient na dole, by tekst był czytelny przy mniejszej wysokości */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 text-center px-4 w-full"
        >
          {/* Zmniejszono margines mb-6 -> mb-3 i paddingi */}
          <span className="inline-block border border-red-900/50 bg-black/60 backdrop-blur-sm text-red-500 px-4 py-1 rounded-full font-bold uppercase tracking-[0.2em] text-[8px] md:text-xs mb-3">
            Wyjątkowe Chwile
          </span>
          
          {/* Nagłówek: text-[14vw] -> text-[10vw] (o 30% mniejszy) */}
          <h1 className="flex flex-col items-center justify-center leading-[0.85] tracking-tighter uppercase font-black">
            <span className="text-[10vw] md:text-[10vw] lg:text-[7.5rem] text-zinc-300">
              Duchy
            </span>
            <span
              className="text-transparent border-t border-b border-white py-1 px-4 italic text-[8vw] md:text-[8vw] lg:text-[6.5rem] mt-1"
              style={{ WebkitTextStroke: "1px white" }}
            >
              Parsęty
            </span>
          </h1>
          
          {/* Paragraf: mniejszy tekst text-xs i krótszy margines */}
          <p className="mt-4 md:mt-10 text-white text-xs md:text-xl max-w-2xl mx-auto leading-relaxed italic font-serif px-4 opacity-90 line-clamp-3">
            "Zegar wskazywał trzecią rano, gdy mgła nad wodą zgęstniała tak bardzo, że nie widziałem czubka wędziska..."
          </p>
          
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-8 py-3 border border-white/20 bg-black/40 backdrop-blur-md text-[9px] md:text-xs font-bold tracking-widest uppercase"
          >
            Czytaj historię
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}