// // import React from 'react';
// // import { Star, Award, Shield, ThumbsUp } from 'lucide-react';

// // export default function Clients() {
// //   const stats = [
// //     { icon: Star, value: '100+', label: 'Active Clients' },
// //     { icon: Award, value: '15+', label: 'Years Experience' },
// //     { icon: Shield, value: '500+', label: 'Projects Completed' },
// //     { icon: ThumbsUp, value: '99%', label: 'Client Satisfaction' }
// //   ];

// //   const clients = [
// //     'Lancer Food Products',
// //     'Ganga Dairy',
// //     'Godhan Masala Foods Limited',
// //     'N G Food India',
// //     'DSG Paper Private Limited',
// //     'Damyaa (P.J) Foods Pvt Ltd',
// //     'Raghusha Agrotech Pvt Ltd',
// //     'Utkarsh Food Products',
// //     'Satia Industries Limited'
// //   ];

// //   const testimonials = [
// //     {
// //       name: 'Client Success Story',
// //       role: 'Food Industry',
// //       content: 'Outstanding quality and service. Their packaging solutions have significantly improved our product presentation.',
// //       image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
// //     },
// //     {
// //       name: 'Partner Testimonial',
// //       role: 'Beverage Sector',
// //       content: 'Innovative solutions that have helped us reduce costs while maintaining premium quality.',
// //       image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
// //     }
// //   ];

// //   return (
// //     <section id="clients" className="py-20 bg-white">
// //       <div className="container mx-auto px-4">
// //         <div className="text-center mb-16">
// //           <span className="text-accent font-semibold mb-2 block">OUR CLIENTS</span>
// //           <h2 className="text-4xl font-bold mb-6 text-primary">Trusted By Leading Brands</h2>
// //           <p className="text-lg text-gray-700 max-w-2xl mx-auto">
// //             Partnering with industry leaders to deliver excellence in packaging solutions that drive success
// //           </p>
// //         </div>

// //         <div className="grid md:grid-cols-4 gap-8 mb-16">
// //           {stats.map(({ icon: Icon, value, label }) => (
// //             <div key={label} className="text-center p-6 bg-secondary/10 rounded-xl border border-secondary hover:shadow-lg transition-all duration-300">
// //               <Icon className="h-8 w-8 text-accent mx-auto mb-4" />
// //               <div className="text-3xl font-bold text-primary mb-2">{value}</div>
// //               <div className="text-gray-700">{label}</div>
// //             </div>
// //           ))}
// //         </div>

// //         <div className="grid md:grid-cols-3 gap-8 mb-16">
// //           {clients.map((client) => (
// //             <div
// //               key={client}
// //               className="bg-white rounded-lg p-6 flex items-center justify-center text-center hover:shadow-lg transition-all hover:transform hover:-translate-y-1 border border-secondary group"
// //             >
// //               <div>
// //                 <Star className="h-6 w-6 text-accent mx-auto mb-4 transform group-hover:rotate-12 transition-transform" />
// //                 <h3 className="font-medium text-primary">{client}</h3>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         <div className="grid md:grid-cols-2 gap-8">
// //           {testimonials.map((testimonial) => (
// //             <div key={testimonial.name} className="bg-white p-6 rounded-xl shadow-lg border border-secondary">
// //               <div className="flex items-center mb-4">
// //                 <img
// //                   src={testimonial.image}
// //                   alt={testimonial.name}
// //                   className="w-12 h-12 rounded-full object-cover"
// //                 />
// //                 <div className="ml-4">
// //                   <h4 className="font-bold text-primary">{testimonial.name}</h4>
// //                   <p className="text-gray-600 text-sm">{testimonial.role}</p>
// //                 </div>
// //               </div>
// //               <p className="text-gray-700">{testimonial.content}</p>
// //               <div className="flex mt-4">
// //                 {[1, 2, 3, 4, 5].map((star) => (
// //                   <Star key={star} className="h-5 w-5 text-accent" fill="currentColor" />
// //                 ))}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



