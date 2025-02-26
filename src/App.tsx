import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Facilities from './components/Facilities';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Products />
        <Facilities />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;