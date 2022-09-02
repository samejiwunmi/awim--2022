import React from "react";
import About from "./pages/About";
// import Header from './components/Header'
import Speakers from "./components/Speakers";
import TravelTips from "./pages/TravelTips";
import Schedule from "./components/Schedule";
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Main from "./components/Main";
import Register from './pages/Register'
import Footer from "./components/Footer";
import PitchZone from "./pages/PitchZone";
import Home from "./layout/Home";

function App() {
  return (
    <div>

      <NavBar />
      {/* <Speakers /> */}
      {/* <Main /> */}
      <Routes>
        <Route path='/' element = { <Home />} />
        <Route path='/about' element = { <About /> } />
        <Route path='/pitchzone' element = { <PitchZone />} />
        <Route path='/register' element = { <Register /> } />
        <Route path='/traveltips' element = { <TravelTips /> } />
        <Route path='/speakers' element = { <Speakers /> } />
      </Routes>
    </div>
  );
}

export default App;
