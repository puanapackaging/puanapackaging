

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
        'Slitting cum Inspection Machine - Lapra',
        'Pouch Making Machine - Mamta Machinery',
        'Hot Air Generator System - Heat Max',
        'Compressors (2 Nos) - ELGI',
        'Handle Fixing Machine',
        'Core Cutting Machine'
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
        'Tensile Testing Machine - Presto',
        'Co-Efficient of Friction - Presto',
        'Hot Air Oven - Presto',
        'Tearing Strength Tester - Presto',
        'Bursting Strength Tester - Presto'
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
            <p className="text-gray-700 mb-6">The above list is for major machines/equipment. Apart from this, we have many more handling and measuring equipment. We also plan to add more machines like Flexo Printing, Stitching, Extrusion Coating, and Paper Coating in the immediate future. We are willing and capable of acquiring any machines to fulfill our customer requirements.</p>
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
         
          </div>
        </div>
      </div>
    </section>
  );
}

// import React from 'react';
// import { Printer, Wrench, FlaskRound as Flask, Factory, ArrowRight } from 'lucide-react';

// export default function Facilities() {
//   const machines = [
//     {
//       category: 'Production Machines',
//       icon: Factory,
//       image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//       items: [
//         'Rotogravure Printing (8 Color) - Lapra',
//         'Lamination Machine - Lapra',
//         'Slitting Machine - Lapra',
//         'Slitting cum Inspection Machine - Lapra',
//         'Pouch Making Machine - Mamta Machinery',
//         'Hot Air Generator System - Heat Max',
//         'Compressors (2 Nos) - ELGI',
//         'Handle Fixing Machine',
//         'Core Cutting Machine',
//       ],
//     },
//     {
//       category: 'Testing Equipment',
//       icon: Flask,
//       image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//       items: [
//         'Dart Impact Tester - Presto',
//         'MBTL Light Fastness Tester - Presto',
//         'Color Matching Cabinet - Presto',
//         'Tensile Testing Machine - Presto',
//         'Co-Efficient of Friction - Presto',
//         'Hot Air Oven - Presto',
//         'Tearing Strength Tester - Presto',
//         'Bursting Strength Tester - Presto',
//       ],
//     },
//   ];

//   return (
//     <section id="facilities" className="py-20 bg-gradient-to-br from-gray-900 via-black to-indigo-900 text-white relative overflow-hidden">
//       {/* Animated Background Particles */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="w-40 h-40 bg-accent/20 rounded-full absolute top-10 left-10 animate-float blur-3xl"></div>
//         <div className="w-56 h-56 bg-yellow-300/10 rounded-full absolute bottom-20 right-20 animate-float-delay blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <span className="text-accent font-extrabold text-xl sm:text-2xl md:text-3xl tracking-widest animate-glow">OUR CAPABILITIES</span>
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-yellow-300 animate-text-reveal">
//             Manufacturing Excellence
//           </h2>
//           <p className="text-lg sm:text-xl md:text-2xl mt-6 max-w-3xl mx-auto leading-relaxed drop-shadow-lg animate-fade-in-up">
//             Cutting-edge machinery and precision testing for unmatched quality and efficiency.
//           </p>
//         </div>

//         {/* Machines Grid */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {machines.map((section) => {
//             const IconComponent = section.icon;
//             return (
//               <div
//                 key={section.category}
//                 className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-black/30 backdrop-blur-lg border border-accent/30 transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,107,0,0.6)]"
//               >
//                 <div className="absolute inset-0">
//                   <img
//                     src={section.image}
//                     alt={section.category}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent animate-gradient-shift"></div>
//                 </div>
//                 <div className="relative p-8">
//                   <div className="flex items-center mb-6">
//                     <div className="bg-accent/30 p-3 rounded-full animate-glow-pulse">
//                       <IconComponent className="h-8 w-8 text-accent" />
//                     </div>
//                     <h3 className="text-2xl sm:text-3xl font-bold ml-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-yellow-300">
//                       {section.category}
//                     </h3>
//                   </div>
//                   <ul className="space-y-3">
//                     {section.items.map((item) => (
//                       <li
//                         key={item}
//                         className="flex items-center text-gray-300 text-sm sm:text-base group-hover:text-white transition-colors duration-300"
//                       >
//                         <span className="w-2 h-2 bg-accent rounded-full mr-3 animate-pulse"></span>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Future Expansion Section */}
//         <div className="mt-16 bg-gradient-to-br from-white/10 to-black/20 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-accent/30 relative overflow-hidden transform transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,107,0,0.5)]">
//           <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 transform rotate-12 translate-x-1/2 animate-pulse-slow"></div>
//           <div className="relative z-10">
//             <h3 className="text-2xl sm:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent to-yellow-300 animate-text-reveal">
//               Future Expansion
//             </h3>
//             <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
//               Beyond our current advanced machinery, we’re equipped with additional handling and measuring tools. Our roadmap includes adding Flexo Printing, Stitching, Extrusion Coating, and Paper Coating machines to meet evolving customer needs.
//             </p>
//             <div className="grid md:grid-cols-2 gap-6">
//               {['Flexo Printing', 'Stitching', 'Extrusion Coating', 'Paper Coating'].map((item) => (
//                 <div
//                   key={item}
//                   className="flex items-center group p-4 bg-accent/10 rounded-lg hover:bg-accent/20 transition-all duration-300"
//                 >
//                   <div className="bg-accent/30 p-2 rounded-full animate-glow-pulse">
//                     <Wrench className="h-5 w-5 text-accent" />
//                   </div>
//                   <span className="ml-3 text-gray-300 text-sm sm:text-base group-hover:text-white transition-colors">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
