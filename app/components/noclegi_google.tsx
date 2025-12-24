"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Link from "next/link";
import { ArrowRight, Bed, Coffee, Wifi } from "lucide-react";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

// Fix dla brakujących ikon Leafleta w Next.js
const hotelIcon = typeof window !== 'undefined' ? new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
}) : null;

const accommodations = [
  {
    id: 1,
    nazwa: "Pensjonat u Sławka",
    pozycja: [54.145, 15.305] as [number, number],
    opis: "Pokoje 2-osobowe, 50m od rzeki Regi. Możliwość skorzystania z wędzarni.",
    cena: "od 120 zł/os",
    img: "/nocleg1.jpg", 
    link: "/noclegi/u-slawka"
  },
  {
    id: 2,
    nazwa: "Hotel Baltic Trout",
    pozycja: [54.175, 15.585] as [number, number],
    opis: "Luksusowe apartamenty z widokiem na morze i parkingiem na łodzie.",
    cena: "od 250 zł/noc",
    img: "/nocleg2.jpg",
    link: "/noclegi/baltic-trout"
  }
];

export default function NoclegiMap() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Jeśli komponent nie jest zamontowany w przeglądarce, nie renderujemy mapy (fix dla appendChild)
  if (!isMounted) {
    return <div className="w-full h-full bg-zinc-900 animate-pulse" />;
  }

  return (
    <>
      <div className="w-full h-full min-h-[300px] relative">
        <MapContainer 
          center={[54.150, 15.400]} 
          zoom={11} 
          style={{ height: "100%", width: "100%", zIndex: 1 }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />

          {accommodations.map((place) => (
            <Marker key={place.id} position={place.pozycja} icon={hotelIcon!}>
              <Popup>
                <div className="w-[220px] bg-white text-black rounded-xl overflow-hidden shadow-xl">
                  <div className="relative">
                    <img src={place.img} className="w-full h-28 object-cover" alt={place.nazwa} />
                    <div className="absolute top-2 right-2 bg-blue-600 text-white text-[9px] font-bold px-2 py-1 rounded-md shadow-lg">
                      {place.cena}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-sm font-black uppercase mb-1 leading-none">{place.nazwa}</h3>
                    <p className="text-zinc-600 text-[10px] leading-relaxed mb-3">{place.opis}</p>
                    
                    <div className="flex gap-3 mb-4 text-zinc-400">
                      <Wifi size={14} />
                      <Coffee size={14} />
                      <Bed size={14} />
                    </div>

                    <Link 
                      href={place.link}
                      className="flex items-center justify-between w-full py-2.5 px-4 bg-blue-600 !text-white text-[9px] font-black uppercase rounded-lg hover:bg-blue-500 transition-all shadow-md"
                    >
                      <span className="!text-white">Szczegóły obiektu</span>
                      <ArrowRight size={12} className="text-white" />
                    </Link>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <style jsx global>{`
        .leaflet-popup-content-wrapper { 
          background: white !important; 
          color: black !important; 
          padding: 0 !important; 
          border-radius: 16px !important; 
          overflow: hidden; 
          box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04) !important;
        }
        .leaflet-popup-content { margin: 0 !important; width: 220px !important; }
        .leaflet-popup-tip { background: white !important; }
        .leaflet-popup-content a { color: white !important; text-decoration: none !important; }
      `}</style>
    </>
  );
}