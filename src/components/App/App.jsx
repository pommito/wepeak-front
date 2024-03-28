import { Route, Routes } from 'react-router-dom';

import Header from '../views/Header/Header';
import Home from '../views/Home/Home';
import Activity from '../views/Activity/Activity';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity" element={<Activity />} />
      </Routes>
    </div>
  );
};

export default App;
