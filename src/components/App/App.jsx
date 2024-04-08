import { Route, Routes, useLocation } from 'react-router-dom';

import Header from '../views/Header/Header';
import Footer from '../views/Footer/Footer';
import Home from '../views/Home/Home';
import Activity from '../views/Activity/Activity';
import Contact from '../views/Contact/Contact';
import Error404 from '../views/Error404/Error404';
import Profile from '../views/Profile/Profile';
import UserPage from '../views/UserPage/UserPage';

import Activities from '../views/Activities/Activities';
import Login from '../views/Login/Login';
import Register from '../views/Register/Register';

import './App.scss';

const App = () => {
  const location = useLocation();

  const excludedPaths = ['/login', '/register'];
  const isExcludedPath = excludedPaths.includes(location.pathname);

  return (
    <div className="App">
      {!isExcludedPath && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/activities/:slug" element={<Activity />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user/:slug" element={<UserPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      {!isExcludedPath && <Footer />}
    </div>
  );
};

export default App;
