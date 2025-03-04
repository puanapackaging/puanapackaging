

// import React from 'react';
// import { CheckCircle, Building2, Award, Users, Leaf, Globe2, ThumbsUp, ShieldCheck } from 'lucide-react';

// export default function About() {
//   const coreValues = [
//     { icon: Award, title: 'Quality', desc: 'Committed to excellence in every product' },
//     { icon: Users, title: 'Innovation', desc: 'Pushing boundaries in packaging technology' },
//     { icon: Leaf, title: 'Sustainability', desc: 'Eco-friendly packaging solutions' },
//     { icon: CheckCircle, title: 'Customer Satisfaction', desc: 'Your success is our priority' }
//   ];

//   const whyChooseUs = [
//     { icon: ShieldCheck, title: 'High Safety Standards', desc: 'Ensuring safe and hygienic packaging for all products.' },
//     { icon: Globe2, title: 'Global Reach', desc: 'Serving clients worldwide with reliable and efficient solutions.' },
//     { icon: ThumbsUp, title: 'Cost-Effective Solutions', desc: 'Providing value-driven packaging without compromising on quality.' }
//   ];

//   return (
//     <section id="about-us" className="py-12 bg-secondary/10">
//       <div className="container mx-auto px-4">
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <span className="text-accent font-semibold text-xl mb-2 block">WHO WE ARE</span>
//           <h2 className="text-4xl font-bold mb-6 text-primary">About Us</h2>
//           <p className="text-xl text-gray-700">
//             Leading the way in innovative and sustainable flexible  packaging solutions, committed to excellence
//             and customer satisfaction since 2017.
//           </p>
//         </div>

//         {/* State-of-the-Art Facility */}
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="relative">
//             <div className="bg-white p-8 rounded-xl shadow-lg border border-secondary relative z-10">
//               <Building2 className="h-12 w-12 text-accent mb-6" />
//               <h3 className="text-3xl font-bold mb-4 text-primary">State-of-the-Art Facility</h3>
//               <p className="text-gray-700 mb-6">
//                 Our 25,000 square feet high-tech ultra-modern facility at SIDCUL Industrial Park,
//                 Sitarganj, Uttarakhand, features comprehensive infrastructure including well-maintained
//                 roads, street lights, sewage system, and robust safety measures.
//               </p>
//               <div className="grid grid-cols-2 gap-4 mt-6">
//                 <div className="text-center p-4 bg-secondary/10 rounded-lg">
//                   <div className="text-3xl font-bold text-accent mb-2">25K</div>
//                   <div className="text-sm text-gray-600">Square Feet</div>
//                 </div>
//                 <div className="text-center p-4 bg-secondary/10 rounded-lg">
//                   <div className="text-3xl font-bold text-accent mb-2">50+</div>
//                   <div className="text-sm text-gray-600">Team Members</div>
//                 </div>
//               </div>
//             </div>
//             <div 
//               className="absolute top-4 left-4 right-4 bottom-4 bg-accent/10 rounded-xl -z-10"
//               style={{ transform: 'rotate(-2deg)' }}
//             />
//           </div>

//           {/* Our Core Values */}
//           <div>
//             <h3 className="text-3xl font-bold mb-8 text-primary">Our Core Values</h3>
//             <div className="grid grid-cols-1 gap-6">
//               {coreValues.map(({ icon: Icon, title, desc }) => (
//                 <div key={title} className="flex items-start bg-white p-6 rounded-lg shadow-md border border-secondary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
//                   <div className="bg-accent/10 p-3 rounded-lg">
//                     <Icon className="h-6 w-6 text-accent" />
//                   </div>
//                   <div className="ml-4">
//                     <h4 className="font-semibold text-xl text-primary mb-1">{title}</h4>
//                     <p className="text-gray-600 text-l">{desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Why Choose Us */}
//         <div className="mt-20">
//           <h3 className="text-3xl font-bold text-primary text-center mb-12">Why Choose Us</h3>
//           <div className="grid md:grid-cols-3 gap-8">
//             {whyChooseUs.map(({ icon: Icon, title, desc }) => (
//               <div key={title} className="text-center bg-white p-6 rounded-lg shadow-md border border-secondary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
//                 <Icon className="h-12 w-12 text-accent mx-auto mb-4" />
//                 <h4 className="text-xl font-bold text-primary mb-2">{title}</h4>
//                 <p className="text-gray-600">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Achievements Section */}
//         <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
//           <div>
//             <div className="text-4xl font-bold text-accent mb-2">100+</div>
//             <div className="text-gray-700">Satisfied Clients</div>
//           </div>
//           <div>
//             <div className="text-4xl font-bold text-accent mb-2">1000+</div>
//             <div className="text-gray-700">Projects Completed</div>
//           </div>
//           <div>
//             <div className="text-4xl font-bold text-accent mb-2">24/7</div>
//             <div className="text-gray-700">Customer Support</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import { CheckCircle, Building2, Award, Users, Leaf, Globe2, ThumbsUp, ShieldCheck } from 'lucide-react';

