"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import MapaGraficzna from "../components/mapa"; 
import Footer from "../components/menu_koncowe";
import "leaflet/dist/leaflet.css";

const MapWithNoSSR = dynamic(() => import("../components/mapa_google"), {
  ssr: false,
  loading: () => <div className="h-screen bg-zinc-900 flex items-center justify-center text-zinc-500 uppercase tracking-widest text-xs">Ładowanie mapy...</div>
});

export default function MiejscowkiPage() {
  const [view, setView] = useState<'satelita' | 'grafika'>('satelita');

  return (
    /* ZMIANA: Usunięto overflow-hidden, aby Mapa Foto mogła się przewijać do stopki */
    <main className="min-h-screen w-full bg-zinc-950 relative flex flex-col">
      
      {/* KONTENER STEROWANIA - Wyższy z-index (np. 500) ale niższy niż Menu (które ma mieć 9999) */}
      <div className="fixed inset-0 z-[500] pointer-events-none">
        <div className="mt-[100px] md:mt-[130px] px-6 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="bg-white/95 backdrop-blur-md p-5 rounded-3xl border border-zinc-200 shadow-2xl pointer-events-auto"
          >
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-black leading-none">
              Eksploruj <span className="text-blue-600">Rewiry</span>
            </h2>
            <p className="text-zinc-500 text-[9px] uppercase font-bold tracking-widest mt-1">
              {view === 'satelita' ? "Widok GPS" : "Mapa Foto"}
            </p>
          </motion.div>

          <div className="bg-zinc-900/95 backdrop-blur-md p-1 rounded-full border border-white/10 shadow-2xl pointer-events-auto flex">
            <button 
              onClick={() => setView('satelita')}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase transition-all ${view === 'satelita' ? "bg-blue-600 text-white" : "text-zinc-400 hover:text-white"}`}
            >
              Satelita
            </button>
            <button 
              onClick={() => setView('grafika')}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase transition-all ${view === 'grafika' ? "bg-blue-600 text-white" : "text-zinc-400 hover:text-white"}`}
            >
              Mapa Foto
            </button>
          </div>
        </div>
      </div>

      {/* MAPA WŁAŚCIWA - Obsługa obu widoków */}
      <div className="w-full flex-grow pt-[80px]">
        <AnimatePresence mode="wait">
          {view === 'satelita' ? (
            <motion.div 
              key="sat"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="w-full h-[calc(100vh-80px)]"
            >
              <MapWithNoSSR />
            </motion.div>
          ) : (
            <motion.div 
              key="graf"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="w-full flex flex-col"
            >
              {/* Kontener mapy foto z dużym paddingiem, aby kafelki nie zasłaniały startu mapy */}
              <div className="w-full flex flex-col items-center p-6 md:p-12 lg:p-24 bg-zinc-900 min-h-[80vh] pt-56 md:pt-64">
                <div className="w-full max-w-7xl">
                  <MapaGraficzna />
                </div>
              </div>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}