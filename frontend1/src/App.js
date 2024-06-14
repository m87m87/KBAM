import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Home";
import Aboutpage from "./components/About";
import Contactpage from "./components/Contact";
import LogoComponent from "./components/Logo1";
import "./components/logo.css"
import Donatepage from "./components/Donate";
import Servicespage from "./components/Service";
import Scavengerpage from "./components/Scavenger";
import Eventspage from "./components/Events";


function App() {
  return (
    <Router>
      <div>
        
        <LogoComponent />
        
        <Navbar />
        <Routes>
          
          <Route exact path="/" element={ <Homepage /> } />
          <Route path="home" element={ <Homepage /> } />
          <Route path="events" element={ <Eventspage /> } />
          <Route path="about" element={ <Aboutpage /> } />
          <Route path="contact" element={ <Contactpage /> } />
          <Route path="services" element={ <Servicespage /> } />
          <Route path="scavenger" element={ <Scavengerpage /> } />
          <Route path="donate" element={ <Donatepage /> } />
          
        </Routes>
        
      </div>
      
      
    </Router>
  );
}

export default App;
