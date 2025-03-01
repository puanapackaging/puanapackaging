
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

// Define interfaces
interface MachineItem {
  sn: number;
  description: string;
  make?: string;
}

interface MachineSection {
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  description: string;
  items: MachineItem[];
  stats?: { [key: string]: string };
}

interface SustainabilityInitiative {
  name: string;
  desc: string;
  stat: string;
}

interface Sustainability {
  title: string;
  image: string;
  initiatives: SustainabilityInitiative[];
}

interface ExpansionPlan {
  name: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface FacilitiesProps {}

const Facilities: React.FC<FacilitiesProps> = () => {
  const machines: MachineSection[] = [
    {
      category: 'Production Machines',
      icon: FaIndustry,
      image: 'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'High-precision machinery driving large-scale production with unmatched efficiency',
      items: [
        { sn: 1, description: 'Rotogravure Printing - 8 Color', make: 'Lapra' },
        { sn: 2, description: 'Lamination Machine', make: 'Lapra' },
        { sn: 3, description: 'Slitting Machine', make: 'Lapra' },
        { sn: 4, description: 'Slitting cum Inspection Machine', make: 'Lapra' },
        { sn: 5, description: 'Pouch Making Machine', make: 'Mamta Machinery' },
        { sn: 6, description: 'Hot Air Generator System', make: 'Heat Max' },
        { sn: 7, description: 'Compressors - 2 Nos', make: 'ELGI' },
        { sn: 8, description: 'Handle Fixing Machine' },
        { sn: 9, description: 'Core Cutting Machine' },
      ],
      stats: { capacity: '850 tons/month', uptime: '99.9%', speed: '350 m/min', energy: '30% renewable' }
    },
    {
      category: 'Inspection and Lab Equipment',
      icon: FaFlask,
      image: 'https://images.unsplash.com/photo-1582719471350-0c27f774b9e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Advanced tools ensuring rigorous quality control and product excellence',
      items: [
        { sn: 1, description: 'Dart Impact Tester', make: 'Presto' },
        { sn: 2, description: 'MBTL Light Fastness Tester', make: 'Presto' },
        { sn: 3, description: 'Color Matching Cabinet', make: 'Presto' },
        { sn: 4, description: 'Tensile Testing Machine', make: 'Presto' },
        { sn: 5, description: 'Co-Efficient of Friction', make: 'Presto' },
        { sn: 6, description: 'Hot Air Oven', make: 'Presto' },
        { sn: 7, description: 'Tearing Strength Tester', make: 'Presto' },
        { sn: 8, description: 'Bursting Strength Tester', make: 'Presto' },
      ],
      stats: { accuracy: '99.8%', tests: '2000+/day', calibration: 'ISO 9001', certifications: '3+' }
    },
    {
      category: 'Packaging Solutions',
      icon: FaPrint,
      image: 'https://images.unsplash.com/photo-1581092162386-2e674e7e6b43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Innovative equipment for sustainable and efficient packaging',
      items: [
        { sn: 1, description: 'Automatic Pouch Filler', make: 'Bosch' },
        { sn: 2, description: 'Shrink Wrap Machine', make: 'Sealed Air' },
        { sn: 3, description: 'Carton Erector', make: 'Wexxar Bel' },
        { sn: 4, description: 'Labeling Machine', make: 'Krones' },
        { sn: 5, description: 'Vacuum Packaging System', make: 'Multivac' },
        { sn: 6, description: 'Pallet Wrapping Machine', make: 'Robopac' },
        { sn: 7, description: 'Case Packer', make: 'Douglas Machine' },
      ],
      stats: { output: '12,000 units/hr', efficiency: '98.5%', waste: '5% recycled' }
    }
  ];

  const sustainability: Sustainability = {
    title: 'Sustainability Initiatives',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    initiatives: [
      { name: 'Solar Power Integration', desc: '40% of energy from renewable sources', stat: '1200 kW' },
      { name: 'Waste Recycling Program', desc: 'Reducing landfill waste by 60%', stat: '300 tons/year' },
      { name: 'Water Conservation', desc: 'Advanced filtration systems', stat: '50% reduction' },
      { name: 'Eco-Friendly Materials', desc: 'Biodegradable packaging options', stat: '25% of output' }
    ]
  };

  const expansionPlans: ExpansionPlan[] = [
    { name: 'Flexo Printing', desc: 'Next-gen color printing', icon: FaPaintBrush },
    { name: 'Stitching', desc: 'Automated packaging lines', icon: FaLink },
    { name: 'Extrusion Coating', desc: 'Enhanced material coating', icon: FaLayerGroup },
    { name: 'Paper Coating', desc: 'Sustainable packaging', icon: FaLeaf },
    { name: 'Digital Printing', desc: 'Customized solutions', icon: FaDesktop },
    { name: 'Robotic Automation', desc: 'AI-driven manufacturing', icon: FaRobot },
    { name: '3D Printing', desc: 'Rapid prototyping', icon: FaCube },
    { name: 'Nano-Coating', desc: 'Advanced surface tech', icon: FaMicrochip }
  ];

  return (
    <div>
      <Header />
      <section id="facilities" className="py-20 bg-gradient-to-b from-secondary/5 to-white">
        {/* Banner Section */}
        <div
          className="relative h-96 mb-16 bg-cover bg-center flex items-center justify-center text-white"
          style={{
            backgroundImage: "url('/landingmain.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/30"></div>
          <div className="relative text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Our Cutting-Edge Facilities</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md">
              Pioneering technology, sustainability, and innovation in manufacturing excellence
            </p>
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
            {machines.map((section: MachineSection) => {
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
                      {section.items.map((item: MachineItem) => (
                        <li
                          key={item.sn}
                          className="flex items-center text-secondary/90 hover:text-secondary transition-colors"
                        >
                          <FaCheckCircle className="w-4 h-4 text-accent mr-3" />
                          {item.make ? `${item.description} - ${item.make}` : item.description}
                        </li>
                      ))}
                    </ul>
                    {section.stats && (
                      <div className="mt-6 grid grid-cols-2 gap-4">
                        {Object.entries(section.stats).map(([key, value]: [string, string]) => (
                          <div key={key} className="bg-white/10 p-3 rounded-lg">
                            <p className="text-sm capitalize">{key}</p>
                            <p className="font-bold">{value}</p>
                          </div>
                        ))}
                      </div>
                    )}
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
                    {sustainability.initiatives.map((item: SustainabilityInitiative) => (
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
                We're investing in groundbreaking technologies and sustainable solutions to shape the future of manufacturing. 
                Additional capabilities like Flexo Printing, Stitching, Extrusion Coating, and Paper Coating are planned for the immediate future.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {expansionPlans.map((item: ExpansionPlan) => (
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
      <Footer />
    </div>
  );
};

export default Facilities;