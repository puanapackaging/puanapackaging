// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowRight, Mail, MapPin } from 'lucide-react';


// interface HeroProps {}

// const Hero: React.FC<HeroProps> = () => {
//   const [currentImage, setCurrentImage] = useState<number>(0);
//   const navigate = useNavigate();
//   const images: string[] = [
//     '/automated-packaging-line-efficiency-production (1).webp',
//     '/landingmain.webp',
//     '/img10.webp',
//     '/2065.webp',
//     '/side-view-male-barista-coffee-shop.webp'
//   ];

//   // Effect to change image every 10 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentImage((prev: number) => (prev + 1) % images.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [images.length]);

//   // Handle dot click with typed parameter
//   const handleDotClick = (index: number): void => {
//     setCurrentImage(index);
//   };

//   // Handle navigation
//   const handleExploreProducts = (): void => {
//     navigate('/product');
//   };

//   const handleLearnMore = (): void => {
//     navigate('/about');
//   };

//   return (
//     <div className="relative h-screen overflow-hidden flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 lg:px-16">
//       {/* Background Image */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
//         style={{
//           backgroundImage: `url(${images[currentImage]})`,
//         }}
//       />

//       {/* Main Content */}
//       <div className="relative max-w-4xl text-white space-y-4 sm:space-y-6 px-4">
//         {/* Headline */}
//         <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
//           Innovative & Sustainable{' '}
//           <span className="text-accent"> Flexible Packaging Solutions</span>
//         </h1>

//         {/* Description Card */}
//         <div className="relative max-w-3xl mx-auto">
//           <div className="absolute inset-0 bg-black opacity-40 rounded-2xl shadow-lg"></div>
//           <p className="relative text-sm sm:text-lg md:text-xl lg:text-2xl font-medium text-white p-4 sm:p-6 md:p-8 drop-shadow-md">
//             Transforming packaging with cutting-edge, cost-effective multilayer flexible solutions. 
//             Delivering excellence to meet the evolving needs of modern industries, while ensuring safety, hygiene, and sustainability.
//           </p>
//         </div>

//         {/* Call to Action Buttons */}
//         <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//           <button 
//             onClick={handleExploreProducts}
//             className="bg-accent hover:bg-accent/90 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-2xl flex items-center justify-center group transition-all duration-300 transform hover:scale-105 shadow-xl"
//           >
//             Explore Our Products
//             <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
//           </button>
//           <button 
//             onClick={handleLearnMore}
//             className="border-2 bg-secondary border-secondary text-black px-4 sm:px-6 py-2 sm:py-3 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 shadow-xl"
//           >
//             Learn More About Us
//           </button>
//         </div>

//         {/* Dot Navigation */}
//         <div className="flex justify-center space-x-2 mt-4">
//           {images.map((_, index: number) => (
//             <button
//               key={index}
//               onClick={() => handleDotClick(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 currentImage === index 
//                   ? 'bg-accent scale-125' 
//                   : 'bg-white/50 hover:bg-white/80'
//               }`}
//             >
//               <span className="sr-only">{`Slide ${index + 1}`}</span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Contact Information */}
//       <div className="absolute bottom-4 sm:bottom-6 w-full text-white px-4">
//         <div className="flex flex-col sm:flex-row items-center justify-center text-xs sm:text-sm space-y-2 sm:space-y-0 sm:space-x-4">
//           <div className="flex items-center space-x-2">
//             <Mail className="h-5 w-5 sm:h-7 sm:w-7 text-accent" />
//             <span className='text-sm sm:text-lg'>sales@puanapackaging.com</span>
//           </div>
//           <div className="flex items-center space-x-2 text-center">
//             <MapPin className="h-5 w-5 sm:h-7 sm:w-7 text-accent" />
//             <span className='text-sm sm:text-lg'>B149-150 Eldeco SIDCUL Industrial Park, IIE SITARGANJ, Uttarakhand</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowRight, Mail, MapPin } from 'lucide-react';

// interface HeroProps {}

