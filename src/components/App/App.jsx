import { Route, Routes } from 'react-router-dom';

import Header from '../views/Header/Header';
import Home from '../views/Home/Home';
import Activity from '../views/Activity/Activity';
import Footer from '../views/Footer/Footer';

import './App.scss';
import Activities from '../views/Activities/Activities';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/activities/single" element={<Activity />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
