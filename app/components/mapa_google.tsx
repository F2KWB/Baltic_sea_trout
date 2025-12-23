// "use client";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import L from "leaflet";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import { useEffect, useState } from "react";
// import "leaflet/dist/leaflet.css";

// // Fix dla ikon Leaflet (sprawdzenie window zapobiega błędom SSR)
// const customIcon = typeof window !== 'undefined' ? new L.Icon({
//   iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
// }) : null;

// // Komponent naprawiający błąd "3 kafelków" i czarnego tła
// function MapResizer() {
//   const map = useMap();
//   useEffect(() => {
//     setTimeout(() => {
//       map.invalidateSize();
//     }, 200); // Małe opóźnienie daje czas na wyrenderowanie kontenera
//   }, [map]);
//   return null;
// }

// const locations = [
//   {
//     id: 1,
//     nazwa: "Ujście Regi",
//     pozycja: [54.372767, 18.728879] as [number, number],
//     opis: "Kultowe miejsce na srebrniaki. Najlepiej łowić przy zachodnim falochronie.",
//     img: "/ryba.jpg",
//     link: "/miejscowki/ujscie-regi"
//   },
//   {
//     id: 2,
//     nazwa: "Zakręt Parsęty",
//     pozycja: [54.050, 15.850] as [number, number],
//     opis: "Głęboka rynna, w której często odpoczywają trocie wchodzące do rzeki.",
//     img: "/ryba2.jpg",
//     link: "/miejscowki/parseta-zakret"
//   }
// ];

// export default function MapComponent() {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   // Zapobiega błędom appendChild i błędom hydracji
//   if (!isMounted) return <div className="w-full h-full bg-zinc-950" />;

//   return (
//     <>
//       <div className="w-full h-full relative">
//         <MapContainer 
//           center={[54.100, 15.500]} 
//           zoom={10} 
//           style={{ height: "100%", width: "100%", zIndex: 1, background: "#09090b" }} 
//         >
//           <MapResizer />
          
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution='&copy; OpenStreetMap contributors'
//           />

//           {locations.map((loc) => (
//             <Marker key={loc.id} position={loc.pozycja} icon={customIcon!}>
//              <Popup>
//   {/* Zmieniono w-[200px] na min-w-[160px] i dodano responsive width */}
//   <div className="w-[180px] sm:w-[200px] bg-white text-black rounded-xl overflow-hidden">
//     <img src={loc.img} className="w-full h-24 object-cover" alt={loc.nazwa} />
//     <div className="p-3">
//       {/* Dodano break-words dla bezpieczeństwa */}
//       <h3 className="text-sm font-bold uppercase mb-1 break-words leading-tight">
//         {loc.nazwa}
//       </h3>
//       <p className="text-zinc-600 text-[10px] leading-tight mb-3">
//         {loc.opis}
//       </p>
//       {/* Link bez zmian, ale upewnij się, że tekst w środku ma miejsce */}
//       <Link 
//         href={loc.link}
//         className="flex items-center justify-between w-full py-2 px-3 bg-blue-600 !text-white text-[9px] font-black uppercase rounded-lg hover:bg-blue-500 transition-colors"
//       >
//         <span className="!text-white">Szczegóły</span>
//         <ArrowRight size={12} className="text-white" />
//       </Link>
//     </div>
//   </div>
// </Popup>
//             </Marker>
//           ))}
//         </MapContainer>
//       </div>

//       <style jsx global>{`
//         /* Fix dla czarnego tła: wymuszenie widoczności kafelków */
//         .leaflet-container {
//             width: 100% !important;
//             height: 100% !important;
//         }

//         /* Jasny styl pop-upów */
//         .leaflet-popup-content-wrapper { 
//           background: white !important; 
//           color: black !important; 
//           padding: 0 !important; 
//           border-radius: 12px !important; 
//           overflow: hidden; 
//           box-shadow: 0 10px 20px rgba(0,0,0,0.2) !important;
//         }
//         .leaflet-popup-content { margin: 0 !important; width: 200px !important; }
//         .leaflet-popup-tip { background: white !important; }
//       `}</style>
//     </>
//   );
// }

"use client";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

const customIcon = typeof window !== 'undefined' ? new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [20, 32], // Zmniejszono ikonę na mobile (z 25x41)
  iconAnchor: [10, 32],
  popupAnchor: [1, -30],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [32, 32],
}) : null;

function MapResizer() {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 200);
  }, [map]);
  return null;
}

const locations = [
  {
    id: 1,
    nazwa: "Ujście Regi",
    pozycja: [54.372767, 18.728879] as [number, number],
    opis: "Kultowe miejsce na srebrniaki.",
    img: "/ryba.jpg",
    link: "/miejscowki/ujscie-regi"
  },
  {
    id: 2,
    nazwa: "Zakręt Parsęty",
    pozycja: [54.050, 15.850] as [number, number],
    opis: "Głęboka rynna, odpoczynek troci.",
    img: "/ryba2.jpg",
    link: "/miejscowki/parseta-zakret"
  }
];

export default function MapComponent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="w-full h-full bg-zinc-950" />;

  return (
    <>
      <div className="w-full h-full relative">
        <MapContainer 
          center={[54.100, 15.500]} 
          zoom={10} 
          // scrollWheelZoom={false} - opcjonalnie wyłącz, by nie przeszkadzać w przewijaniu strony
          style={{ height: "100%", width: "100%", zIndex: 1, background: "#09090b" }} 
        >
          <MapResizer />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OSM'
          />

          {locations.map((loc) => (
            <Marker key={loc.id} position={loc.pozycja} icon={customIcon!}>
              <Popup>
                {/* Zmniejszono szerokość w-[150px] na mobile */}
                <div className="w-[150px] md:w-[200px] bg-white text-black rounded-lg overflow-hidden">
                  <img src={loc.img} className="w-full h-16 md:h-24 object-cover" alt={loc.nazwa} />
                  <div className="p-2 md:p-3">
                    <h3 className="text-[10px] md:text-sm font-bold uppercase mb-0.5 break-words leading-tight">
                      {loc.nazwa}
                    </h3>
                    <p className="text-zinc-600 text-[8px] md:text-[10px] leading-tight mb-2">
                      {loc.opis}
                    </p>
                    <Link 
                      href={loc.link}
                      className="flex items-center justify-between w-full py-1.5 px-2 bg-blue-600 !text-white text-[8px] font-black uppercase rounded-md"
                    >
                      <span>Szczegóły</span>
                      <ArrowRight size={10} className="text-white" />
                    </Link>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <style jsx global>{`
        .leaflet-container { width: 100% !important; height: 100% !important; }
        
        .leaflet-popup-content-wrapper { 
          background: white !important; 
          padding: 0 !important; 
          border-radius: 8px !important; 
        }
        
        /* Drastyczne zmniejszenie marginesów Leaflet */
        .leaflet-popup-content { 
          margin: 0 !important; 
          width: 150px !important; /* Szerokość dostosowana do w-[150px] */
        }
        
        @media (min-width: 768px) {
          .leaflet-popup-content { width: 200px !important; }
        }

        .leaflet-popup-tip { background: white !important; }
        
        /* Ukrycie przycisków +/- na bardzo małych ekranach, by nie zasłaniały mapy */
        @media (max-width: 480px) {
          .leaflet-control-zoom { display: none !important; }
        }
      `}</style>
    </>
  );
}