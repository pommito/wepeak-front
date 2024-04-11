import { useSelector, useDispatch } from 'react-redux';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import './Map.scss';
import { fetchAdressFromCoordinates } from '../../../../actions/activityActions';

const Map = () => {
  const dispatch = useDispatch();
  const searchedCity = useSelector((state) => state.search.searchedCity);

  const ChangeView = ({ center, zoom }) => {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  };

  return (
    <MapContainer
      className="map-container"
      center={[searchedCity.lat, searchedCity.lng]}
      zoom={15}
    >
      <ChangeView center={[searchedCity.lat, searchedCity.lng]} zoom={15} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[searchedCity.lat, searchedCity.lng]}
        draggable="true"
        eventHandlers={{
          dragend: (e) => {
            console.log('Marker dragged to:', e.target.getLatLng());
            dispatch(
              fetchAdressFromCoordinates(e.target.getLatLng(), 'CreateActivity')
            );
          },
        }}
      />
    </MapContainer>
  );
};

export default Map;
