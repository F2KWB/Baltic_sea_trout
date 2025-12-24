// components/ui/Card.tsx

// AnimatePresence pozwala animować elementy, które znikałyby natychmiastowo z ekranu (np. przy zamykaniu)
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Definicja typów danych (Interface) - pilnuje porządku w kodzie
interface CardProps {
  item: { 
    id: number;
    tytul: string; 
    kategoria: string; 
    opisKrotki: string; 
    opisDlugi?: string; // Pytajnik = opcjonalne (nie każda karta musi mieć rozwinięcie)
    img: string;
    kolor?: string;     // Możemy personalizować tło rozwiniętej karty
  };
  // Wybór proporcji zdjęcia: połowa karty lub 2/3 wysokości
  isOpen: boolean;    // Dodajemy to do interface
  onToggle: () => void; // Dodajemy to do interface
  aspectRatio?: "h-2/3";
}

// Główna funkcja karty. aspectRatio ma ustawioną wartość domyślną "h-1/2"
export const Card = ({ item, isOpen, onToggle, aspectRatio = "h-2/3" }: CardProps) => {
  
//   // useState: "Pamięć" karty. Domyślnie false (zamknięta). 
//   // Wywołanie setIsOpen zmieni ten stan i odświeży widok.
//   const [isOpen, setIsOpen] = useState(false);

  return (
    /* motion.div: Główny kontener z Framer Motion
       - layout: Automatycznie animuje zmiany rozmiaru i pozycji
       - onClick: Przełącza stan isOpen na przeciwny (true/false)
       - group: Pozwala dzieciom (np. img) reagować na hover na całej karcie
       - bg-zinc-950/40 backdrop-blur-md: Efekt "szklanej" karty (Glassmorphism) */
    <motion.div
      layout
      onClick={onToggle} // Zmieniamy z setIsOpen na onToggle
      className="group relative h-75 md:h-120 rounded-2xl overflow-hidden border border-white/5 bg-zinc-950/40 backdrop-blur-md cursor-pointer"
    > 
      
      {/* --- WIDOK PODSTAWOWY (Zawsze widoczny na dnie) --- */}
      <div className="h-full flex flex-col">
        
        {/* Kontener zdjęcia z dynamiczną wysokością */}
        <div className={`${aspectRatio} overflow-hidden`}>
          <img 
            src={item.img} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            alt={item.tytul} 
          />
        </div>

        {/* Treść pod zdjęciem */}
        <div className="p-5 flex flex-col justify-center grow">
          <span className="text-blue-500 text-[10px] uppercase font-bold tracking-widest">
            {item.kategoria}
          </span>
          <h3 className="text-lg font-bold uppercase mt-1">
            {item.tytul}
          </h3>
          <p className="text-zinc-400 mt-1 text-xs line-clamp-2 italic">
            {item.opisKrotki}
          </p>
        </div>
      </div>

      {/* --- WIDOK ROZWINIĘTY (OVERLAY) --- */}
      <AnimatePresence>
        {/* Warunek: Pokaż tylko jeśli isOpen jest true ORAZ istnieje długi opis */}
        {isOpen && item.opisDlugi && (
<motion.div
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "100%" }}
  transition={{ type: "tween", duration: 0.4 }}
  // KLUCZOWE KLASY:
  // w-full: szerokość dopasowana do karty
  // break-words: łamanie bardzo długich słów
  // whitespace-normal: wymusza zawijanie tekstu do nowej linii
  // overflow-y-auto: tylko przewijanie pionowe, jeśli tekst jest za długi
  className={`absolute inset-0 ${item.kolor || 'bg-blue-950'} p-6 flex flex-col z-20 w-full whitespace-normal break-words overflow-y-auto overflow-x-hidden`}
>
  <h3 className="text-xl font-black uppercase mb-4 leading-tight">
    {item.tytul}
  </h3>
  
  <p className="text-zinc-200 text-sm md:text-base font-serif leading-relaxed">
    {item.opisDlugi}
  </p>
  
  <button className="mt-6 text-white text-[10px] uppercase tracking-widest border-b border-white/20 pb-1 w-fit shrink-0">
    Zamknij
  </button>
</motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};