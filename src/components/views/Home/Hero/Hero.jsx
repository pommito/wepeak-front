import Button from '../../../utils/Button/Button';
import './Hero.scss';

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero-content">
        <h1 className="Hero-content-title">
          Discover the key to grow your business
        </h1>
        <p className="Hero-content-description">
          Lorem ipsum dolor sit amet consectetur adipiscing elidolor mattis sit
          phasellus mollis sit aliquam sit nullam neques.
        </p>
        <div className="Hero-content-buttons">
          <Button text="Get started" className="primary" url="#" />
          <Button text="Learn more" className="secondary" url="#" />
        </div>
      </div>
      <div className="Hero-gallery">
        <img
          src="/src/assets/images/Home_hero_1.avif"
          alt="resort skiing"
          className="Hero-gallery-image"
        />
        <img
          src="/src/assets/images/Home_hero_2.avif"
          alt="cross biking"
          className="Hero-gallery-image"
        />
        <img
          src="/src/assets/images/Home_hero_3.avif"
          alt="backcountry skiing"
          className="Hero-gallery-image"
        />
        <img
          src="/src/assets/images/Home_hero_4.avif"
          alt="surfing"
          className="Hero-gallery-image"
        />
        <img
          src="/src/assets/images/Home_hero_5.avif"
          alt="hiking"
          className="Hero-gallery-image"
        />
      </div>
    </div>
  );
};

export default Hero;
