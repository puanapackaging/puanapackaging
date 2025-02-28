

// import React from 'react';
// import { ArrowRight, Mail, MapPin } from 'lucide-react';

// export default function Hero() {
//   return (
//     <div className="relative h-screen overflow-hidden flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 lg:px-16">
//       {/* Background Image */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: 'url("/landing3.webp")',
//         }}
//       />

//       {/* Main Content */}
//       <div className="relative max-w-4xl text-white space-y-6 px-4">
//         {/* Headline */}
//         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
//           Innovative & Sustainable{' '}
//           <span className="text-accent">Packaging Solutions</span>
//         </h1>

//         {/* Description Card */}
//         <div className="relative max-w-3xl mx-auto">
//           <div className="absolute inset-0 bg-black opacity-40 rounded-2xl shadow-lg"></div>
//           <p className="relative text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white p-4 sm:p-6 md:p-8 drop-shadow-md">
//             Transforming packaging with cutting-edge, cost-effective multilayer flexible solutions. 
//             Delivering excellence to meet the evolving needs of modern industries, while ensuring safety, hygiene, and sustainability.
//           </p>
//         </div>

//         {/* Call to Action Buttons */}
//         <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//           <button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-2xl flex items-center justify-center group transition-all duration-300 transform hover:scale-105 shadow-xl">
//             Explore Our Products
//             <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//           </button>
//           <button className="border-2  bg-secondary border-secondary text-black px-6 py-3 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 shadow-xl">
//             Learn More About Us
//           </button>
//         </div>
//       </div>

//       {/* Contact Information */}
//       <div className="absolute bottom-6 w-full text-white px-4">
//         <div className="flex flex-col sm:flex-row items-center justify-center text-sm sm:text-base space-y-3 sm:space-y-0 sm:space-x-6">
//           <div className="flex items-center space-x-2">
//             <Mail className="h-7 w-7 text-accent" />
//             <span className='text-lg'>puanaproducts@gmail.com</span>
//           </div>
//           <div className="flex items-center space-x-2 text-center">
//             <MapPin className="h-7 w-7 text-accent" />
//             <span className='text-lg'>B149-150 Eldeco SIDCUL Industrial Park, IIE SITARGANJ, Uttarakhand</span>
//           </div>
//         </div>
//       </div>
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
          backgroundImage: 'url("/landing3.webp")',
        }}
      />

      {/* Main Content */}
      <div className="relative max-w-4xl text-white space-y-4 sm:space-y-6 px-4">
        {/* Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
          Innovative & Sustainable{' '}
          <span className="text-accent">Packaging Solutions</span>
        </h1>

        {/* Description Card */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-black opacity-40 rounded-2xl shadow-lg"></div>
          <p className="relative text-sm sm:text-lg md:text-xl lg:text-2xl font-medium text-white p-4 sm:p-6 md:p-8 drop-shadow-md">
            Transforming packaging with cutting-edge, cost-effective multilayer flexible solutions. 
            Delivering excellence to meet the evolving needs of modern industries, while ensuring safety, hygiene, and sustainability.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-accent hover:bg-accent/90 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-2xl flex items-center justify-center group transition-all duration-300 transform hover:scale-105 shadow-xl">
            Explore Our Products
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 bg-secondary border-secondary text-black px-4 sm:px-6 py-2 sm:py-3 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 shadow-xl">
            Learn More About Us
          </button>
        </div>
      </div>

      {/* Contact Information */}
      <div className="absolute bottom-4 sm:bottom-6 w-full text-white px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center text-xs sm:text-sm space-y-2 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5 sm:h-7 sm:w-7 text-accent" />
            <span className='text-sm sm:text-lg'>puanaproducts@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2 text-center">
            <MapPin className="h-5 w-5 sm:h-7 sm:w-7 text-accent" />
            <span className='text-sm sm:text-lg'>B149-150 Eldeco SIDCUL Industrial Park, IIE SITARGANJ, Uttarakhand</span>
          </div>
        </div>
      </div>
    </div>
  );
}