'use client';
import React, {useEffect} from 'react';
import {motion} from 'framer-motion';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Otomat konumları
const locations = [
    {
    position: [40.74278, 30.33333],
}, {
    position: [40.74333, 30.33083],
}, {
    position: [40.74028, 30.33194],
}, {
    position: [40.74306, 30.33833],
}, {
    position: [40.74583, 30.34694],
}, {
    position: [40.74806, 30.35278],
}, {
    position: [40.76278, 30.36278],
}, {
    position: [40.75972, 30.39111],
}, {
    position: [40.75833, 30.38889],
}, {
    position: [40.77444, 30.38583],
}, {
    position: [40.77222, 30.36361],
}, {
    position: [40.77722, 30.38722],
}, {
    position: [40.77889, 30.36583],
}, {
    position: [40.77611, 30.36472],
}, {
    position: [40.77611, 30.40056],
}, {
    position: [40.77667, 30.39250],
}, {
    position: [40.77389, 30.39528],
}, {
    position: [40.69722, 30.26750],
}, {
    position: [40.69000, 30.25694],
}, {
    position: [40.75750, 30.38722],
}, {
    position: [40.77028, 30.38778],
}

];
// Haritanın merkez noktası (tüm otomatların ortalama konumu)
const centerPosition: [number, number] = [40.76000, 30.36000];

export const Map: React.FC = () => {
    useEffect(() => {
        // @ts-expect-error - Leaflet'in Icon.Default.prototype._getIconUrl özelliğini silmek için gerekli
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });
    }, []);

    return (
        <motion.div
            initial={{opacity: 0, x: 50}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8, ease: "easeOut"}}
            className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg"
        >
            <MapContainer
                center={centerPosition}
                zoom={13}
                style={{height: '100%', width: '100%'}}
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
                                <h3 className="font-bold">Otomat</h3>
                                <p className="text-sm">7/24 Hizmet</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </motion.div>
    );
}; 