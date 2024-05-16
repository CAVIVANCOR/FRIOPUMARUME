/* eslint-disable no-unused-vars */
import React from "react";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapView.css';
const MapView = () => {
    const positionCentro = [-11.990161, -77.127733];
    const positionPpfish = [-11.99047, -77.12995];
    return (
        <MapContainer center={positionCentro} zoom={16} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={positionPpfish}>
                <Popup>
                    FRIOPUMARUME <br/> PPFISH SAC <br/> Calle A Lote 4 Sección 5 Fundo Oquendo Callao <br/> Provincia Constitucional del Callao
                </Popup>
                <Tooltip direction="bottom" offset={[-15, 26]} opacity={1} permanent>
                    PPFISH SAC
                </Tooltip>
            </Marker>
        </MapContainer>
    )
}

export default MapView;