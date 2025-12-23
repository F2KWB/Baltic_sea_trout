// import type { Metadata, Viewport } from "next"; // Dodano Viewport
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Menu from "@/app/components/menu";
// import Footer from "@/app/components/menu_koncowe";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// // Ustawienie skalowania dla telefonów
// export const viewport: Viewport = {
//   width: "device-width",
//   initialScale: 1,
// };

// export const metadata: Metadata = {
//   title: "Baltic_Sea_Trout",
//   description: "Profesjonalny przewodnik wędkarski",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="pl" className="scroll-smooth">
//       <body
//         className={`${geistSans.className} antialiased bg-black text-white flex flex-col min-h-screen`}
//       >
//         {/* flex flex-col min-h-screen powyżej to klucz do responsywnej stopki */}
//         <Menu />
        
//         {/* Main z klasą grow wypełni przestrzeń między menu a stopką */}
//         <main className="grow">
//           {children}
//         </main>
        
//         <Footer />
//       </body>
//     </html>
//   );
// }


import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/app/components/layout_wrapper"; // Za chwilę go stworzymy

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Baltic_Sea_Trout",
  description: "Profesjonalny przewodnik wędkarski",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={`${geistSans.className} antialiased bg-black text-white`}>
        {/* Przenosimy logikę Menu i Stopki do osobnego komponentu Client Side */}
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}