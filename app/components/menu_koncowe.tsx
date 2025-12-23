// export default function Footer() {
//   return (
//     <footer className="w-full py-12 border-t border-white/5 bg-black text-zinc-500 text-sm">
//       <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-6">
//         <div>
//           <p>© {new Date().getFullYear()} BALTIC SEA TROUT</p>
//         </div>

//         <div className="flex gap-8">
//           <a href="#" className="hover:text-white transition-colors">
//             Polityka prywatności
//           </a>
//           <a href="#" className="hover:text-white transition-colors">
//             Instagram
//           </a>
//           <a href="#" className="hover:text-white transition-colors">
//             Facebook
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

export default function Footer() {
  return (
    // Drastycznie zmniejszono py-12 na py-6 (oszczędność miejsca)
    <footer className="w-full py-6 border-t border-white/5 bg-black text-zinc-500 text-[10px] md:text-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
        
        {/* Prawa autorskie - wyśrodkowane na mobile dla balansu */}
        <div className="text-center md:text-left order-2 md:order-1">
          <p className="tracking-widest uppercase">
            © {new Date().getFullYear()} BALTIC SEA TROUT
          </p>
        </div>

        {/* Linki - mniejszy gap na mobile (gap-4 zamiast gap-8) */}
        <div className="flex gap-4 md:gap-8 order-1 md:order-2">
          <a href="#" className="hover:text-white transition-colors uppercase tracking-tight">
            Prywatność
          </a>
          <a href="#" className="hover:text-white transition-colors uppercase tracking-tight">
            Instagram
          </a>
          <a href="#" className="hover:text-white transition-colors uppercase tracking-tight">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}