import React, { useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

// Define interfaces for testimonial data
interface Testimonial {
  clientName: string;
  quote: string;
  image: string; // URL to client's image
}

// Define props interface (empty since no props are passed)
interface TestimonialsProps {}

const Testimonials: React.FC<TestimonialsProps> = () => {
  const testimonials: Testimonial[] = [
    {
      clientName: 'Anurag Mishra',
      quote: 'Puana Packaging transformed our product presentation with their innovative multilayer solutions. Their commitment to quality is unmatched!',
      image: 'https://images.unsplash.com/photo-1590650516494-0c8e4c27e8b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80', // Indian business professional 1
    },
    {
      clientName: 'Shyam Dairy',
      quote: 'The eco-friendly packaging from Puana has helped us reduce our carbon footprint while maintaining product freshness. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80', // Indian professional 2
    },
  
    {
      clientName: 'Dr Ramesh Singh',
      quote: 'Puana’s packaging solutions are top-notch. They’ve helped us stand out in a competitive market with their creative designs.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80', // Indian professional 4
    },
    {
      clientName: 'Riya Johson',
      quote: 'The quality and durability of Puana’s packaging have been a game-changer for our business. Their team is a pleasure to work with!',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80', // Indian professional 5
    },
    {
      clientName: 'Dheeraj (R.k) Foods Pvt Lt',
      quote: 'Puana Packaging has been a reliable partner in delivering high-quality packaging that meets our needs. Their innovation is impressive!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80', // Indian professional 6
    },
    {
      clientName: 'Bistro Pvt Ltd',
      quote: 'We trust Puana for all our packaging needs. Their sustainable solutions have enhanced our brand’s reputation.',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80', // Indian professional 7
    },
 
    {
      clientName: ' Rapidship Limited',
      quote: 'The team at Puana Packaging delivered beyond our expectations. Their packaging solutions are both functional and aesthetically pleasing.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80', // Indian professional 9
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
    }, 5000); // Scroll every 5 seconds
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
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-xl md:text-2xl mb-4 block tracking-wide">
            WHAT OUR CLIENTS SAY
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Trusted by Industry Leaders
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Hear from our esteemed clients across India who have partnered with Puana Packaging to elevate their brands with our innovative and sustainable packaging solutions.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex space-x-6 overflow-x-auto no-scrollbar snap-x snap-mandatory py-6 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.clientName}
                className="relative w-80 md:w-96 flex-shrink-0 snap-center rounded-xl shadow-lg bg-white border border-gray-200 p-6 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.clientName} representative`}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80'; // Fallback image
                    }}
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-primary">{testimonial.clientName}</h4>
                  </div>
                </div>
                <Quote className="h-8 w-8 text-accent mb-4 opacity-50" aria-hidden="true" />
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {testimonial.quote}
                </p>
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
      </div>
    </section>
  );
};

export default Testimonials;


// import React, { useRef, useEffect } from 'react';
// import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react';

// interface Testimonial {
//   clientName: string;
//   quote: string;
//   image: string;
// }

// const Testimonials: React.FC = () => {
//   const testimonials: Testimonial[] = [
//     {
//       clientName: 'Anurag Mishra',
//       quote: 'Puana Packaging transformed our product presentation with their innovative multilayer solutions. Their commitment to quality is unmatched!',
//       image: 'https://images.unsplash.com/photo-1590650516494-0c8e4c27e8b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
//     },
//     {
//       clientName: 'Shyam Dairy',
//       quote: 'The eco-friendly packaging from Puana has helped us reduce our carbon footprint while maintaining product freshness. Highly recommended!',
//       image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
//     },
//     {
//       clientName: 'Dr Ramesh Singh',
//       quote: 'Puana’s packaging solutions are top-notch. They’ve helped us stand out in a competitive market with their creative designs.',
//       image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
//     },
//     {
//       clientName: 'Riya Johson',
//       quote: 'The quality and durability of Puana’s packaging have been a game-changer for our business. Their team is a pleasure to work with!',
//       image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
//     },
//     {
//       clientName: 'Dheeraj (R.K) Foods Pvt Ltd',
//       quote: 'Puana Packaging has been a reliable partner in delivering high-quality packaging that meets our needs. Their innovation is impressive!',
//       image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
//     },
//     {
//       clientName: 'Bistro Pvt Ltd',
//       quote: 'We trust Puana for all our packaging needs. Their sustainable solutions have enhanced our brand’s reputation.',
//       image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
//     },
//     {
//       clientName: 'Rapidship Limited',
//       quote: 'The team at Puana Packaging delivered beyond our expectations. Their packaging solutions are both functional and aesthetically pleasing.',
//       image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
//     },
//   ];

