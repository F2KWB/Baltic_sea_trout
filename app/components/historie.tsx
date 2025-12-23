"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Historie() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const dane = [
    {
      id: 1,
      tytul: "Nocny Gość",
      kategoria: "Straszne",
      opisKrotki: "Oko w oko z dziką naturą.",
      opisDlugi: "Podczas nocnej zasiadki na troć poczułem oddech na karku. Myślałem, że to inny wędkarz, ale gdy odwróciłem latarkę, zobaczyłem parę świecących oczu zaledwie metr ode mnie. To był dorodny jeleń, który przyszedł do wodopoju.",
      img: "/pociag.jpg",
      kolor: "bg-red-950" // Mroczny czerwony dla dreszczyku emocji
    },
    {
      id: 2,
      tytul: "Zaginiona Przynęta",
      kategoria: "Niesamowite",
      opisKrotki: "Historia pewnego powrotu.",
      opisDlugi: "Straciłem swój ulubiony wobler na wielkiej rybie w 2019 roku. Trzy lata później, w tej samej rynnie, złowiłem tę samą rybę... z moją przynętą wciąż w pysku. Niewiarygodne, ale prawdziwe!",
      img: "/klif.jpg",
      kolor: "bg-slate-900"
    }
  ];

  return (
    <section id="historie" className="text-white py-24 px-6 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Nagłówek z czerwoną linią dla odróżnienia od produktów */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-[1px] w-12 bg-red-600"></div>
          <h2 className="text-2xl font-light uppercase tracking-[0.4em]">
            Opowieści <span className="font-bold text-red-600">Nadbrzeżne</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {dane.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.2 }}
              transition={{ delay: index * 0.2 }}
              className="relative h-[500px] rounded-2xl overflow-hidden border border-white/5 group cursor-pointer bg-zinc-950/40 backdrop-blur-md"
              onClick={() => setSelectedId(selectedId === story.id ? null : story.id)}
            >
              <div className="h-full flex flex-col">
                {/* CZĘŚĆ GÓRNA: ZDJĘCIE (2/3 wysokości) */}
                <div className="h-2/3 overflow-hidden relative">
                  <img 
                    src={story.img} 
                    className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-1000 ease-in-out" 
                    alt={story.tytul} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* CZĘŚĆ DOLNA: TEKST (1/3 wysokości) */}
                <div className="p-8 flex flex-col justify-center flex-grow">
                  <span className="text-red-500 text-[10px] uppercase font-bold tracking-widest">
                    {story.kategoria}
                  </span>
                  <h3 className="text-2xl font-bold uppercase mt-2 group-hover:text-red-500 transition-colors">
                    {story.tytul}
                  </h3>
                  <p className="text-zinc-400 mt-2 font-serif italic line-clamp-1">
                    {story.opisKrotki}
                  </p>
                </div>
              </div>

              {/* NAKŁADKA SLIDE-UP */}
              <AnimatePresence>
                {selectedId === story.id && (
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "tween", duration: 0.5 }}
                    className={`absolute inset-0 ${story.kolor} p-10 flex flex-col justify-center z-20`}
                  >
                    <h3 className="text-3xl font-black uppercase mb-6 leading-none tracking-tighter">
                      {story.tytul}
                    </h3>
                    <p className="text-zinc-200 text-lg mb-8 font-serif leading-relaxed line-clamp-4">
                      {story.opisDlugi}
                    </p>
                    <button className="text-white text-[10px] uppercase tracking-widest border-b border-white/20 pb-2 w-fit">
                      Zamknij opowieść
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