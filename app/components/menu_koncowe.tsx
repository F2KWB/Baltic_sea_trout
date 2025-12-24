export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-white/5 bg-black text-zinc-500 text-sm">
      <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p>© {new Date().getFullYear()} BALTIC SEA TROUT</p>
        </div>

        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">
            Polityka prywatności
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
