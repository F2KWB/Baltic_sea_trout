"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ArchiwumOkazow() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const archiwalne = [
    {
      id: 1,
      tytul: "Troć z rzeki Regi",
      kategoria: "Rzeka",
      opisKrotki: "75 cm żywego srebra.",
      opisDlugi: "Złowiona na autorski wobler w dolnym biegu rzeki. Walka trwała ponad 15 minut w silnym nurcie. Ryba po szybkiej sesji wróciła do wody w doskonałej kondycji.",
      img: "/troc_wobler.jpg",
      kolor: "bg-blue-950"
    },
    {
      id: 2,
      tytul: "Srebrniak z Bałtyku",
      kategoria: "Morze",
      opisKrotki: "Zimowy połów z plaży.",
      opisDlugi: "Piękny okaz wyjęty metodą spinningową z brzegu. Warunki były trudne, temperatura ujemna i silny wiatr, ale determinacja się opłaciła.",
      img: "/troc_widok.jpg",
      kolor: "bg-zinc-900"
    },
  ];

  return (
    <section className="text-white py-24 px-6 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-[1px] w-12 bg-blue-600"></div>
          <h2 className="text-2xl font-light uppercase tracking-[0.4em]">
            Archiwum <span className="font-bold text-blue-600">Okazów</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {archiwalne.map((ryba, index) => (
            <motion.div
              key={ryba.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.2 }}
              transition={{ delay: index * 0.2 }}
              className="relative h-[500px] rounded-2xl overflow-hidden border border-white/5 group cursor-pointer bg-zinc-950/40 backdrop-blur-md"
              onClick={() => setSelectedId(selectedId === ryba.id ? null : ryba.id)}
            >
              <div className="h-full flex flex-col">
                {/* CZĘŚĆ GÓRNA: ZDJĘCIE (2/3 wysokości, identycznie jak w Produktach) */}
                <div className="h-2/3 overflow-hidden relative">
                  <img
                    src={ryba.img}
                    className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                    alt={ryba.tytul}
                  />
                  {/* Delikatny gradient na samym zdjęciu */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* CZĘŚĆ DOLNA: TEKST (1/3 wysokości) */}
                <div className="p-8 flex flex-col justify-center flex-grow">
                  <span className="text-blue-500 text-[10px] uppercase font-bold tracking-widest">
                    {ryba.kategoria}
                  </span>
                  <h3 className="text-2xl font-bold uppercase mt-2 group-hover:text-blue-400 transition-colors">
                    {ryba.tytul}
                  </h3>
                  <p className="text-zinc-400 mt-2 font-serif italic line-clamp-1">
                    {ryba.opisKrotki}
                  </p>
                </div>
              </div>

              {/* NAKŁADKA SLIDE-UP (Rozwinięcie historii) */}
              <AnimatePresence>
                {selectedId === ryba.id && (
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "tween", duration: 0.5 }}
                    className={`absolute inset-0 ${ryba.kolor} p-10 flex flex-col justify-center z-20`}
                  >
                    <h3 className="text-4xl font-black uppercase mb-6 leading-none tracking-tighter">
                      {ryba.tytul}
                    </h3>
                    <p className="text-zinc-200 text-lg mb-8 font-serif leading-relaxed line-clamp-4 md:line-clamp-none">
                      {ryba.opisDlugi}
                    </p>
                    <button className="text-white text-[10px] uppercase tracking-widest border-b border-white/20 pb-2 w-fit">
                      Zamknij szczegóły
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