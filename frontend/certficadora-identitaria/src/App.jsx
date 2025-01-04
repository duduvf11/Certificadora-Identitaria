import { } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Home from './components/home/Home'
import Donation from "./components/donation/Donation";
import DonateAbsorvents from './components/donateAbsorvents/DonateAbsorvents';
import DonateMoney from './components/donateMoney/DonateMoney';
import Request from "./components/request/Request";
import Project from "./components/project/Project";
import Admin_home from "./components/admin_home/admin_home";
import Control from "./components/control/controle";
import Demands from "./components/demands/demanda";
import History from "./components/history/historico";

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
        <Route path="/admin" element={<Admin_home />} />
        <Route path="/control" element={<Control />} />
        <Route path="/demands" element={<Demands />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
};

export default App
