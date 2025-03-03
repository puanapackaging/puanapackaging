// import React from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import LandingPage from './components/Index'
// import About from './pages/About'
// import MyProducts from './pages/MyProduct'
// import Facilities from './pages/Facilities'
// import Careers from './pages/Career'
// import Contact from './pages/Contact'



// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/product" element={<MyProducts />} />
//         <Route path="/facility" element={<Facilities />} />
//         <Route path="/careers" element={<Careers />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   )
// }

// export default App

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import LandingPage from "./components/Index";
import About from "./pages/About";
import MyProducts from "./pages/MyProduct";
import Facilities from "./pages/Facilities";
import Careers from "./pages/Career";
import Contact from "./pages/Contact";

const App = () => {
  const phoneNumber = "+919310608890"; // Your WhatsApp number
  const message = "Hello, I am interested in your services!"; // Default message
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<MyProducts />} />
        <Route path="/facility" element={<Facilities />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-all duration-300"
        style={{ width: "60px", height: "60px", zIndex: 1000 }}
      >
        <FaWhatsapp size={30} />
      </a>
    </Router>
  );
};

export default App;
