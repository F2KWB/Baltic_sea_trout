"use client";
import { useEffect, useState } from "react";

export default function StaticBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-white">
      {/* Tło jest teraz czysto białe, bez dodatkowych efektów */}
    </div>
  );
}