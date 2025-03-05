

import React, { useRef, useEffect } from 'react';
import { Package, ShieldCheck, Zap, ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Product {
  title: string;
  icon: React.ElementType;
  description: string;
  image: string;
}

const Products: React.FC = () => {
  const navigate = useNavigate();
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const products: Product[] = [
    {
      title: 'Multilayer Flexible Packaging',
      icon: Package,
      description: 'Advanced multilayer packaging solutions for superior protection.',
      image: '/new/food-2.jpg',
    },
    {
      title: 'Flexible Product Packaging',
      icon: ShieldCheck,
      description: 'Eco-friendly paper-based packaging options.',
      image: 'new/img4.jpg',
    },
    {
      title: 'Food and Beverage Packaging',
      icon: Zap,
      description: 'Specialized packaging solutions for the food industry.',
      image: '/food_foil 2.1.jpg',
    },
    {
      title: 'Custom Packaging',
      icon: Package,
      description: 'Tailor-made solutions for unique packaging needs.',
      image: 'new/img3.jpg',
    },
    {
      title: 'Sustainable Solutions',
      icon: ShieldCheck,
      description: 'Environmentally friendly and sustainable packaging.',
      image: 'new/diaper.avif',
    },
    {
      title: 'Innovative Designs',
      icon: Zap,
      description: 'Creative packaging designs to enhance brand identity.',
      image: '/new/dog-food.jpg',
    },
  ];

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (sliderRef.current) {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        if (sliderRef.current.scrollLeft >= maxScrollLeft) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(scrollInterval);
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    navigate('/product');
  };

  return (
    <section id="products" className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold mb-2 block">OUR SOLUTIONS</span>
          <h2 className="text-4xl font-bold mb-6 text-primary">Our Product Range</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover our comprehensive range of flexible packaging solutions designed to meet the diverse needs of modern industries.
          </p>
        </div>

        <div
          className="flex space-x-8 overflow-x-auto no-scrollbar"
          ref={sliderRef}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div
              key={product.title}
              className="group relative w-80 flex-shrink-0 overflow-hidden rounded-xl border border-secondary hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-primary">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <button onClick={handleLearnMore} className="text-accent hover:text-primary">Learn More</button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollLeft}
          className="absolute left-4 top-2/3 transform -translate-y-1/2 bg-accent/50 p-3 rounded-full text-white hover:bg-accent transition-all"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-4 top-2/3 transform -translate-y-1/2 bg-accent/50 p-3 rounded-full text-white hover:bg-accent transition-all"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default Products;

// import React, { useRef, useEffect } from 'react';
// import { Package, ShieldCheck, Zap, ArrowRight, ArrowLeft } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// interface Product {
//   title: string;
//   icon: React.ElementType;
//   description: string;
//   image: string;
// }

// const Products: React.FC = () => {
//   const navigate = useNavigate();
//   const sliderRef = useRef<HTMLDivElement | null>(null);

//   const products: Product[] = [
//     {
//       title: 'Multilayer Flexible Packaging',
//       icon: Package,
//       description: 'Advanced multilayer solutions for ultimate protection.',
//       image: '/new/food-2.jpg',
//     },
//     {
//       title: 'Flexible Product Packaging',
//       icon: ShieldCheck,
//       description: 'Eco-friendly paper-based packaging.',
//       image: '/new/img4.jpg',
//     },
//     {
//       title: 'Food & Beverage Packaging',
//       icon: Zap,
//       description: 'Tailored solutions for the food industry.',
//       image: '/food_foil 2.1.jpg',
//     },
//     {
//       title: 'Custom Packaging',
//       icon: Package,
//       description: 'Bespoke designs for unique needs.',
//       image: '/new/img3.jpg',
//     },
//     {
//       title: 'Sustainable Solutions',
//       icon: ShieldCheck,
//       description: 'Green packaging for a better planet.',
//       image: '/new/diaper.avif',
//     },
//     {
//       title: 'Innovative Designs',
//       icon: Zap,
//       description: 'Creative packaging to elevate your brand.',
//       image: '/new/dog-food.jpg',
//     },
//   ];

//   useEffect(() => {
//     const scrollInterval = setInterval(() => {
//       if (sliderRef.current) {
//         const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
//         if (sliderRef.current.scrollLeft >= maxScrollLeft) {
//           sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
//         } else {
//           sliderRef.current.scrollBy({ left: 350, behavior: 'smooth' });
//         }
//       }
//     }, 3000);
//     return () => clearInterval(scrollInterval);
//   }, []);

//   const scrollLeft = () => {
//     if (sliderRef.current) {
//       sliderRef.current.scrollBy({ left: -350, behavior: 'smooth' });
//     }
//   };

//   const scrollRight = () => {
//     if (sliderRef.current) {
//       sliderRef.current.scrollBy({ left: 350, behavior: 'smooth' });
//     }
//   };

//   const handleLearnMore = () => {
//     navigate('/product');
//   };

//   return (
//     <section id="products" className="py-16 bg-gradient-to-br from-gray-900 via-black to-indigo-900 text-white relative overflow-hidden">
//       {/* Animated Background Particles */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="w-32 h-32 bg-accent/20 rounded-full absolute top-10 left-20 animate-float blur-3xl"></div>
//         <div className="w-48 h-48 bg-yellow-300/10 rounded-full absolute bottom-10 right-20 animate-float-delay blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <span className="text-accent font-extrabold text-xl sm:text-2xl md:text-3xl tracking-wider animate-glow">OUR SOLUTIONS</span>
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-yellow-300 animate-text-reveal">
//             Product Range
//           </h2>
//           <p className="text-lg sm:text-xl md:text-2xl mt-6 max-w-3xl mx-auto leading-relaxed drop-shadow-lg animate-fade-in-up">
//             Explore our cutting-edge flexible packaging solutions designed for modern industries.
//           </p>
//         </div>

//         {/* Carousel */}
//         <div className="relative">
//           <div
//             className="flex space-x-6 overflow-x-auto no-scrollbar snap-x snap-mandatory py-4"
//             ref={sliderRef}
//             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             {products.map((product) => (
//               <div
//                 key={product.title}
//                 className="group relative w-80 sm:w-96 flex-shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-black/30 backdrop-blur-lg border border-accent/30 snap-center transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,107,0,0.6)]"
//               >
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="p-6">
//                   <div className="flex items-center mb-4">
//                     <product.icon className="h-8 w-8 text-accent mr-3 animate-pulse" />
//                     <h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-yellow-300">
//                       {product.title}
//                     </h3>
//                   </div>
//                   <p className="text-gray-300 text-sm sm:text-base mb-4">{product.description}</p>
//                   <button
//                     onClick={handleLearnMore}
//                     className="relative flex items-center text-accent font-semibold px-4 py-2 rounded-full bg-accent/20 hover:bg-accent hover:text-white transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,107,0,0.4)]"
//                   >
//                     Learn More
//                     <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                 </div>
//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               </div>
//             ))}
//           </div>

//           {/* Navigation Buttons */}
//           <button
//             onClick={scrollLeft}
//             className="absolute left-0 sm:left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-accent to-orange-500 p-3 sm:p-4 rounded-full text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(255,107,0,0.7)]"
//           >
//             <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
//           </button>
//           <button
//             onClick={scrollRight}
//             className="absolute right-0 sm:right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-accent to-orange-500 p-3 sm:p-4 rounded-full text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(255,107,0,0.7)]"
//           >
//             <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;
