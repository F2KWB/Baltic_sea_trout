"use client";
import { useEffect, useState } from "react";

export default function StaticBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* GŁÓWNY OBRAZ TŁA */}
      <img 
        src="/klif.jpg" 
        alt="Niebieska smuga tła" 
        className="w-full h-full object-cover" 
      />
      
      {/* NAKŁADKA PRZYCIEMNIAJĄCA (Opcjonalnie, aby tekst był bardziej czytelny) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* GRADIENTY DLA GŁĘBI */}
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}