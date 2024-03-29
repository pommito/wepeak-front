// React-icons imports
import { IconContext } from 'react-icons';
import { TbClockHour8 } from 'react-icons/tb';
import { HiOutlineLocationMarker } from 'react-icons/hi';

// Leaflet imports
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import './ActivityIllustration.scss';

const ActivityIllustration = () => {
  return (
    <div className="ActivityIllustration">
      <div className="ActivityIllustration-imgContainer">
        <img
          src="https://idata.over-blog.com/0/08/49/95/Ski-de-Rando-2011/P1000329.jpg"
          alt=""
        />
      </div>

      <div className="ActivityIllustration-mapCard">
        <div className="ActivityIllustration-mapCard-info">
          <div className="ActivityIllustration-mapCard-info-date">
            <IconContext.Provider value={{ size: '1.4rem' }}>
              <TbClockHour8 />
            </IconContext.Provider>
            <p>
              <span>Date et heure de départ</span> <br /> 10-04-2024 à 07h00
            </p>
          </div>

          <div className="ActivityIllustration-mapCard-info-location">
            <IconContext.Provider value={{ size: '1.4rem' }}>
              <HiOutlineLocationMarker />
            </IconContext.Provider>
            <p>
              <span>Lieu de rendez-vous</span> <br /> 10 Rte des Confins <br />{' '}
              74220 La Clusaz
            </p>
          </div>
        </div>

        <div className="ActivityIllustration-mapCard-map">
          <MapContainer
            className="map-container"
            center={[45.923156, 6.48366]}
            zoom={15}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[45.923156, 6.48366]} />
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default ActivityIllustration;
