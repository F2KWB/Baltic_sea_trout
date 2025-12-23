// "use client";
// import { useState } from "react";
// import { MapPin } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Mapa() {
//   const [activePin, setActivePin] = useState<number | null>(null);

//   const pins = [
//     { 
//       id: 1, 
//       top: "45%", 
//       left: "54.5%", 
//       title: "Górki Zachodnie/Stogi", 
//       img: "/ryba.jpg", 
//       link: "/miejscowki/gorki" 
//     },
//     { 
//       id: 2, 
//       top: "58%", 
//       left: "65%", 
//       title: "Zatoka Pucka", 
//       img: "/ryba2.jpg", 
//       link: "/miejscowki/zatoka" 
//     },
//     { 
//       id: 3, 
//       top: "70%", 
//       left: "65%", 
//       title: "Ujście Wisły", 
//       img: "/ryba3.jpg", 
//       link: "/miejscowki/wisla" 
//     },
//   ];

//   return (
//      <section className="py-20 px-6 max-w-7xl mx-auto scroll-mt-24">
      
//       {/* NAGŁÓWEK SEKCJ */}
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="mb-12"
//       >
//         <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
//           Nasze <span className="text-blue-600">Rewiry</span>
//         </h2>
//         <p className="text-zinc-500 mt-4 uppercase text-[10px] font-bold tracking-widest">
//           Kliknij w pinezkę, aby zobaczyć szczegóły łowiska
//         </p>
//       </motion.div>

//       {/* KONTENER MAPY */}
//       <div className="relative w-full rounded-[2.5rem] border border-white/10 overflow-hidden bg-zinc-900 shadow-2xl">
//         <img 
//           src="/mapa.webp" 
//           alt="Mapa łowisk" 
//           className="w-full h-auto cursor-crosshair object-cover"
//           onClick={() => setActivePin(null)} 
//         />

//         {pins.map((pin) => (
//           <div 
//             key={pin.id} 
//             className="absolute transform -translate-x-1/2 -translate-y-full" 
//             style={{ top: pin.top, left: pin.left }}
//           >
//             {/* PRZYCISK Z IKONĄ PINEZKI */}
//             <motion.button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setActivePin(activePin === pin.id ? null : pin.id);
//               }}
//               animate={activePin === pin.id ? { scale: 1.3 } : { scale: [1, 1.15, 1] }}
//               transition={activePin === pin.id ? 
//                 { duration: 0.3 } : 
//                 { duration: 3, repeat: Infinity, ease: "easeInOut", delay: pin.id * 0.5 }
//               }
//               className="relative z-20 flex flex-col items-center outline-none"
//             >
//               <MapPin 
//                 size={40} 
//                 fill={activePin === pin.id ? "white" : "#2563eb"} 
//                 strokeWidth={1.5}
//                 className="text-white drop-shadow-[0_0_15px_rgba(37,99,235,0.4)] md:w-[48px] md:h-[48px]"
//               />
//               <div className="w-2 h-1 bg-black/50 rounded-full blur-[2px] mt-[-4px]" />
//             </motion.button>

//             {/* RENDEROWANIE OPISU (POP-UP) */}
//             <AnimatePresence>
//               {activePin === pin.id && (
//                 <motion.div 
//                   initial={{ opacity: 0, y: 10, scale: 0.95 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   exit={{ opacity: 0, y: 10, scale: 0.95 }}
//                   className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-[85vw] max-w-[260px] md:max-w-[300px] z-[70] pointer-events-auto"
//                 >
//                   <div className="bg-zinc-950/98 border border-white/20 ring-1 ring-black/50 p-3 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                    
//                     {/* OBRAZEK W POP-UPIE */}
//                     <div className="relative h-24 md:h-36 w-full overflow-hidden rounded-xl bg-zinc-900">
//                       <img 
//                         src={pin.img} 
//                         className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110" 
//                         alt={pin.title} 
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
//                     </div>

//                     {/* TYTUŁ */}
//                     <h3 className="text-white font-bold mt-3 uppercase text-[10px] md:text-[11px] tracking-widest text-center leading-tight">
//                       {pin.title}
//                     </h3>
                    
