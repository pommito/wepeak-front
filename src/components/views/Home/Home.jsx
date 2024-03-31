import { useEffect } from 'react';

import Faq from '../../utils/Faq/Faq';
import Activities from './Activities/Activities';
import CtaBanner from './CtaBanner/CtaBanner';
import DoubleCta from './DoubleCta/DoubleCta';
import Hero from './Hero/Hero';
import './Home.scss';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

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
