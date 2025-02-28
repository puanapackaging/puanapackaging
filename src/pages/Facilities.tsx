

import React from 'react';
import { 
  FaIndustry, 
  FaFlask, 
  FaPrint, 
  FaTools, 
  FaArrowRight, 
  FaCheckCircle, 
  FaAward, 
  FaChartBar, 
  FaGlobe,
  FaPaintBrush,
  FaLink,
  FaLayerGroup,
  FaLeaf,
  FaDesktop,
  FaRobot,
  FaCube,
  FaMicrochip
} from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Facilities() {
  // Keeping the previous machines and sustainability sections intact for context
  const machines = [
    {
      category: 'Production Machines',
      icon: FaIndustry,
      image: 'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'High-precision machinery driving large-scale production with unmatched efficiency',
      items: [
        'Rotogravure Printing (8 Color) - Lapra',
        'Lamination Machine - Lapra',
        'Slitting Machine - Lapra',
        'Pouch Making Machine - Mamta Machinery',
        'High-Speed Extruder - Kolsite',
        'Automatic Cutting System - PrecisionTech',
        'Die-Cutting Machine - Bobst',
        'Flexographic Printer - Mark Andy',
        'Embossing Machine - Heidelberg',
        'Foil Stamping Unit - Gietz'
      ],
      stats: { capacity: '850 tons/month', uptime: '99.9%', speed: '350 m/min', energy: '30% renewable' }
    },
    {
      category: 'Testing Equipment',
      icon: FaFlask,
      image: 'https://images.unsplash.com/photo-1582719471350-0c27f774b9e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Advanced tools ensuring rigorous quality control and product excellence',
      items: [
        'Dart Impact Tester - Presto',
        'MBTL Light Fastness Tester - Presto',
        'Color Matching Cabinet - Presto',
        'Tensile Testing Machine - Presto',
        'Digital Microscope - Olympus',
        'Spectrophotometer - X-Rite',
        'Thermal Stability Tester - Labthink',
        'Moisture Analyzer - Mettler Toledo',
        'Friction Tester - Testing Machines Inc.',
        'Gas Chromatography - Agilent'
      ],
      stats: { accuracy: '99.8%', tests: '2000+/day', calibration: 'ISO 9001', certifications: '3+' }
    },
    {
      category: 'Packaging Solutions',
      icon: FaPrint,
      image: 'https://images.unsplash.com/photo-1581092162386-2e674e7e6b43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Innovative equipment for sustainable and efficient packaging',
      items: [
        'Automatic Pouch Filler - Bosch',
        'Shrink Wrap Machine - Sealed Air',
        'Carton Erector - Wexxar Bel',
        'Labeling Machine - Krones',
        'Vacuum Packaging System - Multivac',
        'Pallet Wrapping Machine - Robopac',
        'Case Packer - Douglas Machine'
      ],
      stats: { output: '12,000 units/hr', efficiency: '98.5%', waste: '5% recycled' }
    }
  ];

  const sustainability = {
    title: 'Sustainability Initiatives',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    initiatives: [
      { name: 'Solar Power Integration', desc: '40% of energy from renewable sources', stat: '1200 kW' },
      { name: 'Waste Recycling Program', desc: 'Reducing landfill waste by 60%', stat: '300 tons/year' },
      { name: 'Water Conservation', desc: 'Advanced filtration systems', stat: '50% reduction' },
      { name: 'Eco-Friendly Materials', desc: 'Biodegradable packaging options', stat: '25% of output' }
    ]
  };

  return (
    <div>
        <Header/>
        <section id="facilities" className="py-20 bg-gradient-to-b from-secondary/5 to-white">
      {/* Banner Image */}
      <div className="relative h-96 mb-16 overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Our Cutting-Edge Facilities</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md">
              Pioneering technology, sustainability, and innovation in manufacturing excellence
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold mb-2 block uppercase tracking-widest">
            OUR CAPABILITIES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Redefining Manufacturing Standards
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            From advanced machinery to eco-conscious processes, our facilities set the benchmark 
            for quality, efficiency, and sustainability in the industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {machines.map((section) => {
            const IconComponent = section.icon;
            return (
              <div
                key={section.category}
                className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0">
                  <img
                    src={section.image}
                    alt={section.category}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-primary/30" />
                </div>
                <div className="relative p-8 text-white">
                  <div className="flex items-center mb-6">
                    <div className="bg-accent/30 p-3 rounded-lg backdrop-blur-sm">
                      <IconComponent className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold ml-4">{section.category}</h3>
                  </div>
                  <p className="text-secondary/90 mb-4">{section.description}</p>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center text-secondary/90 hover:text-secondary transition-colors"
                      >
                        <FaCheckCircle className="w-4 h-4 text-accent mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {Object.entries(section.stats).map(([key, value]) => (
                      <div key={key} className="bg-white/10 p-3 rounded-lg">
                        <p className="text-sm capitalize">{key}</p>
                        <p className="font-bold">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sustainability Section */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-xl border border-secondary/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-bl from-accent/10 to-transparent transform -rotate-12 -translate-x-1/3" />
          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-primary">{sustainability.title}</h3>
              <FaGlobe className="h-10 w-10 text-accent" />
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <img
                  src={sustainability.image}
                  alt="Sustainability"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-gray-700 mb-6">
                  Committed to a greener future, we integrate sustainable practices into every aspect of our operations
                </p>
                <div className="grid gap-4">
                  {sustainability.initiatives.map((item) => (
                    <div key={item.name} className="flex items-start group">
                      <div className="bg-accent/10 p-2 rounded-lg mt-1">
                        <FaTools className="h-5 w-5 text-accent" />
                      </div>
                      <div className="ml-3">
                        <span className="text-gray-800 font-semibold group-hover:text-primary transition-colors">{item.name}</span>
                        <p className="text-sm text-gray-600">{item.desc} - <strong>{item.stat}</strong></p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Expansion Plans */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-xl border border-secondary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-secondary/10 to-transparent transform rotate-12 translate-x-1/3" />
          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-primary">Future Expansion Plans</h3>
              <FaAward className="h-10 w-10 text-accent" />
            </div>
            <p className="text-gray-700 mb-6 max-w-2xl">
              We're investing in groundbreaking technologies and sustainable solutions to shape the future of manufacturing
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'Flexo Printing', desc: 'Next-gen color printing', icon: FaPaintBrush },
                { name: 'Stitching', desc: 'Automated packaging lines', icon: FaLink },
                { name: 'Extrusion Coating', desc: 'Enhanced material coating', icon: FaLayerGroup },
                { name: 'Paper Coating', desc: 'Sustainable packaging', icon: FaLeaf },
                { name: 'Digital Printing', desc: 'Customized solutions', icon: FaDesktop },
                { name: 'Robotic Automation', desc: 'AI-driven manufacturing', icon: FaRobot },
                { name: '3D Printing', desc: 'Rapid prototyping', icon: FaCube },
                { name: 'Nano-Coating', desc: 'Advanced surface tech', icon: FaMicrochip }
              ].map((item) => (
                <div key={item.name} className="flex items-start group">
                  <div className="bg-accent/10 p-2 rounded-lg mt-1">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="ml-3">
                    <span className="text-gray-800 font-semibold group-hover:text-primary transition-colors">{item.name}</span>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button className="flex items-center text-accent hover:text-primary font-semibold transition-colors group">
                Explore Our Vision
                <FaArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <div className="flex items-center text-gray-600">
                <FaChartBar className="h-5 w-5 mr-2" />
                <span>Projected Growth: 30% by 2027</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
}