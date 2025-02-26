import React from 'react';
import { Printer, Wrench, FlaskRound as Flask, Factory, ArrowRight } from 'lucide-react';

export default function Facilities() {
  const machines = [
    {
      category: 'Production Machines',
      icon: Factory,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      items: [
        'Rotogravure Printing (8 Color) - Lapra',
        'Lamination Machine - Lapra',
        'Slitting Machine - Lapra',
        'Pouch Making Machine - Mamta Machinery'
      ]
    },
    {
      category: 'Testing Equipment',
      icon: Flask,
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      items: [
        'Dart Impact Tester - Presto',
        'MBTL Light Fastness Tester - Presto',
        'Color Matching Cabinet - Presto',
        'Tensile Testing Machine - Presto'
      ]
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold mb-2 block">OUR CAPABILITIES</span>
          <h2 className="text-4xl font-bold mb-6 text-primary">Advanced Manufacturing Capabilities</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            State-of-the-art machinery and testing equipment ensuring superior quality control and efficient production
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {machines.map((section) => {
            const IconComponent = section.icon;
            return (
              <div key={section.category} className="group relative overflow-hidden rounded-xl">
                <div className="absolute inset-0">
                  <img 
                    src={section.image} 
                    alt={section.category}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 to-primary/50" />
                </div>
                <div className="relative p-8 text-white">
                  <div className="flex items-center mb-6">
                    <div className="bg-accent/20 p-3 rounded-lg">
                      <IconComponent className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold ml-4">{section.category}</h3>
                  </div>
                  <ul className="space-y-4">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-center text-secondary/90 hover:text-secondary transition-colors">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-white rounded-xl p-8 shadow-lg border border-secondary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 transform rotate-12 translate-x-1/3" />
          <div className="relative">
            <h3 className="text-2xl font-bold mb-6 text-primary">Future Expansion Plans</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {['Flexo Printing', 'Stitching', 'Extrusion Coating', 'Paper Coating'].map((item) => (
                <div key={item} className="flex items-center group">
                  <div className="bg-accent/10 p-2 rounded-lg">
                    <Wrench className="h-5 w-5 text-accent" />
                  </div>
                  <span className="ml-3 text-gray-700 group-hover:text-primary transition-colors">{item}</span>
                </div>
              ))}
            </div>
            <button className="mt-8 flex items-center text-accent hover:text-primary transition-colors group">
              Learn More About Our Expansion
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}