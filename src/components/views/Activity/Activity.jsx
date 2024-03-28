import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import './Activity.scss';

const Activity = () => {
  return (
    <main className="Activity">
      <div className="Activity-header">
        <h2 className="Activity-header-name">Trou de la mouche</h2>
        <h3 className="Activity-header-sport">Ski de randonnée</h3>

        <div className="Activity-header-host">
          <p className="Activity-header-host-by">Organisée par</p>
          <p className="Activity-header-host-name">Victor Lebecq</p>
        </div>
      </div>

      <div className="Activity-illustration">
        <img
          className="Activity-illustration-picture"
          src="https://www.ski-libre.com/pictures/2019/01/IMG_7053.png"
          alt=""
        />

        <div className="Activity-illustration-mapCard">
          <div className="Activity-illustration-mapCard-info">
            <div className="Activity-illustration-mapCard-info-date">
              10-04-2024 à 07h00
            </div>

            <div className="Activity-illustration-mapCard-info-location">
              10 Rte des Confins <br /> 74220 La Clusaz
            </div>
          </div>

          <div className="Activity-illustration-mapCard-map">
            <MapContainer
              center={[45.923156, 6.48366]}
              zoom={2}
              style={{ height: '20em', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[45.923156, 6.48366]}>coucou</Marker>
            </MapContainer>
          </div>
        </div>
      </div>

      <div className="Activity-detailsAndApply">
        <div className="Activity-detailsAndApply-description">
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            eget eros auctor, ultricies sapien et, fermentum nisl. Nulla
            facilisi. Pellentesque habitant morbi tristique senectus et net
          </p>
        </div>

        <button type="button" className="Activity-detailsAndApply-apply">
          Participer
        </button>
      </div>

      <div className="Activity-people">
        <h3>Participant(s) (4)</h3>

        <div className="Activity-people-card">
          <div className="Activity-people-card-imgContainer">
            <img src="" alt="" />
          </div>

          <p className="Activity-people-name">Melvin</p>
        </div>
      </div>

      <div className="Activity-pictures">
        <h3>Photo(s) (4)</h3>
      </div>
    </main>
  );
};

export default Activity;
