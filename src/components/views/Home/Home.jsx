import Faq from '../../utils/Faq/Faq';
import ActivityGrid from './AcitivityGrid/ActivityGrid';
import CtaBanner from './CtaBanner/CtaBanner';
import DoubleCta from './DoubleCta/DoubleCta';
import Hero from './Hero/Hero';
import './Home.scss';

const Home = () => {
  return (
    <main className="Home">
      <Hero />
      <ActivityGrid />
      <CtaBanner />
      <Faq />
      <DoubleCta />
    </main>
  );
};

export default Home;