//                     {/* LINK */}
//                     <a 
//                       href={pin.link}
//                       className="mt-3 md:mt-4 block w-full py-2.5 md:py-3 bg-blue-600 hover:bg-blue-500 text-white text-center text-[9px] md:text-[10px] font-black uppercase rounded-xl transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-white outline-none tracking-widest"
//                     >
//                       Odkryj Miejsce
//                     </a>
//                   </div>
                  
//                   {/* STRZAŁKA (TRÓJKĄT) */}
//                   <div className="w-3 h-3 bg-zinc-950 border-r border-b border-white/20 rotate-45 absolute -bottom-1.5 left-1/2 -translate-x-1/2 shadow-xl"></div>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";
import { useState } from "react";
import { MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Mapa() {
  const [activePin, setActivePin] = useState<number | null>(null);

  const pins = [
    { id: 1, top: "45%", left: "54.5%", title: "Górki Zachodnie", img: "/ryba.jpg", link: "/miejscowki/gorki" },
    { id: 2, top: "58%", left: "65%", title: "Zatoka Pucka", img: "/ryba2.jpg", link: "/miejscowki/zatoka" },
    { id: 3, top: "70%", left: "65%", title: "Ujście Wisły", img: "/ryba3.jpg", link: "/miejscowki/wisla" },
  ];

  return (
     // Zmniejszono py-20 na py-8 oraz px-6 na px-4
     <section className="py-8 px-4 max-w-7xl mx-auto scroll-mt-24">
      
      {/* NAGŁÓWEK SEKCJ - Drastycznie mniejszy font */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mb-6 px-2"
      >
        <h2 className="text-2xl md:text-6xl font-black uppercase tracking-tighter text-white">
          Nasze <span className="text-blue-600">Rewiry</span>
        </h2>
        <p className="text-zinc-500 mt-2 uppercase text-[8px] md:text-[10px] font-bold tracking-widest">
          Dotknij pinezkę, aby sprawdzić łowisko
        </p>
      </motion.div>

      {/* KONTENER MAPY - Mniejszy border-radius na mobile */}
      <div className="relative w-full rounded-[1.5rem] md:rounded-[2.5rem] border border-white/10 overflow-hidden bg-zinc-900 shadow-2xl">
        <img 
          src="/mapa.webp" 
          alt="Mapa łowisk" 
          className="w-full h-auto object-cover"
          onClick={() => setActivePin(null)} 
        />

        {pins.map((pin) => (
          <div 
            key={pin.id} 
            className="absolute transform -translate-x-1/2 -translate-y-full" 
            style={{ top: pin.top, left: pin.left }}
          >
            {/* PINEZKA - Zmniejszona z 40 na 28 na mobile */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                setActivePin(activePin === pin.id ? null : pin.id);
              }}
              animate={activePin === pin.id ? { scale: 1.2 } : { scale: [1, 1.1, 1] }}
              className="relative z-20 flex flex-col items-center outline-none"
            >
              <MapPin 
                size={28} 
                fill={activePin === pin.id ? "white" : "#2563eb"} 
                strokeWidth={2}
                className="text-white drop-shadow-[0_0_10px_rgba(37,99,235,0.4)] md:w-[48px] md:h-[48px]"
              />
            </motion.button>

            {/* POP-UP - Skondensowany */}
            <AnimatePresence>
              {activePin === pin.id && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  // W szerokości w-[140px] zamiast 260px
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[140px] md:w-[260px] z-[70]"
                >
                  <div className="bg-zinc-950/95 border border-white/20 p-2 rounded-xl backdrop-blur-xl shadow-2xl">
                    
                    {/* Bardzo niskie zdjęcie na mobile */}
                    <div className="relative h-16 md:h-36 w-full overflow-hidden rounded-lg">
                      <img src={pin.img} className="w-full h-full object-cover" alt={pin.title} />
                    </div>

                    <h3 className="text-white font-bold mt-2 uppercase text-[8px] md:text-[11px] tracking-tight text-center">
                      {pin.title}
                    </h3>
                    
                    <a 
                      href={pin.link}
                      className="mt-2 block w-full py-2 bg-blue-600 text-white text-center text-[8px] font-black uppercase rounded-lg tracking-widest"
                    >
                      Szczegóły
                    </a>
                  </div>
                  <div className="w-2 h-2 bg-zinc-950 border-r border-b border-white/20 rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}