import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './components/Index'
import About from './pages/About'
import MyProducts from './pages/MyProduct'
import Facilities from './pages/Facilities'
import Careers from './pages/Career'
import Contact from './pages/Contact'



const App = () => {
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
    </Router>
  )
}

export default App
