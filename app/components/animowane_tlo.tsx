"use client";
import { useEffect, useState } from "react";

export default function StaticBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#FDFDFC]">
      {/* Bardzo delikatna tekstura lub poświata, która niweluje surowość tła */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.15]" />

      {/* Miękkie gradienty - przejście w stronę bardzo jasnego beżu/szarości */}
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-zinc-100/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-zinc-100/50 to-transparent" />
    </div>
  );
}