// const Hero: React.FC<HeroProps> = () => {
//   const [currentImage, setCurrentImage] = useState<number>(0);
//   const navigate = useNavigate();
//   const images: string[] = [
//     '/automated-packaging-line-efficiency-production (1).webp',
//     '/landingmain.webp',
//     '/img10.webp',
//     '/2065.webp',
//     '/side-view-male-barista-coffee-shop.webp',
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentImage((prev: number) => (prev + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [images.length]);

//   const handleDotClick = (index: number): void => {
//     setCurrentImage(index);
//   };

//   const handleExploreProducts = (): void => {
//     navigate('/product');
//   };

//   const handleLearnMore = (): void => {
//     navigate('/about');
//   };

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
//       {/* Background Image with Improved Visibility */}
//       <div
//         className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
//         style={{
//           backgroundImage: `url(${images[currentImage]})`,
//           opacity: 0.85, // Reduced opacity for better visibility
//           zIndex: 0,
//         }}
//       >
//         <div className="absolute inset-0 bg-black/30"></div> {/* Subtle overlay for contrast */}
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 flex flex-col items-center space-y-8 backdrop-blur-sm bg-white/10 rounded-3xl shadow-2xl border border-white/20">
//         {/* Headline */}
//         <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-xl animate-fade-in-up">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-white">
//             Innovative & Sustainable
//           </span>
//           <br />
//           <span className="text-accent">Flexible Packaging Solutions</span>
//         </h1>

//         {/* Description */}
//         <div className="relative max-w-3xl mx-auto">
//           <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white p-4 sm:p-6 drop-shadow-md leading-relaxed">
//             Transforming packaging with cutting-edge, cost-effective multilayer flexible solutions. 
//             Delivering excellence to meet modern industry needs with a focus on{' '}
//             <span className="text-accent font-semibold">safety, hygiene, and sustainability</span>.
//           </p>
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-lg">
//           <button
//             onClick={handleExploreProducts}
//             className="relative bg-accent text-white px-6 py-3 rounded-full font-semibold text-base sm:text-lg group overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-accent/50 w-full sm:w-auto"
//           >
//             <span className="relative z-10 flex items-center justify-center">
//               Explore Our Products
//               <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
//             </span>
//             <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </button>
//           <button
//             onClick={handleLearnMore}
//             className="relative bg-transparent border-2 border-accent text-accent px-6 py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-accent hover:text-white transition-all duration-300 shadow-xl w-full sm:w-auto"
//           >
//             Learn More About Us
//           </button>
//         </div>

//         {/* Dot Navigation */}
//         <div className="flex justify-center gap-3 mt-6">
//           {images.map((_, index: number) => (
//             <button
//               key={index}
//               onClick={() => handleDotClick(index)}
//               className={`relative w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
//                 currentImage === index
//                   ? 'bg-accent scale-125 ring-2 ring-accent/50'
//                   : 'bg-white/50 hover:bg-white/80 hover:scale-110'
//               }`}
//             >
//               <span className="sr-only">{`Slide ${index + 1}`}</span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Contact Section */}
//       <div className="relative z-20 w-full px-4 sm:px-6 md:px-12 lg:px-16 mt-8 sm:mt-12 bottom-0 pb-6 sm:pb-8">
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white text-xs sm:text-sm md:text-base">
//           <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md rounded-full px-3 py-2 shadow-lg">
//             <Mail className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-accent" />
//             <span>sales@puanapackaging.com</span>
//           </div>
//           <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md rounded-full px-3 py-2 shadow-lg text-center">
//             <MapPin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-accent" />
//             <span>B149-150 Eldeco SIDCUL Industrial Park, IIE SITARGANJ, Uttarakhand</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Mail, MapPin } from 'lucide-react';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const navigate = useNavigate();
  const images: string[] = [
    '/automated-packaging-line-efficiency-production (1).webp',
    '/landingmain.webp',
    '/img10.webp',
    '/2065.webp',
    '/side-view-male-barista-coffee-shop.webp',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev: number) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const handleDotClick = (index: number): void => {
    setCurrentImage(index);
  };

  const handleExploreProducts = (): void => {
    navigate('/product');
  };

  const handleLearnMore = (): void => {
    navigate('/about');
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between bg-gradient-to-br from-gray-900 via-black to-indigo-900">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          opacity: 0.9,
          zIndex: 0,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent animate-gradient-shift"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pt-16 sm:pt-20 md:pt-24 flex flex-col items-center text-center">
        {/* Headline with Staggered Animation */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-2xl">
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-accent to-yellow-300 animate-text-reveal">
            Innovative Packaging
          </span>
          <span className="block text-accent animate-text-reveal-delay">
            Sustainable Solutions
          </span>
        </h1>

        {/* Description with Gradient Border */}
        <div className="relative max-w-2xl mx-auto mt-6 sm:mt-8">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-transparent rounded-xl blur-md animate-pulse-slow"></div>
          <p className="relative text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white/90 px-4 py-6 sm:p-8 bg-black/20 rounded-xl shadow-lg border border-white/10">
            Revolutionizing packaging with advanced multilayer flexible solutions—cost-effective, safe, and eco-friendly for modern industries.
          </p>
        </div>

        {/* CTA Buttons with Neon Glow */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-10 w-full max-w-md">
          <button
            onClick={handleExploreProducts}
            className="relative bg-accent text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg group overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#FF6B00]"
          >
            <span className="relative z-10 flex items-center justify-center">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button
            onClick={handleLearnMore}
            className="relative bg-transparent border-2 border-accent text-accent px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_#FF6B00]"
          >
            Learn More
          </button>
        </div>

        {/* Sleek Carousel Indicator */}
        <div className="flex justify-center gap-2 mt-10">
          {images.map((_, index: number) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`relative w-12 h-1 sm:h-2 rounded-full transition-all duration-500 ${
                currentImage === index
                  ? 'bg-accent scale-125 shadow-[0_0_10px_#FF6B00]'
                  : 'bg-white/30 hover:bg-white/60'
              }`}
            >
              <span className="sr-only">{`Slide ${index + 1}`}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Contact Section with Floating Cards */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-16 pb-6 sm:pb-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white text-xs sm:text-sm md:text-base">
          <div className="flex items-center gap-2 bg-gradient-to-r from-black/50 to-gray-800/50 rounded-full px-4 py-2 shadow-lg hover:shadow-[0_0_10px_#FF6B00] transition-all duration-300">
            <Mail className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-accent animate-pulse" />
            <span>sales@puanapackaging.com</span>
          </div>
          <div className="flex items-center gap-2 bg-gradient-to-r from-black/50 to-gray-800/50 rounded-full px-4 py-2 shadow-lg hover:shadow-[0_0_10px_#FF6B00] transition-all duration-300 text-center">
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-accent animate-pulse" />
            <span>B149-150 Eldeco SIDCUL Industrial Park, IIE SITARGANJ, Uttarakhand</span>
          </div>
        </div>
      </div>

      {/* Decorative Floating Particles */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-accent/20 rounded-full filter blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-300/10 rounded-full filter blur-3xl animate-float-delay"></div>
    </div>
  );
};

export default Hero;