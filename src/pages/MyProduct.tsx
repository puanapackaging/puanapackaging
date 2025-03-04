

// import React, { useRef, useEffect } from 'react';
// import { Package, ShieldCheck, Zap, ArrowRight, ArrowLeft, Leaf, Globe2, Star, Layers, LucideIcon } from 'lucide-react';
// import Footer from '../components/Footer';
// import Header from '../components/Header';

// // Define product interface
// interface Product {
//   title: string;
//   icon: LucideIcon;
//   description: string;
//   image: string;
// }

// // Define props interface (empty as no props are passed)
// interface MyProductsProps {}

// const MyProducts: React.FC<MyProductsProps> = () => {
//   const products: Product[] = [
//     {
//       title: 'Multilayer Flexible Packaging',
//       icon: Package,
//       description: 'Advanced multilayer packaging solutions for superior protection.',
//       image: '/new/food-2.jpg',
//     },
//     {
//       title: 'Flexible Product Packaging',
//       icon: ShieldCheck,
//       description: 'Eco-friendly paper-based packaging options.',
//       image: 'new/img4.jpg',
//     },
//     {
//       title: 'Food and Beverage Packaging',
//       icon: Zap,
//       description: 'Specialized packaging solutions for the food industry.',
//       image: '/food_foil 2.1.jpg',
//     },
//     {
//       title: 'Custom Packaging',
//       icon: Package,
//       description: 'Tailor-made solutions for unique packaging needs.',
//       image: 'new/img3.jpg',
//     },
//     {
//       title: 'Sustainable Solutions',
//       icon: ShieldCheck,
//       description: 'Environmentally friendly and sustainable packaging.',
//       image: 'new/diaper.avif',
//     },
//     {
//       title: 'Innovative Designs',
//       icon: Zap,
//       description: 'Creative packaging designs to enhance brand identity.',
//       image: '/new/dog-food.jpg',
//     },
//   ];

//   const sliderRef = useRef<HTMLDivElement>(null);

//   // Automatic Scrolling Logic
//   useEffect(() => {
//     const scrollInterval = setInterval(() => {
//       if (sliderRef.current) {
//         const maxScrollLeft: number = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
//         if (sliderRef.current.scrollLeft >= maxScrollLeft) {
//           sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
//         } else {
//           sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
//         }
//       }
//     }, 3000); // Scroll every 3 seconds
//     return () => clearInterval(scrollInterval);
//   }, []);

//   // Manual Scroll Controls
//   const scrollLeft = (): void => {
//     if (sliderRef.current) {
//       sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
//     }
//   };

//   const scrollRight = (): void => {
//     if (sliderRef.current) {
//       sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <section id="products" className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden flex-grow">
//         {/* Banner Section */}
//         <div
//           className="h-80 md:h-96 w-full bg-cover bg-center flex items-center justify-center text-white relative bg-no-repeat"
//           style={{ 
//             backgroundImage: "url('/food_foil 2.1.jpg')",
//             backgroundSize: 'cover', // Ensures image covers the entire area
//             backgroundPosition: 'center' // Centers the image
//           }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
//           <div className="z-10 text-center px-4">
//             <h1 className="text-4xl md:text-7xl font-extrabold text-accent drop-shadow-lg animate-fade-in">
//               Discover Our Products
//             </h1>
//             <p className="mt-4 text-lg font-semibold md:text-2xl max-w-3xl mx-auto font-light">
//               Cutting-edge packaging solutions crafted to protect, inspire, and sustain.
//             </p>
          
//           </div>
//         </div>

//         <div className="container mx-auto px-4">
//           {/* Intro Section */}
//           <div className="text-center mt-12 mb-16">
//             <span className="text-accent font-semibold text-xl md:text-2xl mb-4 block animate-slide-up tracking-wide">
//               OUR SOLUTIONS
//             </span>
//             <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
//               Explore Our Diverse Product Range
//             </h2>
//             <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
//               Step into a world of innovative packaging where quality meets creativity. Our meticulously designed solutions cater to every industry need, blending sustainability, durability, and standout aesthetics to elevate your products.
//             </p>
//           </div>

