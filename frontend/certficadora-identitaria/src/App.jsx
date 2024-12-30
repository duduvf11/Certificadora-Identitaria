import { } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Home from './components/home/Home'
import Donation from "./components/donation/Donation";
import DonateAbsorvents from './components/donateAbsorvents/DonateAbsorvents';
import DonateMoney from './components/donateMoney/DonateMoney';
import Request from "./components/request/Request";
import Project from "./components/project/Project";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/donate-money" element={<DonateMoney />} />
        <Route path="/donate-absorvents" element={<DonateAbsorvents />} />
        <Route path="/request" element={<Request />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
};

export default App
