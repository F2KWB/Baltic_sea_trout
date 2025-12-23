"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";

// Dynamiczny import komponentu mapy dla noclegów
const NoclegiMapWithNoSSR = dynamic(() => import("../components/noclegi_google"), {
  ssr: false,
  loading: () => <div className="h-screen bg-zinc-50 flex items-center justify-center text-zinc-500 uppercase tracking-widest text-[10px]">Wczytywanie bazy noclegowej...</div>
});

export default function NoclegiPage() {
  return (
    <main className="h-screen w-full bg-white relative">
      <div className="w-full h-full pt-20"> 
        <NoclegiMapWithNoSSR />
      </div>
      
      {/* NAKŁADKA INFO */}
      <div className="absolute top-28 left-6 z-[40] pointer-events-none">
        <motion.div 
          initial={{ x: -20, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          className="bg-white/95 backdrop-blur-md p-6 rounded-3xl border border-zinc-200 shadow-2xl"
        >
          <h1 className="text-3xl font-black uppercase tracking-tighter text-black">
            Baza <span className="text-blue-600">Noclegowa</span>
          </h1>
          <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mt-1">
            Miejsca przyjazne wędkarzom
          </p>
        </motion.div>
      </div>
    </main>
  );
}