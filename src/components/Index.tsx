import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Products from './Products';
import Facilities from './Facilities';
import Clients from './Clients';
import Contact from './Contact';
import Footer from './Footer';

function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Products />
        <Facilities />
        {/* <Clients /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;