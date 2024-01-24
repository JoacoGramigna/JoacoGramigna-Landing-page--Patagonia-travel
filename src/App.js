import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Info from "./pages/Info/Info";
import Tours from "./pages/Tours/Tours";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Informacion" element={<Info />} />
          <Route path="/Viajes" element={<Tours />} />
          <Route path="/Contacto" element={<Contact />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
