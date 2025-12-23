// // "use client";
// // import Wstep from "./components/wprowadzenie";
// // import RybaMiesiacaHero from "./components/ryba_miesiaca";
// // import ArchiwumOkazow from "./components/ryby";
// // import Zajawka_Miejscowki from "./components/zajawka_miejscowka";
// // import Morscy_Tworcy from "./components/tworcy";
// // import Produkty from "./components/produkty";
// // import Wyprawy from "./components/wyprawy";
// // import Zajawka_Noclegi from "./components/zajawka_noclegi";
// // import Noclegi from "./components/noclegi";
// // import Przepis_Miesiaca from "./components/przepis_miesiaca";
// // import Przepisy from "./components/przepisy";
// // import Historia_Miesiaca from "./components/historia_miesiaca";
// // import Historie from "./components/historie";
// // import StaticBackground from "./components/animowane_tlo";
// // import Footer from "./components/menu_koncowe"; 

// // export default function Home() {
// //   return (
// //     <div className="relative">
// //       <StaticBackground />
      
// //       {/* Dodajemy pt-[80px] TUTAJ, żeby naprawić przesunięcie pod menu tylko na tej stronie */}
// //       <div className="relative z-10 w-full flex flex-col gap-24 px-4 md:px-6 pt-[80px]">
// //         <Wstep />
// //         <RybaMiesiacaHero />
// //         <ArchiwumOkazow />
// //         <Zajawka_Miejscowki />
// //         <Morscy_Tworcy />
// //         <Produkty />
// //         <Wyprawy />
// //         <Zajawka_Noclegi />
// //         <Noclegi />
// //         <Przepis_Miesiaca />
// //         <Przepisy />
// //         <Historia_Miesiaca />
// //         <Historie />

// //         {/* Ręczna stopka */}
// //         <Footer />
// //       </div>
// //     </div>
// //   );
// // }

// "use client";
// import Wstep from "./components/wprowadzenie";
// import RybaMiesiacaHero from "./components/ryba_miesiaca";
// import ArchiwumOkazow from "./components/ryby";
// import Zajawka_Miejscowki from "./components/zajawka_miejscowka";
// import Morscy_Tworcy from "./components/tworcy";
// import Produkty from "./components/produkty";
// import Wyprawy from "./components/wyprawy";
// import Zajawka_Noclegi from "./components/zajawka_noclegi";
// import Noclegi from "./components/noclegi";
// import Przepis_Miesiaca from "./components/przepis_miesiaca";
// import Przepisy from "./components/przepisy";
// import Historia_Miesiaca from "./components/historia_miesiaca";
// import Historie from "./components/historie";
// import StaticBackground from "./components/animowane_tlo";
// import Footer from "./components/menu_koncowe"; 

// export default function Home() {
//   return (
//     <div className="relative">
//       <StaticBackground />
      
//       {/* ZMIANY:
//           1. pt-[60px] md:pt-[80px] - dopasowanie do nowej wysokości menu mobilnego.
//           2. gap-10 md:gap-24 - drastyczne zmniejszenie odstępów między sekcjami na telefonie.
//           3. px-2 md:px-6 - węższe marginesy boczne, by odzyskać przestrzeń.
//       */}
//       <div className="relative z-10 w-full flex flex-col gap-10 md:gap-24 px-2 md:px-6 pt-[60px] md:pt-[80px]">
//         <Wstep />
//         <RybaMiesiacaHero />
//         <ArchiwumOkazow />
//         <Zajawka_Miejscowki />
//         <Morscy_Tworcy />
//         <Produkty />
//         <Wyprawy />
//         <Zajawka_Noclegi />
//         <Noclegi />
//         <Przepis_Miesiaca />
//         <Przepisy />
//         <Historia_Miesiaca />
//         <Historie />

//         {/* Ręczna stopka */}
//         <Footer />
//       </div>
//     </div>
//   );
// }

"use client";
import Wstep from "./components/wprowadzenie";
import RybaMiesiacaHero from "./components/ryba_miesiaca";
import ArchiwumOkazow from "./components/ryby";
import Zajawka_Miejscowki from "./components/zajawka_miejscowka";
import Morscy_Tworcy from "./components/tworcy";
import Produkty from "./components/produkty";
import Wyprawy from "./components/wyprawy";
import Zajawka_Noclegi from "./components/zajawka_noclegi";
import Noclegi from "./components/noclegi";
import Przepis_Miesiaca from "./components/przepis_miesiaca";
import Przepisy from "./components/przepisy";
import Historia_Miesiaca from "./components/historia_miesiaca";
import Historie from "./components/historie";
import StaticBackground from "./components/animowane_tlo";
import Footer from "./components/menu_koncowe"; 

export default function Home() {
  return (
    <div className="relative">
      <StaticBackground />
      
      {/* gap-24 -> gap-3 (Ekstremalne zagęszczenie)
          px-4 -> px-1 (Maksymalna szerokość na mobile)
          pt-[80px] -> pt-[65px] (Tuż pod menu)
      */}
      <div className="relative z-10 w-full flex flex-col gap-3 md:gap-24 px-1 md:px-6 pt-[65px] md:pt-[80px]">
        <Wstep />
        <RybaMiesiacaHero />
        <ArchiwumOkazow />
        <Zajawka_Miejscowki />
        <Morscy_Tworcy />
        <Produkty />
        <Wyprawy />
        <Zajawka_Noclegi />
        <Noclegi />
        <Przepis_Miesiaca />
        <Przepisy />
        <Historia_Miesiaca />
        <Historie />

        <Footer />
      </div>
    </div>
  );
}