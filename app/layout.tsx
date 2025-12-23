
// import { SpeedInsights } from "@vercel/speed-insights/next"
// import type { Metadata, Viewport } from "next";
// import { Geist } from "next/font/google";
// import "./globals.css";
// import LayoutWrapper from "./components/layout_wrapper"; // Za chwilę go stworzymy

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

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
//       <body className={`${geistSans.className} antialiased bg-black text-white`}>
//         {/* Przenosimy logikę Menu i Stopki do osobnego komponentu Client Side */}
//         <LayoutWrapper>{children}</LayoutWrapper>
//       </body>
//     </html>
//   );
// }

import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./components/layout_wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// To ustawienie jest kluczowe dla telefonów - zapobiega błędnemu skalowaniu
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Opcjonalnie: zapobiega automatycznemu przybliżaniu przy klikaniu w inputy na iPhone
  userScalable: false, // Sprawia, że strona zachowuje się bardziej jak natywna aplikacja
};

export const metadata: Metadata = {
  title: "Baltic Sea Trout | Przewodnik i Rewiry",
  description: "Eksploruj najlepsze rewiry trociowe nad Bałtykiem. Mapa łowisk, noclegi i rzemieślnicze produkty.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={`${geistSans.className} antialiased bg-black text-white selection:bg-blue-500/30`}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
        <SpeedInsights />
      </body>
    </html>
  );
}