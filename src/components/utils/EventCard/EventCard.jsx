import { IconContext } from 'react-icons';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './EventCard.scss';

const EventCard = () => {
  return (
    <article className="EventCard">
      <img
        src="/src/assets/images/Home_hero_3.avif"
        alt=""
        className="EventCard-image"
      />
      <div className="EventCard-content">
        <span className="EventCard-content-category">Category</span>
        <time dateTime="2024-03-28" className="EventCard-content-date">
          28 mars 2024
        </time>
        <h3 className="EventCard-content-title">
          Responsive design: Cross-device experience
        </h3>
        <Link to="/" target="_blank" className="EventCard-content-link">
          <span>Lire plus</span>
          <IconContext.Provider value={{ size: '.6rem' }}>
            <FiArrowRight />
          </IconContext.Provider>
        </Link>
      </div>
    </article>
  );
};

export default EventCard;
