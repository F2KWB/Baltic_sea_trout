// "use client";
// import { motion } from "framer-motion";
// import { Instagram, Youtube, Globe } from "lucide-react";

// export default function MorscyTworcy() {
//   const tworcy = [
//     {
//       id: 1,
//       imie: "Marek 'Srebrny' Rybak",
//       rola: "Fotograf & Przewodnik",
//       opis: "Specjalista od bałtyckich srebrniaków. Jego zdjęcia publikowane są w największych magazynach wędkarskich w Europie.",
//       img: "/pociag.jpg",
//       social: { ig: "#", yt: "#", www: "#" }
//     },
//     {
//       id: 2,
//       imie: "Katarzyna Wędka",
//       rola: "Twórca przynęt",
//       opis: "Rzemieślniczka, której woblery stały się legendą na pomorskich rzekach. Na jej kanale YT znajdziesz tajniki budowy przynęt.",
//       img: "/troc_pion_ja.jpg",
//       social: { ig: "#", yt: "#", www: "#" }
//     }
//   ];

//   return (
//     <section id="tworcy" className="py-24 px-6 scroll-mt-24">
//       <div className="max-w-7xl mx-auto">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false, amount: 0.5 }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
//             Morscy <span className="text-blue-500">Twórcy</span>
//           </h2>
//           <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
//             Ludzie, którzy dzielą się pasją, wiedzą i tworzą unikalne rzeczy dla naszej społeczności.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16">
//           {tworcy.map((tworca, index) => (
//             <motion.div
//               key={tworca.id}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: false, amount: 0.3 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               // ZMIANA: Dodano xl:flex-row (układ poziomy tylko na bardzo dużych ekranach) 
//               // oraz min-h dla stabilności ramki
//               className="flex flex-col xl:flex-row items-center xl:items-start gap-8 bg-black/40 p-6 md:p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group overflow-hidden"
//             >
//               {/* ZDJĘCIE TWÓRCY */}
//               <div className="relative shrink-0">
//                 {/* Zmniejszono nieco wymiary na średnich ekranach, by nie wypychały tekstu */}
//                 <div className="w-32 h-32 md:w-40 md:h-40 xl:w-48 xl:h-48 rounded-full overflow-hidden border-2 border-blue-600/20 group-hover:border-blue-500 transition-colors">
//                   <img 
//                     src={tworca.img} 
//                     alt={tworca.imie} 
//                     className="w-full h-full object-cover  group-hover:grayscale-0 transition-all duration-500"
//                   />
//                 </div>
//                 <div className="absolute inset-0 rounded-full border border-blue-500/50 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse" />
//               </div>

//               {/* OPIS I LINKI */}
//               {/* ZMIANA: xl:text-left - tekst centruje się, gdy zdjęcie jest na górze */}
//               <div className="flex flex-col text-center xl:text-left flex-1 min-w-0">
//                 <span className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-2">
//                   {tworca.rola}
//                 </span>
//                 <h3 className="text-xl md:text-2xl xl:text-3xl font-bold text-white mb-3 truncate-none">
//                   {tworca.imie}
//                 </h3>
//                 {/* ZMIANA: text-sm dla lepszego dopasowania w trudnych rozdzielczościach */}
//                 <p className="text-zinc-400 leading-relaxed mb-6 italic text-sm md:text-base">
//                   "{tworca.opis}"
//                 </p>
                
//                 <div className="flex justify-center xl:justify-start gap-3 mt-auto">
//                   <a href={tworca.social.ig} className="p-2.5 bg-zinc-800 text-white rounded-full hover:bg-blue-600 transition-all">
//                     <Instagram size={18} />
//                   </a>
//                   <a href={tworca.social.yt} className="p-2.5 bg-zinc-800 text-white rounded-full hover:bg-red-600 transition-all">
//                     <Youtube size={18} />
//                   </a>
//                   <a href={tworca.social.www} className="p-2.5 bg-zinc-800 text-white rounded-full hover:bg-white hover:text-black transition-all">
//                     <Globe size={18} />
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import { Instagram, Youtube, Globe } from "lucide-react";

export default function MorscyTworcy() {
  const tworcy = [
    {
      id: 1,
      imie: "Marek 'Srebrny' Rybak",
      rola: "Fotograf & Przewodnik",
      opis: "Specjalista od bałtyckich srebrniaków. Jego zdjęcia publikowane są w magazynach w całej Europie.",
      img: "/pociag.jpg",
      social: { ig: "#", yt: "#", www: "#" }
    },
    {
      id: 2,
      imie: "Katarzyna Wędka",
      rola: "Twórca przynęt",
      opis: "Rzemieślniczka, której woblery stały się legendą. Na jej kanale YT znajdziesz tajniki budowy przynęt.",
      img: "/troc_pion_ja.jpg",
      social: { ig: "#", yt: "#", www: "#" }
    }
  ];

  return (
    // Zmniejszono py-24 -> py-10 oraz px-4
    <section id="tworcy" className="py-10 px-4 scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* NAGŁÓWEK - mniejszy margines dolny mb-20 -> mb-8 */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          {/* text-4xl -> text-2xl */}
          <h2 className="text-2xl md:text-6xl font-black uppercase tracking-tighter text-white">
            Morscy <span className="text-blue-500">Twórcy</span>
          </h2>
          <p className="text-zinc-500 mt-2 text-xs md:text-base max-w-xl mx-auto">
            Ludzie, którzy dzielą się pasją i wiedzą z naszą społecznością.
          </p>
        </motion.div>

        {/* GRID - mniejszy gap gap-8 -> gap-4 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          {tworcy.map((tworca, index) => (
            <motion.div
              key={tworca.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              // p-6 md:p-8 -> p-5
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-8 bg-zinc-900/40 p-5 md:p-8 rounded-[2rem] border border-white/5 hover:border-blue-500/30 transition-all group"
            >
              {/* ZDJĘCIE - mniejsze wymiary na mobile w-32 -> w-24 */}
              <div className="relative shrink-0">
                <div className="w-24 h-24 md:w-40 md:h-40 xl:w-48 xl:h-48 rounded-full overflow-hidden border-2 border-blue-600/20 group-hover:border-blue-500 transition-colors">
                  <img 
                    src={tworca.img} 
                    alt={tworca.imie} 
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
              </div>

              {/* OPIS I LINKI */}
              <div className="flex flex-col text-center sm:text-left flex-1 min-w-0">
                <span className="text-blue-500 text-[9px] md:text-xs font-bold uppercase tracking-widest mb-1">
                  {tworca.rola}
                </span>
                <h3 className="text-lg md:text-2xl xl:text-3xl font-bold text-white mb-2">
                  {tworca.imie}
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-4 italic text-[11px] md:text-base">
                  "{tworca.opis}"
                </p>
                
                {/* SOCIALS - mniejsze ikony i paddingi */}
                <div className="flex justify-center sm:justify-start gap-2">
                  <a href={tworca.social.ig} className="p-2 bg-zinc-800 text-white rounded-full hover:bg-blue-600 transition-all scale-90 md:scale-100">
                    <Instagram size={16} />
                  </a>
                  <a href={tworca.social.yt} className="p-2 bg-zinc-800 text-white rounded-full hover:bg-red-600 transition-all scale-90 md:scale-100">
                    <Youtube size={16} />
                  </a>
                  <a href={tworca.social.www} className="p-2 bg-zinc-800 text-white rounded-full hover:bg-white hover:text-black transition-all scale-90 md:scale-100">
                    <Globe size={16} />
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