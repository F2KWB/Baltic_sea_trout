

"use client";
import { motion } from "framer-motion";

// REJESTRACJA KOLORÓW DLA TAILWINDA (Dopisz tu kolory, których używasz w projekcie):
// bg-blue-500 text-blue-500
// bg-orange-500 text-orange-500
// bg-red-600 text-red-600
// bg-green-500 text-green-500

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