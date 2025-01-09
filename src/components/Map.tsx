'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Otomat konumları
const locations = [
  {
    position: [40.7414, 30.327],
    name: "Serdivan AVM Otomatı",
  },{
    position: [40.74139, 30.32667],
    name: "Serdivan AVM Otomatı",
  },{
    position: [40.74278, 30.33333],
    name: "Serdivan AVM Otomatı",
  },
  // Yeni konumlar eklemek için:
  // {
  //   position: [enlem, boylam],
  //   name: "Otomat Adı",
  // },
];
// Haritanın merkez noktası (tüm otomatların ortalama konumu)
const centerPosition: [number, number] = [40.756821, 30.373275];

export const Map: React.FC = () => {
  useEffect(() => {
    // @ts-ignore
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg"
    >
      <MapContainer
        center={centerPosition}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location, index) => (
          <Marker 
            key={index} 
            position={location.position as [number, number]}
          >
            <Popup>
              <div className="text-center">
                <h3 className="font-bold">{location.name}</h3>
                <p className="text-sm">7/24 Hizmet</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </motion.div>
  );
}; 