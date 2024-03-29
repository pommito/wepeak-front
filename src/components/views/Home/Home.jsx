import Faq from '../../utils/Faq/Faq';
import Activities from './Activities/Activities';
import CtaBanner from './CtaBanner/CtaBanner';
import Hero from './Hero/Hero';
import './Home.scss';

const Home = () => {
  return (
    <div className="Home">
      {/* <Hero /> */}
      {/* <Activities /> */}
      {/* <CtaBanner /> */}
      <Faq />
    </div>
  );
};

export default Home;
