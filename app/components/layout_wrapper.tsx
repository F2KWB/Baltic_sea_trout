"use client";
import Menu from "../components/menu";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Menu ma zazwyczaj position: fixed lub absolute, więc nie zajmuje miejsca w flexie */}
      <Menu />
      
      {/* Usunięto pt-[80px] - teraz dzieci (strony) same decydują o swoim marginesie */}
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}