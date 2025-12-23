// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Mail, MessageSquare, Send, Instagram, Facebook, Youtube } from "lucide-react";

// export default function KontaktPage() {
//   const [formData, setFormData] = useState({ imie: "", email: "", tresc: "" });
//   const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formData.email || !formData.tresc) return;

//     const potwierdzenie = confirm("Czy na pewno chcesz wysłać wiadomość do Baltic Sea Trout?");
//     if (!potwierdzenie) return;

//     setStatus("loading");
//     try {
//       const response = await fetch("/api/send-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       if (response.ok) {
//         setStatus("success");
//         setFormData({ imie: "", email: "", tresc: "" });
//         setTimeout(() => setStatus("idle"), 5000);
//       } else { setStatus("error"); }
//     } catch { setStatus("error"); }
//   };

//   return (
//     <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 relative overflow-hidden">
//       {/* Dekoracyjne tło - niebieska poświata */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />
//       <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-900/10 blur-[100px] rounded-full -z-10" />

//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
//           {/* LEWA KOLUMNA: INFORMACJE */}
//           <motion.div 
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="space-y-12"
//           >
//             <div>
//               <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
//                 Bądźmy <br /> <span className="text-blue-600">w kontakcie</span>
//               </h1>
//               <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
//                 Masz pytania o miejscówki, chcesz pochwalić się okazem, a może potrzebujesz porady sprzętowej? Pisz śmiało.
//               </p>
//             </div>

//             <div className="space-y-6">
//               <div className="flex items-center gap-4 group">
//                 <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-white/10 group-hover:border-blue-600 transition-colors">
//                   <Mail size={20} className="text-blue-500" />
//                 </div>
//                 <div>
//                   <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Napisz do nas</p>
//                   <p className="text-lg font-medium">kontakt@balticseatrout.pl</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4 group">
//                 <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-white/10 group-hover:border-blue-600 transition-colors">
//                   <MessageSquare size={20} className="text-blue-500" />
//                 </div>
//                 <div>
//                   <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Społeczność</p>
//                   <div className="flex gap-4 mt-1">
//                     <Instagram size={18} className="hover:text-blue-500 cursor-pointer transition-colors" />
//                     <Facebook size={18} className="hover:text-blue-500 cursor-pointer transition-colors" />
//                     <Youtube size={18} className="hover:text-blue-500 cursor-pointer transition-colors" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* PRAWA KOLUMNA: FORMULARZ */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2 }}
//             className="bg-zinc-900/30 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white/5 shadow-2xl"
//           >
//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div className="space-y-2">
//                 <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-500 ml-2">Imię</label>
//                 <input
//                   type="text"
//                   placeholder="np. Jan Kowalski"
//                   value={formData.imie}
//                   onChange={(e) => setFormData({...formData, imie: e.target.value})}
//                   className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-600 focus:bg-white/10 transition-all"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-500 ml-2">Email *</label>
//                 <input
//                   type="email"
//                   required
//                   placeholder="twoj@email.com"
//                   value={formData.email}
//                   onChange={(e) => setFormData({...formData, email: e.target.value})}
//                   className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-600 focus:bg-white/10 transition-all"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-500 ml-2">Wiadomość *</label>
//                 <textarea
//                   required
//                   rows={4}
//                   placeholder="W czym możemy pomóc?"
//                   value={formData.tresc}
//                   onChange={(e) => setFormData({...formData, tresc: e.target.value})}
//                   className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-600 focus:bg-white/10 transition-all resize-none"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={status === "loading"}
//                 className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 group disabled:opacity-50"
//               >
//                 {status === "loading" ? "Wysyłanie..." : (
//                   <>
//                     Wyślij wiadomość
//                     <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                   </>
//                 )}
//               </button>

//               <AnimatePresence>
//                 {status === "success" && (
//                   <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-500 text-center text-xs font-bold uppercase">
//                     Wiadomość dotarła do bazy! Odpłyniemy z odpowiedzią niebawem.
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </form>
//           </motion.div>

//         </div>
//       </div>
//     </main>
//   );
// }

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, Send, Instagram, Facebook, Youtube } from "lucide-react";

export default function KontaktPage() {
  const [formData, setFormData] = useState({ imie: "", email: "", tresc: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.tresc) return;
    setStatus("loading");
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ imie: "", email: "", tresc: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else { setStatus("error"); }
    } catch { setStatus("error"); }
  };

  return (
    // Zmniejszono paddingi pt-32 -> pt-24 oraz pb-20 -> pb-10
    <main className="min-h-screen bg-[#050505] text-white pt-24 pb-10 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Zmniejszono gap 16 -> 8 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          
          {/* LEWA KOLUMNA: INFORMACJE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 md:space-y-12"
          >
            <div>
              {/* text-6xl -> text-3xl na mobile */}
              <h1 className="text-3xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4 md:mb-6">
                Bądźmy <br /> <span className="text-blue-600">w kontakcie</span>
              </h1>
              <p className="text-zinc-500 text-xs md:text-lg max-w-md leading-relaxed">
                Masz pytania? Pisz śmiało. Odpowiadamy zazwyczaj w ciągu 24h.
              </p>
            </div>

            {/* Bardziej kompaktowe dane kontaktowe */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="flex items-center gap-3 group bg-white/5 p-3 rounded-2xl border border-white/5 md:bg-transparent md:border-none md:p-0">
                <div className="w-10 h-10 shrink-0 rounded-full bg-zinc-900 flex items-center justify-center border border-white/10">
                  <Mail size={16} className="text-blue-500" />
                </div>
                <div className="min-w-0">
                  <p className="text-[8px] uppercase tracking-widest text-zinc-500 font-bold">Email</p>
                  <p className="text-sm md:text-lg font-medium truncate">kontakt@balticseatrout.pl</p>
                </div>
              </div>

              <div className="flex items-center gap-3 group bg-white/5 p-3 rounded-2xl border border-white/5 md:bg-transparent md:border-none md:p-0">
                <div className="w-10 h-10 shrink-0 rounded-full bg-zinc-900 flex items-center justify-center border border-white/10">
                  <MessageSquare size={16} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-[8px] uppercase tracking-widest text-zinc-500 font-bold">Social Media</p>
                  <div className="flex gap-3 mt-1">
                    <Instagram size={14} className="hover:text-blue-500 transition-colors" />
                    <Facebook size={14} className="hover:text-blue-500 transition-colors" />
                    <Youtube size={14} className="hover:text-blue-500 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* PRAWA KOLUMNA: FORMULARZ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            // p-8 -> p-5 na mobile
            className="bg-zinc-900/30 backdrop-blur-xl p-5 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] uppercase font-bold tracking-widest text-zinc-500 ml-1">Imię</label>
                  <input
                    type="text"
                    placeholder="Imię"
                    value={formData.imie}
                    onChange={(e) => setFormData({...formData, imie: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-600 transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] uppercase font-bold tracking-widest text-zinc-500 ml-1">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-600 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[9px] uppercase font-bold tracking-widest text-zinc-500 ml-1">Wiadomość *</label>
                <textarea
                  required
                  rows={3} // Zmniejszono z 4 na 3
                  placeholder="W czym możemy pomóc?"
                  value={formData.tresc}
                  onChange={(e) => setFormData({...formData, tresc: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-600 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {status === "loading" ? "Wysyłanie..." : "Wyślij"}
              </button>

              <AnimatePresence>
                {status === "success" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500 text-center text-[10px] font-bold">
                    Wiadomość wysłana!
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
}