export default function About() {
  const coreValues = [
    { icon: Award, title: 'Quality', desc: 'Excellence in every detail' },
    { icon: Users, title: 'Innovation', desc: 'Redefining packaging tech' },
    { icon: Leaf, title: 'Sustainability', desc: 'Green solutions for tomorrow' },
    { icon: CheckCircle, title: 'Customer Focus', desc: 'Your success drives us' },
  ];

  const whyChooseUs = [
    { icon: ShieldCheck, title: 'Top Safety', desc: 'Unmatched hygiene & security standards.' },
    { icon: Globe2, title: 'Global Impact', desc: 'Worldwide reach, local precision.' },
    { icon: ThumbsUp, title: 'Smart Value', desc: 'Affordable quality that lasts.' },
  ];

  return (
    <section id="about-us" className="py-16 bg-gradient-to-br from-gray-900 via-black to-indigo-900 text-white overflow-hidden relative">
      {/* Animated Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-40 h-40 bg-accent/20 rounded-full absolute top-10 left-10 animate-float blur-3xl"></div>
        <div className="w-56 h-56 bg-yellow-300/10 rounded-full absolute bottom-20 right-20 animate-float-delay blur-3xl"></div>
        <div className="w-24 h-24 bg-white/10 rounded-full absolute top-1/3 right-1/4 animate-pulse-slow blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-accent font-extrabold text-xl sm:text-2xl md:text-3xl tracking-widest animate-glow">WHO WE ARE</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-yellow-300 animate-text-reveal">
            About Us
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mt-6 leading-relaxed drop-shadow-lg animate-fade-in-up">
            Crafting the future of packaging with innovation, sustainability, and excellence since 2017.
          </p>
        </div>

        {/* Facility & Core Values */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Facility Card with Holographic Effect */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-white/10 to-black/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-accent/30 transform transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_0_25px_rgba(255,107,0,0.5)]">
              <Building2 className="h-16 w-16 text-accent mb-6 animate-spin-slow" />
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-white">Our Facility</h3>
              <p className="text-gray-300 mb-6 text-sm sm:text-base">
                A 25,000 sq ft futuristic hub in SIDCUL Industrial Park, Sitarganj, Uttarakhand—engineered for innovation and sustainability.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-4 bg-accent/10 rounded-lg animate-pulse">
                  <div className="text-3xl font-bold text-accent mb-2">25K</div>
                  <div className="text-xs sm:text-sm text-gray-400">Square Feet</div>
                </div>
                <div className="text-center p-4 bg-accent/10 rounded-lg animate-pulse">
                  <div className="text-3xl font-bold text-accent mb-2">50+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Team Members</div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-lg transform scale-105 rotate-2 transition-all duration-500 group-hover:scale-110 group-hover:blur-xl"></div>
          </div>

          {/* Core Values with Neon Cards */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-accent to-white">Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coreValues.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start bg-gradient-to-br from-white/5 to-black/30 backdrop-blur-md p-6 rounded-lg shadow-lg border border-accent/20 hover:shadow-[0_0_20px_rgba(255,107,0,0.5)] transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="bg-accent/30 p-3 rounded-full animate-glow-pulse">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg sm:text-xl bg-clip-text text-transparent bg-gradient-to-r from-accent to-yellow-300">{title}</h4>
                    <p className="text-gray-300 text-sm sm:text-base">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us with Floating Cards */}
        <div className="mt-20 relative">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-accent to-white animate-text-reveal">
            Why Choose Us
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="text-center bg-gradient-to-b from-white/10 to-black/40 backdrop-blur-lg p-6 rounded-xl shadow-xl border border-accent/30 hover:shadow-[0_0_25px_rgba(255,107,0,0.6)] transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1"
              >
                <Icon className="h-12 w-12 text-accent mx-auto mb-4 animate-bounce-slow" />
                <h4 className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-yellow-300 mb-2">{title}</h4>
                <p className="text-gray-300 text-sm sm:text-base">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements with Glowing Orbs */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          {[
            { value: '100+', label: 'Satisfied Clients' },
            { value: '1000+', label: 'Projects Completed' },
            { value: '24/7', label: 'Customer Support' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="relative p-6 bg-gradient-to-br from-white/10 to-black/20 backdrop-blur-md rounded-full shadow-lg border border-accent/20 hover:shadow-[0_0_20px_rgba(255,107,0,0.5)] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-accent/10 rounded-full blur-md animate-pulse-slow"></div>
              <div className="relative z-10">
                <div className="text-4xl sm:text-5xl font-bold text-accent mb-2 animate-fade-in-up">{value}</div>
                <div className="text-gray-300 text-sm sm:text-base">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}