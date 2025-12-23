// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Przepisy() {
//   const [selectedId, setSelectedId] = useState<number | null>(null);

//   const dane = [
//     { id: 1, tytul: "Troć w ziołach", kategoria: "Pieczenie", opisKrotki: "Delikatne mięso z ogniska.", opisDlugi: "Tradycyjny przepis na rybę pieczoną w folii z dodatkiem masła czosnkowego i świeżego koperku.", img: "/ryba.jpg", kolor: "bg-orange-950" },
//     { id: 2, tytul: "Tatar z łososia", kategoria: "Przystawka", opisKrotki: "Surowa świeżość morza.", opisDlugi: "Drobno siekany filet z dodatkiem szalotki, kaparów i odrobiny soku z cytryny.", img: "/troc_pion_ja.jpg", kolor: "bg-emerald-950" }
//   ];

//   return (
//     <section id="przepisy" className="text-white py-24 px-6 overflow-hidden bg-transparent">
//       <div className="max-w-7xl mx-auto">
//         <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-4 mb-12">
//           <div className="h-[1px] w-12 bg-orange-600"></div>
//           <h2 className="text-2xl font-light uppercase tracking-[0.4em]">Przepisy <span className="font-bold text-orange-600">Kulinarne</span></h2>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {dane.map((item, index) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ amount: 0.2 }}
//               transition={{ delay: index * 0.2 }}
//               className="relative h-[500px] rounded-2xl overflow-hidden border border-white/5 group cursor-pointer bg-zinc-950/40 backdrop-blur-md"
//               onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
//             >
//               <div className="h-full flex flex-col">
//                 <div className="h-2/3 overflow-hidden relative">
//                   <img src={item.img} className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-1000 ease-in-out" alt={item.tytul} />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//                 </div>
//                 <div className="p-8 flex flex-col justify-center flex-grow">
//                   <span className="text-orange-500 text-[10px] uppercase font-bold tracking-widest">{item.kategoria}</span>
//                   <h3 className="text-2xl font-bold uppercase mt-2 group-hover:text-orange-400 transition-colors">{item.tytul}</h3>
//                   <p className="text-zinc-400 mt-2 font-serif italic line-clamp-1">{item.opisKrotki}</p>
//                 </div>
//               </div>
//               <AnimatePresence>
//                 {selectedId === item.id && (
//                   <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "tween", duration: 0.5 }} className={`absolute inset-0 ${item.kolor} p-10 flex flex-col justify-center z-20`}>
//                     <h3 className="text-3xl font-black uppercase mb-6 leading-none">{item.tytul}</h3>
//                     <p className="text-zinc-200 text-lg mb-8 font-serif leading-relaxed line-clamp-4">{item.opisDlugi}</p>
//                     <button className="text-white text-[10px] uppercase tracking-widest border-b border-white/20 pb-2 w-fit">Zamknij przepis</button>
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

export default function Przepisy() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const dane = [
    { id: 1, tytul: "Troć w ziołach", kategoria: "Pieczenie", opisKrotki: "Delikatne mięso z ogniska.", opisDlugi: "Tradycyjny przepis na rybę pieczoną w folii z dodatkiem masła czosnkowego i świeżego koperku.", img: "/ryba.jpg", kolor: "bg-orange-950" },
    { id: 2, tytul: "Tatar z łososia", kategoria: "Przystawka", opisKrotki: "Surowa świeżość morza.", opisDlugi: "Drobno siekany filet z dodatkiem szalotki, kaparów i odrobiny soku z cytryny.", img: "/troc_pion_ja.jpg", kolor: "bg-emerald-950" }
  ];

  return (
    // Zmniejszono py-24 -> py-10 oraz px-6 -> px-4
    <section id="przepisy" className="text-white py-10 px-4 md:py-24 md:px-6 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        
        {/* NAGŁÓWEK - Mniejszy margines i font */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-3 mb-8">
          <div className="h-[1px] w-8 bg-orange-600"></div>
          <h2 className="text-lg md:text-2xl font-light uppercase tracking-[0.2em] md:tracking-[0.4em]">
            Przepisy <span className="font-bold text-orange-600">Kulinarne</span>
          </h2>
        </motion.div>

        {/* GRID - Zmniejszono gap z 12 na 4 na mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
          {dane.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              // Drastycznie zmniejszono wysokość h-[500px] -> h-[300px] na mobile
              className="relative h-[300px] md:h-[500px] rounded-xl md:rounded-2xl overflow-hidden border border-white/5 group cursor-pointer bg-zinc-950/40 backdrop-blur-md"
              onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
            >
              <div className="h-full flex flex-col">
                {/* ZDJĘCIE - Udział 1/2 na mobile dla smukłości */}
                <div className="h-1/2 md:h-2/3 overflow-hidden relative">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={item.tytul} />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
                </div>

                {/* TEKST - Zmniejszono padding p-8 -> p-5 */}
                <div className="p-5 md:p-8 flex flex-col justify-center flex-grow">
                  <span className="text-orange-500 text-[8px] md:text-[10px] uppercase font-bold tracking-widest">
                    {item.kategoria}
                  </span>
                  <h3 className="text-lg md:text-2xl font-bold uppercase mt-1 leading-tight group-hover:text-orange-400 transition-colors">
                    {item.tytul}
                  </h3>
                  <p className="text-zinc-400 mt-1 font-serif italic text-xs md:text-base line-clamp-1">
                    {item.opisKrotki}
                  </p>
                </div>
              </div>

              {/* NAKŁADKA - Zmniejszono padding p-10 -> p-6 */}
              <AnimatePresence>
                {selectedId === item.id && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }} 
                    className={`absolute inset-0 ${item.kolor} p-6 md:p-10 flex flex-col justify-center z-20`}
                  >
                    <h3 className="text-xl md:text-3xl font-black uppercase mb-3 md:mb-6 leading-none tracking-tighter">
                      {item.tytul}
                    </h3>
                    <p className="text-zinc-200 text-xs md:text-lg mb-6 font-serif leading-relaxed line-clamp-5 md:line-clamp-none">
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