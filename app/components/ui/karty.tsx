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
  return (
    <motion.div
      layout
      onClick={onToggle}
      // Zmieniamy h-30 na min-h-[120px] (h-30 to 120px), ale dajemy flex-col
      className="group relative h-32 md:h-64 rounded-2xl overflow-hidden border border-white/5 bg-zinc-950/40 backdrop-blur-md cursor-pointer flex flex-col"
    > 
      
      {/* --- WIDOK PODSTAWOWY --- */}
      <div className="h-full flex flex-col w-full">
        
        {/* ZDJĘCIE: shrink-0 jest kluczowe! Blokuje zgniatanie zdjęcia przez tekst */}
        <div className={`h-2/3 w-full overflow-hidden shrink-0`}>
          <img 
            src={item.img} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            alt={item.tytul} 
          />
        </div>

        {/* TREŚĆ: Musi zajmować dokładnie 34% i ucinać nadmiar tekstu */}
        <div className="h-1/3 px-3 py-2 flex flex-col justify-center overflow-hidden bg-black/20">
          <span className="text-sky-700 text-[8px] uppercase font-bold tracking-widest leading-none">
            {item.kategoria}
          </span>
          <h3 className="text-[10px] md:text-sm font-bold uppercase mt-0.5 leading-tight line-clamp-1">
            {item.tytul}
          </h3>
          {/* Opis krótki ukrywamy na mobile (h-32), żeby nie psuł proporcji */}
          <p className="hidden md:block text-zinc-400 mt-0.5 text-[10px] line-clamp-1 italic">
            {item.opisKrotki}
          </p>
        </div>
      </div>

      {/* --- WIDOK ROZWINIĘTY (Bez zmian w logice, dodano tylko tekst responsywny) --- */}
      <AnimatePresence>
        {isOpen && item.opisDlugi && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className={`absolute inset-0 ${item.kolor || 'bg-blue-950'} p-4 flex flex-col z-20 w-full whitespace-normal break-words overflow-y-auto overflow-x-hidden`}
          >
            <h3 className="text-sm md:text-xl font-black uppercase mb-2 leading-tight">
              {item.tytul}
            </h3>
            <p className="text-zinc-200 text-[10px] md:text-base font-serif leading-relaxed">
              {item.opisDlugi}
            </p>
            <button className="mt-auto text-white text-[9px] uppercase tracking-widest border-b border-white/20 pb-0.5 w-fit">
              Zamknij
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};