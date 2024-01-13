import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Pages/Hero";
import Footer from "./Pages/Footer";
import Nav from "./Pages/Nav";
import Creatives from "./Pages/Creatives";
import Profil from "./Pages/Profil.jsx";
import Services from "./Pages/Services";
import Login from "./Pages/Login";

export default function App() {
  return (
    <Router>
      <div className="container overflow-hidden mx-auto min-h-screen bg-background dark:bg-primary">
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/creatives" element={<Creatives />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/Login" element={<Login />} />
       
        </Routes>
           <Footer /> 
      </div>
    </Router>
  );
}