//   const sliderRef = useRef<HTMLDivElement>(null);

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
//     }, 5000);
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

//   return (
//     <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-indigo-900 text-white relative overflow-hidden">
//       {/* Animated Background Particles */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="w-40 h-40 bg-accent/20 rounded-full absolute top-10 left-10 animate-float blur-3xl"></div>
//         <div className="w-56 h-56 bg-yellow-300/10 rounded-full absolute bottom-20 right-20 animate-float-delay blur-3xl"></div>
//         <div className="w-24 h-24 bg-white/10 rounded-full absolute top-1/3 right-1/4 animate-pulse-slow blur-2xl"></div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <span className="text-accent font-extrabold text-xl sm:text-2xl md:text-3xl tracking-widest animate-glow">WHAT OUR CLIENTS SAY</span>
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-yellow-300 animate-text-reveal">
//             Trusted by Leaders
//           </h2>
//           <p className="text-lg sm:text-xl md:text-2xl mt-6 max-w-3xl mx-auto leading-relaxed drop-shadow-lg animate-fade-in-up">
//             Voices from our valued partners across industries, showcasing the impact of our innovative packaging solutions.
//           </p>
//         </div>

//         {/* Testimonial Slider */}
//         <div className="relative">
//           <div
//             ref={sliderRef}
//             className="flex space-x-6 overflow-x-auto no-scrollbar snap-x snap-mandatory py-6"
//             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             {testimonials.map((testimonial) => (
//               <div
//                 key={testimonial.clientName}
//                 className="group relative w-80 sm:w-96 flex-shrink-0 snap-center rounded-2xl bg-gradient-to-br from-white/10 to-black/30 backdrop-blur-lg border border-accent/30 transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,107,0,0.6)] overflow-hidden"
//               >
//                 {/* Image and Name */}
//                 <div className="p-6">
//                   <div className="flex items-center mb-4">
//                     <img
//                       src={testimonial.image}
//                       alt={`${testimonial.clientName} representative`}
//                       className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-accent/50 mr-4 transition-transform duration-300 group-hover:scale-110"
//                       onError={(e) => {
//                         e.currentTarget.src = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80';
//                       }}
//                     />
//                     <div>
//                       <h4 className="text-lg sm:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-accent to-yellow-300">
//                         {testimonial.clientName}
//                       </h4>
//                     </div>
//                   </div>
//                   {/* Quote */}
//                   <Quote className="h-8 w-8 text-accent mb-4 opacity-40 animate-pulse" aria-hidden="true" />
//                   <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
//                     {testimonial.quote}
//                   </p>
//                   {/* Stars */}
//                   <div className="flex mt-4 space-x-1">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <Star
//                         key={star}
//                         className="h-5 w-5 text-accent group-hover:animate-bounce-slow"
//                         fill="currentColor"
//                       />
//                     ))}
//                   </div>
//                 </div>
//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               </div>
//             ))}
//           </div>

//           {/* Navigation Buttons */}
//           <button
//             onClick={scrollLeft}
//             className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-accent to-orange-500 p-3 sm:p-4 rounded-full text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(255,107,0,0.7)]"
//             aria-label="Scroll Left"
//           >
//             <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
//           </button>
//           <button
//             onClick={scrollRight}
//             className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-accent to-orange-500 p-3 sm:p-4 rounded-full text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(255,107,0,0.7)]"
//             aria-label="Scroll Right"
//           >
//             <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