//           {/* Product Slider */}
//           <div className="relative">
//             <div
//               className="flex space-x-6 overflow-x-auto no-scrollbar snap-x snap-mandatory py-6 px-2"
//               ref={sliderRef}
//               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//             >
//               {products.map((product: Product) => (
//                 <div
//                   key={product.title}
//                   className="group relative w-72 md:w-80 flex-shrink-0 snap-center overflow-hidden rounded-2xl border border-secondary hover:shadow-2xl transition-all duration-500 bg-white"
//                 >
//                   <div className="relative overflow-hidden">
//                     <img
//                       src={product.image}
//                       alt={product.title}
//                       className="w-full h-48 md:h-60 object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
//                       <span className="text-white p-4 text-sm font-semibold">{product.title}</span>
//                     </div>
//                   </div>
//                   <div className="p-6">
//                     <product.icon className="h-10 w-10 text-accent mb-4" />
//                     <h3 className="text-lg md:text-xl font-bold mb-2 text-primary">{product.title}</h3>
//                     <p className="text-gray-600 text-sm md:text-base mb-4">{product.description}</p>
//                     <button className="flex items-center text-accent font-semibold hover:text-primary transition-colors group-hover:underline">
//                       Learn More <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Navigation Buttons */}
//             <button
//               onClick={scrollLeft}
//               className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-accent/80 p-3 md:p-4 rounded-full text-white hover:bg-accent transition-all shadow-lg hover:scale-110"
//             >
//               <ArrowLeft className="h-5 w-5 md:h-6 md:w-6" />
//             </button>
//             <button
//               onClick={scrollRight}
//               className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-accent/80 p-3 md:p-4 rounded-full text-white hover:bg-accent transition-all shadow-lg hover:scale-110"
//             >
//               <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
//             </button>
//           </div>

//           {/* Why Our Products Stand Out */}
//           <div className="mt-20 text-center">
//             <h3 className="text-3xl md:text-4xl font-bold text-primary mb-12 animate-slide-up">What Sets Us Apart</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
//               <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-accent">
//                 <ShieldCheck className="h-12 w-12 text-accent mx-auto mb-4" />
//                 <h4 className="text-xl font-semibold text-primary mb-2">Unmatched Durability</h4>
//                 <p className="text-gray-600">Built to endure extreme conditions, ensuring your products stay safe and intact.</p>
//               </div>
//               <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-accent">
//                 <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
//                 <h4 className="text-xl font-semibold text-primary mb-2">Cutting-Edge Tech</h4>
//                 <p className="text-gray-600">Powered by advanced innovations for smarter, more efficient packaging.</p>
//               </div>
//               <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-accent">
//                 <Globe2 className="h-12 w-12 text-accent mx-auto mb-4" />
//                 <h4 className="text-xl font-semibold text-primary mb-2">Global Standards</h4>
//                 <p className="text-gray-600">Compliant with international benchmarks for quality and sustainability.</p>
//               </div>
//               <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-accent">
//                 <Star className="h-12 w-12 text-accent mx-auto mb-4" />
//                 <h4 className="text-xl font-semibold text-primary mb-2">Standout Designs</h4>
//                 <p className="text-gray-600">Visually stunning solutions that make your brand shine on every shelf.</p>
//               </div>
//             </div>
//           </div>

//           {/* Additional Section: Our Commitment */}
//           <div className="mt-20 bg-gradient-to-r from-primary to-accent text-white py-12 px-6 rounded-2xl shadow-2xl text-center">
//             <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment to Excellence</h3>
//             <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
//               At Puana Packaging, we’re more than just a provider—we’re your partner in progress. Our products are designed with precision, passion, and a promise to deliver unparalleled quality, sustainability, and innovation. Let’s shape the future of packaging together.
//             </p>
//             <button className="mt-8 px-8 py-3 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-all shadow-md">
//               Get Started Today
//             </button>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default MyProducts;


import React, { useRef, useEffect } from 'react';
import { Package, ShieldCheck, Zap, ArrowRight, ArrowLeft, Globe2, Star, LucideIcon } from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';

// Define product interface
interface Product {
  title: string;
  icon: LucideIcon;
  description: string;
  image: string;
}

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

// Define props interface (empty as no props are passed)
interface MyProductsProps {}

