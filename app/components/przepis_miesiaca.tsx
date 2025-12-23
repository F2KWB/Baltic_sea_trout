// "use client";
// import { motion } from "framer-motion";

// export default function PrzepisMiesiacaHero() {
//   return (
//     <section id="kulinaria" className="relative py-10 md:py-20 bg-transparent">
//       <div 
//         className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center overflow-hidden text-white rounded-[2rem] md:rounded-[3rem] mx-auto max-w-[95vw]"
//       >
//         {/* ZDJĘCIE */}
//         <img
//           src="/molo.jpg" 
//           className="absolute inset-0 w-full h-full object-cover"
//           alt="Pieczona troć"
//         />
        
//         {/* NAKŁADKI DLA CZYTELNOŚCI */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/50" />

//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 text-center px-4 w-full"
//         >
//           <span className="inline-block border border-orange-500/50 text-orange-400 px-4 py-1.5 rounded-full font-bold uppercase tracking-[0.2em] text-[9px] md:text-xs bg-black/40 backdrop-blur-sm mb-4">
//             Smaki nad rzeką
//           </span>
          
//           {/* RESPONSYWNY NAGŁÓWEK */}
//           <h1 className="flex flex-col items-center justify-center leading-[0.9] tracking-tighter uppercase font-black">
//             <span className="text-[12vw] md:text-[8vw] lg:text-[7rem] drop-shadow-2xl">
//               Przepis
//             </span>
//             <span
//               className="text-transparent border-t-2 border-b-2 border-orange-500 py-1 md:py-2 px-6 italic text-[10vw] md:text-[7vw] lg:text-[6rem] mt-2 md:mt-4"
//               style={{ WebkitTextStroke: "1px white" }}
//             >
//               Miesiąca
//             </span>
//           </h1>
          
//           <p className="mt-6 md:mt-10 text-white text-sm md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed italic drop-shadow-lg px-2">
//             "Pieczona troć w maśle czosnkowym z dzikimi ziołami. Prosty sposób na wydobycie szlachetnego smaku świeżego połowu."
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";

export default function PrzepisMiesiacaHero() {
  return (
    // Drastyczne skrócenie marginesów sekcji py-10 -> py-4
    <section id="kulinaria" className="relative py-4 md:py-20 bg-transparent">
      <div 
        // Zmniejszono wysokość h-[500px] -> h-[320px] dla mobile
        className="relative h-[320px] md:h-[600px] w-full flex items-center justify-center overflow-hidden text-white rounded-[1.5rem] md:rounded-[3rem] mx-auto max-w-[95vw]"
      >
        {/* ZDJĘCIE */}
        <img
          src="/molo.jpg" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Pieczona troć"
        />
        
        {/* NAKŁADKI DLA CZYTELNOŚCI - wzmocniony gradient dolny */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 text-center px-4 w-full"
        >
          {/* Badge: zmniejszono margines i font */}
          <span className="inline-block border border-orange-500/50 text-orange-400 px-4 py-1 rounded-full font-bold uppercase tracking-[0.2em] text-[8px] md:text-xs bg-black/60 backdrop-blur-sm mb-3">
            Smaki nad rzeką
          </span>
          
          {/* RESPONSYWNY NAGŁÓWEK - zmniejszono jednostki vw */}
          <h1 className="flex flex-col items-center justify-center leading-[0.85] tracking-tighter uppercase font-black">
            <span className="text-[10vw] md:text-[8vw] lg:text-[7rem]">
              Przepis
            </span>
            <span
              className="text-transparent border-t border-b border-orange-500 py-1 px-4 italic text-[8.5vw] md:text-[7vw] lg:text-[6rem] mt-1"
              style={{ WebkitTextStroke: "1px white" }}
            >
              Miesiąca
            </span>
          </h1>
          
          {/* Paragraf: mniejszy tekst text-xs i krótszy margines */}
          <p className="mt-4 md:mt-10 text-white text-xs md:text-xl max-w-2xl mx-auto leading-relaxed italic font-serif px-4 opacity-90 line-clamp-3">
            "Pieczona troć w maśle czosnkowym z dzikimi ziołami. Prosty sposób na wydobycie szlachetnego smaku."
          </p>
        </motion.div>
      </div>
    </section>
  );
}