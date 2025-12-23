// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Produkty() {
//   const [selectedId, setSelectedId] = useState<number | null>(null);

//   const dane = [
//     { id: 1, tytul: "Woblery Rękodzielnicze", kategoria: "Przynęty", opisKrotki: "Unikatowe przynęty na troć.", opisDlugi: "Nasze woblery są ręcznie strugane z drewna lipowego i testowane w pomorskich rzekach.", img: "/przyneta.jpg", kolor: "bg-blue-950" },
//     { id: 2, tytul: "Zestawy Muchowe", kategoria: "Sprzęt", opisKrotki: "Kompletne zestawy do połowu.", opisDlugi: "Dobieramy sprzęt pod konkretne rzeki. W zestawie wędka, kołowrotek oraz linka.", img: "/przyneta.jpg", kolor: "bg-zinc-900" },
//     { id: 3, tytul: "Odzież Techniczna", kategoria: "Odzież", opisKrotki: "Komfort w każdych warunkach.", opisDlugi: "Wodo kurtki i spodniobuty, które pozwolą Ci skupić się na łowieniu.", img: "/przyneta.jpg", kolor: "bg-blue-900" }
//   ];

//   return (
//     <section id="rekodzielo" className="text-white py-24 px-6 overflow-hidden bg-transparent">
//       <div className="max-w-7xl mx-auto">
//         <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-4 mb-12">
//           <div className="h-[1px] w-12 bg-blue-600"></div>
//           <h2 className="text-2xl font-light uppercase tracking-[0.4em]">Nasze <span className="font-bold text-blue-600">Produkty</span></h2>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {dane.map((item, index) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ amount: 0.2 }}
//               transition={{ delay: index * 0.1 }}
//               className="relative h-[480px] rounded-2xl overflow-hidden border border-white/5 group cursor-pointer bg-zinc-950/40 backdrop-blur-md"
//               onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
//             >
//               <div className="h-full flex flex-col">
//                 <div className="h-2/3 overflow-hidden relative">
//                   <img src={item.img} className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-1000 ease-in-out" alt={item.tytul} />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//                 </div>
//                 <div className="p-6 flex flex-col justify-center flex-grow">
//                   <span className="text-blue-500 text-[10px] uppercase font-bold tracking-widest">{item.kategoria}</span>
//                   <h3 className="text-xl font-bold uppercase mt-2 group-hover:text-blue-400 transition-colors">{item.tytul}</h3>
//                   <p className="text-zinc-400 mt-2 font-serif italic text-sm line-clamp-2">{item.opisKrotki}</p>
//                 </div>
//               </div>
//               <AnimatePresence>
//                 {selectedId === item.id && (
//                   <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "tween", duration: 0.5 }} className={`absolute inset-0 ${item.kolor} p-8 flex flex-col justify-center z-20`}>
//                     <h3 className="text-2xl font-black uppercase mb-4 leading-none">{item.tytul}</h3>
//                     <p className="text-zinc-200 text-sm mb-6 font-serif leading-relaxed">{item.opisDlugi}</p>
//                     <button className="text-white text-[10px] uppercase tracking-widest border-b border-white/20 pb-2 w-fit">Zamknij</button>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Produkty() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const dane = [
    { id: 1, tytul: "Woblery", kategoria: "Przynęty", opisKrotki: "Unikatowe przynęty na troć.", opisDlugi: "Nasze woblery są ręcznie strugane z drewna lipowego i testowane w pomorskich rzekach.", img: "/przyneta.jpg", kolor: "bg-blue-950" },
    { id: 2, tytul: "Zestawy Muchowe", kategoria: "Sprzęt", opisKrotki: "Kompletne zestawy do połowu.", opisDlugi: "Dobieramy sprzęt pod konkretne rzeki. W zestawie wędka, kołowrotek oraz linka.", img: "/przyneta.jpg", kolor: "bg-zinc-900" },
    { id: 3, tytul: "Odzież", kategoria: "Odzież", opisKrotki: "Komfort w każdych warunkach.", opisDlugi: "Wodo kurtki i spodniobuty, które pozwolą Ci skupić się na łowieniu.", img: "/przyneta.jpg", kolor: "bg-blue-900" }
  ];

  return (
    // Zmniejszono py-24 na py-8 oraz px-6 na px-4
    <section id="rekodzielo" className="text-white py-8 px-4 md:py-24 md:px-6 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        
        {/* NAGŁÓWEK - Mniejszy font i margines dolny */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-3 mb-6 md:mb-12">
          <div className="h-[1px] w-8 bg-blue-600"></div>
          <h2 className="text-lg md:text-2xl font-light uppercase tracking-[0.2em] md:tracking-[0.4em]">
            Nasze <span className="font-bold text-blue-600">Produkty</span>
          </h2>
        </motion.div>

        {/* GRID - Zmniejszono gap z 8 na 3 na mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {dane.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              // Drastycznie zmniejszono wysokość h-[480px] -> h-[260px] na mobile
              className="relative h-[260px] md:h-[480px] rounded-xl md:rounded-2xl overflow-hidden border border-white/5 group cursor-pointer bg-zinc-950/40 backdrop-blur-md"
              onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
            >
              <div className="h-full flex flex-col">
                {/* ZDJĘCIE - Zredukowane do 1/2 wysokości na mobile */}
                <div className="h-1/2 md:h-2/3 overflow-hidden relative">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={item.tytul} />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
                </div>
                
                {/* TEKST - Skondensowany padding p-6 -> p-4 */}
                <div className="p-4 md:p-6 flex flex-col justify-center flex-grow">
                  <span className="text-blue-500 text-[8px] md:text-[10px] uppercase font-bold tracking-widest">
                    {item.kategoria}
                  </span>
                  <h3 className="text-base md:text-xl font-bold uppercase mt-1 leading-tight group-hover:text-blue-400 transition-colors">
                    {item.tytul}
                  </h3>
                  <p className="text-zinc-400 mt-1 font-serif italic text-[10px] md:text-sm line-clamp-1">
                    {item.opisKrotki}
                  </p>
                </div>
              </div>

              {/* NAKŁADKA - Bardziej zwarta na mobile */}
              <AnimatePresence>
                {selectedId === item.id && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }} 
                    className={`absolute inset-0 ${item.kolor} p-5 md:p-8 flex flex-col justify-center z-20`}
                  >
                    <h3 className="text-lg md:text-2xl font-black uppercase mb-2 md:mb-4 leading-none">
                      {item.tytul}
                    </h3>
                    <p className="text-zinc-200 text-xs md:text-sm mb-4 md:mb-6 font-serif leading-snug line-clamp-4 md:line-clamp-none">
                      {item.opisDlugi}
                    </p>
                    <button className="text-white text-[9px] uppercase tracking-widest border-b border-white/20 pb-1 w-fit">
                      Zamknij
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}