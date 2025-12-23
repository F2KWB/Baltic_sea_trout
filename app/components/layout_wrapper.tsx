// "use client";
// import Menu from "../components/menu";

// export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="flex flex-col min-h-screen bg-black">
//       {/* Menu ma zazwyczaj position: fixed lub absolute, więc nie zajmuje miejsca w flexie */}
//       <Menu />
      
//       {/* Usunięto pt-[80px] - teraz dzieci (strony) same decydują o swoim marginesie */}
//       <main className="flex-grow">
//         {children}
//       </main>
//     </div>
//   );
// }

"use client";
import Menu from "../components/menu";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    // Dodano overflow-x-hidden, aby żadna sekcja nie "wystawała" poza szerokość ekranu telefonu
    <div className="flex flex-col min-h-screen bg-black overflow-x-hidden w-full">
      <Menu />
      
      {/* Główny kontener: na mobile dajemy mniejszy odstęp od góry (jeśli menu jest mniejsze),
        a flex-grow dba o to, by stopka zawsze była na dole.
      */}
      <main className="flex-grow w-full relative">
        {children}
      </main>
    </div>
  );
}