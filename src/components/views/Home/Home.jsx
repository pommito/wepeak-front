import Faq from '../../utils/Faq/Faq';
import Activities from './Activities/Activities';
import CtaBanner from './CtaBanner/CtaBanner';
import DoubleCta from './DoubleCta/DoubleCta';
import Hero from './Hero/Hero';
import './Home.scss';

const Home = () => {
  return (
    <main className="Home">
      <Hero />
      <Activities />
      <CtaBanner />
      <Faq />
      <DoubleCta />
    </main>
  );
};

export default Home;