// Rename component to match the file (assuming the file is MyProducts.tsx)
const MyProducts: React.FC<MyProductsProps> = () => {
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
      image: '/new/img4.jpg',
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
      image: '/new/img3.jpg',
    },
    {
      title: 'Sustainable Solutions',
      icon: ShieldCheck,
      description: 'Environmentally friendly and sustainable packaging.',
      image: '/new/diaper.avif',
    },
    {
      title: 'Innovative Designs',
      icon: Zap,
      description: 'Creative packaging designs to enhance brand identity.',
      image: '/new/dog-food.jpg',
    },
  ];

  const features: Feature[] = [
    {
      icon: ShieldCheck,
      title: 'Unmatched Durability',
      description: 'Built to endure extreme conditions, ensuring your products stay safe and intact.',
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Tech',
      description: 'Powered by advanced innovations for smarter, more efficient packaging.',
    },
    {
      icon: Globe2,
      title: 'Global Standards',
      description: 'Compliant with international benchmarks for quality and sustainability.',
    },
    {
      icon: Star,
      title: 'Standout Designs',
      description: 'Visually stunning solutions that make your brand shine on every shelf.',
    },
  ];

  const sliderRef = useRef<HTMLDivElement>(null);

  // Automatic Scrolling Logic
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (sliderRef.current) {
        const maxScrollLeft: number = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        if (sliderRef.current.scrollLeft >= maxScrollLeft) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 3000); // Scroll every 3 seconds
    return () => clearInterval(scrollInterval);
  }, []);

  // Manual Scroll Controls
  const scrollLeft = (): void => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = (): void => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section id="products" className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden flex-grow">
        {/* Banner Section */}
        <div
          className="h-80 md:h-96 w-full bg-cover bg-center flex items-center justify-center text-white relative bg-no-repeat"
          style={{
            backgroundImage: "url('/new/roll.avif')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" aria-hidden="true" />
          <div className="z-10 text-center px-4">
            <h1 className="text-4xl md:text-7xl font-extrabold text-accent drop-shadow-lg animate-fade-in">
              Discover Our Products
            </h1>
            <p className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto font-semibold">
              Cutting-edge packaging solutions crafted to protect, inspire, and sustain.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {/* Intro Section */}
          <div className="text-center mt-12 mb-16">
            <span className="text-accent font-semibold text-xl md:text-2xl mb-4 block animate-slide-up tracking-wide">
              OUR SOLUTIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Explore Our Diverse Product Range
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Step into a world of innovative packaging where quality meets creativity. Our meticulously designed solutions cater to every industry need, blending sustainability, durability, and standout aesthetics to elevate your products.
            </p>
          </div>

          {/* Product Slider */}
          <div className="relative">
            <div
              ref={sliderRef}
              className="flex space-x-6 overflow-x-auto no-scrollbar snap-x snap-mandatory py-6 px-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {products.map((product: Product) => (
                <div
                  key={product.title}
                  className="group relative w-72 md:w-80 flex-shrink-0 snap-center overflow-hidden rounded-2xl border border-secondary hover:shadow-2xl transition-all duration-500 bg-white"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 md:h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        e.currentTarget.src = '/fallback-image.jpg'; // Optional: Add fallback image
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <span className="text-white p-4 text-sm font-semibold">{product.title}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <product.icon className="h-10 w-10 text-accent mb-4" aria-hidden="true" />
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-primary">{product.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base mb-4">{product.description}</p>
                    <button className="flex items-center text-accent font-semibold hover:text-primary transition-colors group-hover:underline">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={scrollLeft}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-accent/80 p-3 md:p-4 rounded-full text-white hover:bg-accent transition-all shadow-lg hover:scale-110"
              aria-label="Scroll Left"
            >
              <ArrowLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-accent/80 p-3 md:p-4 rounded-full text-white hover:bg-accent transition-all shadow-lg hover:scale-110"
              aria-label="Scroll Right"
            >
              <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          </div>

          {/* Why Our Products Stand Out */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-12 animate-slide-up">
              What Sets Us Apart
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-accent"
                >
                  <feature.icon className="h-12 w-12 text-accent mx-auto mb-4" aria-hidden="true" />
                  <h4 className="text-xl font-semibold text-primary mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Section: Our Commitment */}
          <div className="mt-20 bg-gradient-to-r from-primary to-accent text-white py-12 px-6 rounded-2xl shadow-2xl text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment to Excellence</h3>
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              At Puana Packaging, we’re more than just a provider—we’re your partner in progress. Our products are designed with precision, passion, and a promise to deliver unparalleled quality, sustainability, and innovation. Let’s shape the future of packaging together.
            </p>
            <button className="mt-8 px-8 py-3 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-all shadow-md">
              Get Started Today
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MyProducts;