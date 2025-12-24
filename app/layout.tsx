
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./components/layout_wrapper"; // Za chwilę go stworzymy

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