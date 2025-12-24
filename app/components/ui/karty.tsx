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
            /* Animacja wejścia: y: 100% to dół karty, 0 to pozycja docelowa */
            initial={{ y: "100%" }} 
            animate={{ y: 0 }}      
            exit={{ y: "100%" }}    
            /* tween: animacja liniowa/płynna, duration: czas w sekundach */
            transition={{ type: "tween", duration: 0.4 }}
            /* item.kolor || 'bg-blue-950': jeśli nie podano koloru w danych, użyj ciemnoniebieskiego */
           // DODANO: overflow-y-auto (pozwala przewijać długi tekst w pionie)
      className={`absolute inset-0 ${item.kolor || 'bg-blue-950'} p-6 md:p-10 flex flex-col z-20 overflow-y-auto`}
          >
            <h3 className="text-xl md:text-3xl font-black uppercase mb-4 leading-none">
              {item.tytul}
            </h3>
            
{/* OPIS: Zmieniamy na responsywny rozmiar tekstu i usuwamy line-clamp */}
      <p className="text-zinc-200 text-sm md:text-lg mb-8 font-serif leading-relaxed">
        {item.opisDlugi}
            </p>

{/* Przycisk zamknięcia na dole */}
      <button className="mt-auto text-white text-[10px] uppercase tracking-widest border-b border-white/20 pb-1 w-fit">
        Zamknij
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};