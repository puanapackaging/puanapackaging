// import React from 'react';
// import { ArrowRight, Package2 } from 'lucide-react';

// export default function Hero() {
//   return (
//     <div className="relative h-screen">
//       <div 
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-accent/95" />
//       </div>
      
//       <div className="relative container mx-auto px-4 h-full flex items-center">
//         <div className="max-w-3xl text-white">
         
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
//             Innovative & Sustainable{' '}
//             <span className="text-secondary">Packaging Solutions</span>
//           </h1>
//           <p className="text-xl mb-8 text-secondary/90 max-w-2xl">
//             Delivering high-quality, cost-effective multilayer flexible packaging solutions that meet the diverse needs of modern industries.
//           </p>
//           <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//             <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg flex items-center justify-center group transition-all duration-300 transform hover:translate-x-2">
//               Explore Our Products
//               <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button className="border-2 border-secondary text-secondary px-8 py-4 rounded-lg hover:bg-secondary hover:text-primary transition-all duration-300">
//               Learn More About Us
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent h-32" />
//     </div>
//   );
// }


// import React from 'react';
// import { ArrowRight, Package2, Mail, MapPin } from 'lucide-react';

// export default function Hero() {
//   return (
//     <div className="relative h-screen overflow-hidden">
//       {/* Background Image */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80" />
//       </div>
      
//       {/* Main Content */}
//       <div className="relative container mx-auto px-4 h-full flex items-center">
//         <div className="max-w-3xl text-white space-y-6">
         
          
//           {/* Headline */}
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
//             Innovative & Sustainable{' '}
//             <span className="text-secondary">Packaging Solutions</span>
//           </h1>
          
//           {/* Description */}
//           <p className="text-2xl mb-8 text-white max-w-3xl">
//             Transforming packaging with cutting-edge, cost-effective multilayer flexible solutions. 
//             Delivering excellence to meet the evolving needs of modern industries, while ensuring safety, hygiene, and sustainability.
//           </p>
          
//           {/* Call to Action Buttons */}
//           <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//             <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg flex items-center justify-center group transition-all duration-300 transform hover:translate-x-2">
//               Explore Our Products
//               <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button className="border-2 border-secondary text-secondary px-8 py-4 rounded-lg hover:bg-secondary hover:text-primary transition-all duration-300">
//               Learn More About Us
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Contact Information */}
//       <div className="absolute bottom-10 left-0 right-0 text-center text-white">
//         <div className="flex justify-center text-xl space-x-6">
//           <div className="flex items-center space-x-2">
//             <Mail className="h-5 w-5 text-secondary" />
//             <span>puanaproducts@gmail.com</span>
//           </div>
//           <div className="flex items-center  space-x-2">
//             <MapPin className="h-5 w-5 text-secondary" />
//             <span>B149-150 Eldeco SIDCUL Industrial Park, IIE SITARGANJ, Uttarakhand</span>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Gradient */}
//       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent h-32" />
//     </div>
//   );
// }


import React from 'react';
import { ArrowRight, Mail, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 lg:px-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80" />
      </div>
      
      {/* Main Content */}
      <div className="relative max-w-4xl text-white space-y-6">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Innovative & Sustainable{' '}
          <span className="text-secondary">Packaging Solutions</span>
        </h1>
        
        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
          Transforming packaging with cutting-edge, cost-effective multilayer flexible solutions. 
          Delivering excellence to meet the evolving needs of modern industries, while ensuring safety, hygiene, and sustainability.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg flex items-center justify-center group transition-all duration-300 transform hover:translate-x-2">
            Explore Our Products
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-secondary text-secondary px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-secondary hover:text-primary transition-all duration-300">
            Learn More About Us
          </button>
        </div>
      </div>

      {/* Contact Information */}
      <div className="absolute bottom-10 w-full text-white px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center text-base sm:text-lg space-y-3 sm:space-y-0 sm:space-x-6">
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5 text-secondary" />
            <span>puanaproducts@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-secondary" />
            <span className="text-center">B149-150 Eldeco SIDCUL Industrial Park, IIE SITARGANJ, Uttarakhand</span>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent h-32" />
    </div>
  );
}

