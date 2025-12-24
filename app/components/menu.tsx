"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Map, BedDouble, X, Menu as MenuIcon, ChevronDown } from "lucide-react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // ZMIANA: Dodano 'lg:gap-2' i zmniejszono padding 'lg:px-2', aby menu było bardziej elastyczne przed schowaniem
  const linkStyle = "px-2 xl:px-4 py-2 border border-white/20 rounded-full hover:border-white hover:bg-white/10 transition-all duration-300 text-white whitespace-nowrap flex items-center gap-1 xl:gap-2 cursor-pointer";
  const contactStyle = "px-4 xl:px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 font-bold uppercase text-[10px]";

  const fullNavigation = [
    { name: "O nas", href: "/#o-nas" },
    { name: "Okazy", href: "/#okazy" },
    { name: "Twórcy", href: "/#tworcy" },
    { name: "Rękodzieło", href: "/#produkty" },
    { name: "Wyprawy", href: "/#wyprawy" },
    { name: "Kulinaria", href: "/#kulinaria" },
    { name: "Historie", href: "/#historie" },
    { name: "Miejscówki", href: "/miejscowki", blue: true },
    { name: "Noclegi", href: "/noclegi", blue: true },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[9999] h-[80px] bg-black/90 backdrop-blur-md border-b border-white/10 flex items-center">
        <div className="max-w-[1400px] w-full mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="text-lg md:text-xl font-bold tracking-tighter text-white uppercase leading-[0.9] md:leading-normal shrink-0 mr-4">
            BALTIC <br className="md:hidden" /> 
            <span className="whitespace-nowrap">SEA TROUT</span>
          </Link>
          
          {/* ZMIANA: Menu desktopowe teraz chowa się przy 'xl' (1280px) zamiast 'lg' (1024px) */}
          <div className="hidden xl:flex gap-2 min-[1350px]:gap-3 text-[10px] font-bold uppercase tracking-widest items-center">
            <a href="/#o-nas" className={linkStyle}>O nas</a>
            <a href="/#okazy" className={linkStyle}>Okazy</a>

            {/* Miejscówki */}
            <div className="relative group" onMouseEnter={() => setHoveredItem("miejscowki")} onMouseLeave={() => setHoveredItem(null)}>
              <a href="/#miejscowki-info" className={linkStyle}>
                <span className="relative flex h-1.5 w-1.5 mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                </span>
                Miejscówki
                <ChevronDown size={12} className={`transition-transform duration-300 ${hoveredItem === "miejscowki" ? "rotate-180" : ""}`} />
              </a>
              <AnimatePresence>
                {hoveredItem === "miejscowki" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 mt-4 w-48 z-50">
                    <Link href="/miejscowki" className="block p-4 bg-zinc-900 border border-blue-500/50 rounded-2xl shadow-2xl hover:bg-zinc-800 transition-all text-white no-underline">
                      <div className="flex items-center gap-2 text-blue-400 mb-1"><Map size={14} /><span className="text-[9px] font-black">Otwórz Mapę</span></div>
                      <p className="text-[8px] text-zinc-500 lowercase leading-tight">Kliknij, aby przejść do mapy łowisk</p>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="/#tworcy" className={linkStyle}>Twórcy</a>
            <a href="/#produkty" className={linkStyle}>Rękodzieło</a>
            <a href="/#wyprawy" className={linkStyle}>Wyprawy</a>

            {/* Noclegi */}
            <div className="relative group" onMouseEnter={() => setHoveredItem("noclegi")} onMouseLeave={() => setHoveredItem(null)}>
              <a href="/#noclegi-info" className={linkStyle}>
                <span className="relative flex h-1.5 w-1.5 mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                </span>
                Noclegi
                <ChevronDown size={12} className={`transition-transform duration-300 ${hoveredItem === "noclegi" ? "rotate-180" : ""}`} />
              </a>
              <AnimatePresence>
                {hoveredItem === "noclegi" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 mt-4 w-48 z-50">
                    <Link href="/noclegi" className="block p-4 bg-zinc-900 border border-blue-500/50 rounded-2xl shadow-2xl hover:bg-zinc-800 transition-all text-white no-underline">
                      <div className="flex items-center gap-2 text-blue-400 mb-1"><BedDouble size={14} /><span className="text-[9px] font-black">Otwórz Mapę</span></div>
                      <p className="text-[8px] text-zinc-500 lowercase leading-tight">Kliknij, aby przejść do mapy noclegów</p>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="/#kulinaria" className={linkStyle}>Kulinaria</a>
            <a href="/#historie" className={linkStyle}>Historie</a>

            <Link href="/kontakt" className={contactStyle}>Kontakt</Link>
          </div>

          {/* ZMIANA: Przycisk Menu Mobile teraz pojawia się już od 'xl' w dół */}
          <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden text-white border border-white/20 px-4 py-2 rounded-full text-[10px] font-bold uppercase z-[10001]">
            {isOpen ? <X size={20} /> : "Menu"}
          </button>
        </div>
      </nav>

      {/* SIDE DRAWER (Bez zmian w logice, zmieniono tylko xl:hidden) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[10000] xl:hidden" />
            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[280px] sm:w-[320px] bg-zinc-950 z-[10001] xl:hidden border-l border-white/10 flex flex-col shadow-[-10px_0_30px_rgba(0,0,0,0.5)]"
            >
              <div className="h-[80px] flex items-center px-8 border-b border-white/5">
                <span className="text-white font-black text-[10px] tracking-widest uppercase">Nawigacja</span>
              </div>

              <div className="flex-grow p-6 overflow-y-auto">
                <div className="grid grid-cols-2 gap-3">
                  {fullNavigation.map((item) => (
                    <Link 
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-center gap-2 p-4 rounded-2xl text-[9px] font-extrabold uppercase tracking-tighter text-center transition-all active:scale-95 ${
                        item.blue 
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                        : "bg-white/5 text-zinc-300 border border-white/5"
                      }`}
                    >
                      {item.name === "Miejscówki" && <Map size={12} />}
                      {item.name === "Noclegi" && <BedDouble size={12} />}
                      {item.name}
                    </Link>
                  ))}
                </div>
                <Link href="/kontakt" onClick={() => setIsOpen(false)} className="mt-4 flex items-center justify-center p-5 bg-white text-black rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                  Kontakt
                </Link>
              </div>

              <div className="p-8 border-t border-white/5 text-center">
                <p className="text-zinc-600 text-[8px] uppercase font-bold tracking-[0.3em]">Baltic Sea Trout</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}