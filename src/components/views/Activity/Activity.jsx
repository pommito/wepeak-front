// React-icons imports
import { IconContext } from 'react-icons';
import { TbClockHour8 } from 'react-icons/tb';
import { HiOutlineLocationMarker } from 'react-icons/hi';

// Leaflet imports
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { Link } from 'react-router-dom';

import './Activity.scss';

const Activity = () => {
  return (
    <main className="Activity">
      <div className="Activity-header">
        <h2 className="Activity-header-name">Trou de la mouche</h2>
        <h3 className="Activity-header-sport">Ski de randonnée</h3>

        <div className="Activity-header-host">
          <Link to="/user/id">
            <div className="Activity-header-host-imgContainer">
              <img
                src="https://ca.slack-edge.com/T060RPZMDH6-U0618RK2TDZ-75fbfe1c1df7-512"
                alt=""
              />
            </div>
          </Link>

          <div className="Activity-header-host-by">
            <p className="Activity-header-host-by-text">Organisée par</p>
            <Link to="/user/id">
              <p className="Activity-header-host-by-name">Victor Lebecq</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="Activity-illustration">
        <div className="Activity-illustration-imgContainer">
          <img
            src="https://idata.over-blog.com/0/08/49/95/Ski-de-Rando-2011/P1000329.jpg"
            alt=""
          />
        </div>

        <div className="Activity-illustration-mapCard">
          <div className="Activity-illustration-mapCard-info">
            <div className="Activity-illustration-mapCard-info-date">
              <IconContext.Provider value={{ size: '1.4rem' }}>
                <TbClockHour8 />
              </IconContext.Provider>
              <p>
                <span>Date et heure de départ</span> <br /> 10-04-2024 à 07h00
              </p>
            </div>

            <div className="Activity-illustration-mapCard-info-location">
              <IconContext.Provider value={{ size: '1.4rem' }}>
                <HiOutlineLocationMarker />
              </IconContext.Provider>
              <p>
                <span>Lieu de rendez-vous</span> <br /> 10 Rte des Confins{' '}
                <br /> 74220 La Clusaz
              </p>
            </div>
          </div>

          <div className="Activity-illustration-mapCard-map">
            <MapContainer
              center={[45.923156, 6.48366]}
              zoom={15}
              style={{ height: '16.5rem', width: '100%' }}
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

      <div className="Activity-detailsAndApply">
        <div className="Activity-detailsAndApply-description">
          <h3>Description</h3>
          <p>
            Il s'agit d'enchaîner la montée de la combe du Grand Crêt, passer le
            trou de la Mouche pour basculer à droite sur le couloir SE du Trou
            de la Mouche (5min du trou), arriver dans le beau, grand et
            silencieux vallon de Tré le Crot qu'il faut remonter vers le nord
            pour atteindre une crête orientée plein E. Ensuite, on franchit le
            passage de la Grande Forclaz et dévaler la combe du même nom avant
            de revenir via le bas de Tardevant et Paccaly, à notre point de
            départ.
          </p>
        </div>

        <button type="button" className="Activity-detailsAndApply-apply">
          Participer
        </button>
      </div>

      <div className="Activity-people">
        <h3>Participants [2]</h3>
        <div className="Activity-people-cards">
          <Link to="/user/id">
            <div className="Activity-people-cards-card">
              <div className="Activity-people-cards-card-imgContainer">
                <img
                  src="https://ca.slack-edge.com/T060RPZMDH6-U06160CTFNZ-5a4cda8a8782-512"
                  alt=""
                />
              </div>

              <p className="Activity-people-cards-card-name">Melvin</p>
            </div>
          </Link>
          <Link to="/user/id">
            <div className="Activity-people-cards-card">
              <div className="Activity-people-cards-card-imgContainer">
                <img
                  src="https://ca.slack-edge.com/T060RPZMDH6-U0619H5V5DG-7ee094234be2-512"
                  alt=""
                />
              </div>

              <p className="Activity-people-cards-card-name">
                Nicolas-Guillaume
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="Activity-pictures">
        <h3>Photos</h3>
      </div>
    </main>
  );
};

export default Activity;
