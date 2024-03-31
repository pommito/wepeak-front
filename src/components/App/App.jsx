import { Route, Routes } from 'react-router-dom';

import Header from '../views/Header/Header';
import Home from '../views/Home/Home';
import Activity from '../views/Activity/Activity';
import Contact from '../views/Contact/Contact';
import Footer from '../views/Footer/Footer';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities/single" element={<Activity />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
