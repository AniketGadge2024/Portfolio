import React from 'react';
import MainPage from './component/MainPage/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './component/MainPage/Resume/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Service from './component/Service/Service';
import Admin from './component/Admin/Admin';
import Experiment from './component/Experiment';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/About" element={<About></About>} />
        <Route path="/Service" element={<Service></Service>} />
        <Route path="/Admin" element={<Admin></Admin>} />
        <Route path="/Exp" element={<Experiment></Experiment>} />

      </Routes>
    </Router>
  );
}

export default App;
