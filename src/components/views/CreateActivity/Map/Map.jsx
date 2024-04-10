import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import './Map.scss';

const Map = () => {
  const ChangeView = ({ center, zoom }) => {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  };

  return (
    <MapContainer
      className="map-container"
      center={[45.63500510235028, 6.037821789746624]}
      zoom={15}
    >
      <ChangeView center={[45.63500510235028, 6.037821789746624]} zoom={15} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[45.63500510235028, 6.037821789746624]} />
    </MapContainer>
  );
};

export default Map;
