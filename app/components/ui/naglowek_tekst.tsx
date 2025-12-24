// // components/ui/SectionHeader.tsx

// // Importujemy bibliotekę framer-motion, która odpowiada za animacje (pojawianie się nagłówka)
// import { motion } from "framer-motion";

// // Definiujemy interfejs (TypeScript), czyli listę "argumentów", które ten komponent musi otrzymać
// interface Props {
//   title: string;    // Pierwsza część tytułu (pisana cienką czcionką)
//   subtitle: string; // Druga część tytułu (pisana pogrubioną czcionką)
//   color?: string;   // Opcjonalny kolor (jeśli nie podasz, domyślnie będzie niebieski)
// }

// // Główna funkcja komponentu. color = "blue-600" to wartość domyślna, jeśli nic nie prześlesz
// export const SectionHeader = ({ title, subtitle, color = "bg-blue-600", textClass = "text-blue-600" }: Props) => (
  
//   /* motion.div to animowany kontener. 
//      - initial: stan początkowy (przezroczysty)
//      - whileInView: co ma się stać, gdy użytkownik przewinie stronę do tego miejsca (staje się widoczny)
//      - viewport: once: true sprawia, że animacja odpala się tylko raz (nie miga przy każdym przewijaniu)
//      - className: flex i items-center ustawiają linię i tekst w jednej poziomej linii */
//   <motion.div 
//     initial={{ opacity: 0 }} 
//     whileInView={{ opacity: 1 }} 
//     viewport={{ once: true }}
//     className="flex items-center gap-3 mb-8 md:mb-12"
//   >
//     {/* Ta linijka tworzy poziomą kreskę przed tytułem.
//         - h-[1px]: wysokość kreski
//         - w-8: szerokość kreski
//         - bg-${color}: dynamicznie przypisuje kolor (np. bg-blue-600 lub bg-orange-600) */}
//     <div className={`h-[1px] w-10 bg-${color}`} />
    
//     {/* Sam tekst nagłówka.
//         - text-lg md:text-2xl: mniejszy na telefonie, większy na komputerze
//         - font-light: cienka czcionka dla pierwszego słowa
//         - tracking-widest: duże odstępy między literami (styl nowoczesny/premium) */}
//     <h2 className="text-lg md:text-2xl font-light uppercase tracking-widest">
      
//       {title} {/* Wyświetla pierwsze słowo, np. "Baza" */}
      
//       {/* Span dla drugiego słowa, aby nadać mu inny styl (pogrubienie i kolor) */}
//       <span className={`font-bold ${textClass}`}>
//         {subtitle} {/* Wyświetla drugie słowo, np. "Noclegowa" */}
//       </span>
      
//     </h2>
//   </motion.div>
// );

"use client";
import { motion } from "framer-motion";

// REJESTRACJA KOLORÓW DLA TAILWINDA (Dopisz tu kolory, których używasz w projekcie):
// bg-blue-600 text-blue-600
// bg-orange-500 text-orange-500
// bg-red-600 text-red-600

interface Props {
  title: string;
  subtitle: string;
  color?: string; // Tutaj będziemy podawać tylko nazwę koloru, np. "orange-500"
}

export const SectionHeader = ({ title, subtitle, color }: Props) => (
  <motion.div 
    initial={{ opacity: 0 }} 
    whileInView={{ opacity: 1 }} 
    viewport={{ once: true }}
    // Dodajemy justify-center, jeśli chcesz, aby nagłówek był na środku
    className="flex items-center justify-center gap-3 mb-8 md:mb-12 w-full"
  >
    {/* KRESKA: Łączymy "bg-" z samą nazwą koloru */}
    <div className={`h-[1px] w-10 bg-${color}`} />
    
    <h2 className="text-lg md:text-2xl font-light uppercase tracking-widest text-center">
      {title} <span className={`font-bold text-${color}`}>{subtitle}</span>
    </h2>

    {/* Druga kreska dla symetrii przy wyśrodkowaniu */}
    <div className={`h-[1px] w-10 bg-${color}`} />
  </motion.div>
);