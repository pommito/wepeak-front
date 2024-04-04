import { IconContext } from 'react-icons';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './EventCard.scss';

const EventCard = ({ title, date }) => {
  return (
    <article className="EventCard">
      <img
        src="/src/assets/images/Home_hero_3.avif"
        alt=""
        className="EventCard-image"
      />
      <div className="EventCard-content">
        <span className="EventCard-content-category">Category</span>
        <time dateTime={date} className="EventCard-content-date">
          {date}
        </time>
        <h3 className="EventCard-content-title">{title}</h3>
        <Link to="/" className="EventCard-content-link">
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
