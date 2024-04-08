import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Header from '../views/Header/Header';
import Footer from '../views/Footer/Footer';
import Home from '../views/Home/Home';
import Activity from '../views/Activity/Activity';
import CreateActivity from '../views/CreateActivity/CreateActivity';
import Contact from '../views/Contact/Contact';
import Error404 from '../views/Error404/Error404';
import Activities from '../views/Activities/Activities';
import Login from '../views/Login/Login';
import Register from '../views/Register/Register';

import './App.scss';

const App = () => {
  const location = useLocation();

  const excludedPaths = ['/login', '/register', '/activities/create'];
  const isExcludedPath = excludedPaths.includes(location.pathname);

  return (
    <div className="App">
      {!isExcludedPath && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities/:slug" element={<Activity />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/activities/create" element={<CreateActivity />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      {!isExcludedPath && <Footer />}
    </div>
  );
};

export default App;
