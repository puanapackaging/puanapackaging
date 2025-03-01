

// import React from 'react';
// import { CheckCircle, Building2, Award, Users, Leaf, Globe2, ThumbsUp, ShieldCheck, Star } from 'lucide-react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// export default function About() {
//   const coreValues = [
//     { icon: Award, title: 'Quality', desc: 'Committed to excellence in every product, delivering unmatched durability and finesse.' },
//     { icon: Users, title: 'Innovation', desc: 'Pushing the boundaries of packaging technology with cutting-edge solutions.' },
//     { icon: Leaf, title: 'Sustainability', desc: 'Crafting eco-friendly packaging for a greener tomorrow.' },
//     { icon: CheckCircle, title: 'Customer Satisfaction', desc: 'Your success drives us—tailored solutions for every need.' }
//   ];

//   const whyChooseUs = [
//     { icon: ShieldCheck, title: 'Unmatched Safety Standards', desc: 'Ensuring every package meets rigorous safety and hygiene benchmarks.' },
//     { icon: Globe2, title: 'All India Impact', desc: 'Delivering seamless packaging solutions to clients across the globe.' },
//     { icon: ThumbsUp, title: 'Value-Driven Excellence', desc: 'Affordable, high-quality packaging that elevates your brand.' }
//   ];

//   const ourJourney = [
//     { year: '2015', milestone: 'Founded M/S Puana Packaging with a vision to revolutionize the industry.' },
//     { year: '2018', milestone: 'Introduced our first eco-friendly multilayer packaging line.' },
//     { year: '2022', milestone: 'Expanded operations globally, serving all over india ' }
//   ];

//   return (
//  <div>
//     <Header/>
//        <section id="about-us" className="bg-secondary/10 ">
//       {/* Banner Section */}
//       <div 
//         className="h-96 bg-cover bg-center flex items-center justify-center text-white relative"
//         style={{ backgroundImage: "url('image/About.jpg')" }}
//       >
//         <div className="absolute inset-0 bg-black/40"></div>
//         <h1 className="text-7xl font-bold text-accent shadow-lg z-10 animate-fade-in">About Us</h1>
//       </div>

//       <div className="container mx-auto px-4 py-12">
//         <div className="max-w-4xl mx-auto text-center mb-16">
//           <span className="text-accent font-semibold text-2xl mb-4 block animate-slide-up">WHO WE ARE</span>
//           <h2 className="text-4xl font-bold text-primary mb-6">Pioneers in Packaging Excellence</h2>
//           <p className="text-xl text-gray-700 leading-relaxed">
//             Welcome to <strong>M/S Puana Packaging Products Pvt Ltd.</strong>, where innovation meets sustainability. We’re proud to lead the charge in delivering high-quality, cost-effective multilayer flexible packaging and flexible paper solutions. From food and beverage giants to niche artisans, our products are designed to protect, preserve, and promote—ensuring safety, hygiene, and style in every package. Our passion for excellence and planet-friendly practices sets us apart as your trusted packaging partner.
//           </p>
//         </div>

//         {/* Our Core Values */}
//         <div className="mt-12 grid md:grid-cols-4 gap-8">
//           {coreValues.map(({ icon: Icon, title, desc }) => (
//             <div key={title} className="bg-white p-6 rounded-lg shadow-md border hover:shadow-xl transition-transform transform hover:-translate-y-2 hover:border-accent">
//               <Icon className="h-12 w-12 text-accent mb-4 mx-auto" />
//               <h4 className="text-2xl font-bold text-primary mb-2">{title}</h4>
//               <p className="text-gray-600 text-center">{desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* Why Choose Us */}
//         <div className="mt-20 text-center">
//           <h3 className="text-4xl font-bold text-primary mb-12 animate-slide-up">Why Partner With Us?</h3>
//           <div className="grid md:grid-cols-3 gap-10">
//             {whyChooseUs.map(({ icon: Icon, title, desc }) => (
//               <div key={title} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
//                 <Icon className="h-14 w-14 text-accent mb-6 mx-auto" />
//                 <h4 className="text-2xl font-semibold text-primary mb-4">{title}</h4>
//                 <p className="text-gray-600">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Our Journey */}
//         <div className="mt-20 text-center">
//           <h3 className="text-4xl font-bold text-primary mb-12 animate-slide-up">Our Journey So Far</h3>
//           <div className="relative max-w-4xl mx-auto">
//             <div className="absolute h-full border-l-4 border-accent left-1/2 transform -translate-x-1/2"></div>
//             {ourJourney.map(({ year, milestone }, index) => (
//               <div key={year} className={`mb-12 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
//                 <div className={`w-5/12 bg-white p-6 rounded-lg shadow-md border ${index % 2 === 0 ? 'mr-12' : 'ml-12'}`}>
//                   <span className="text-accent font-bold text-xl">{year}</span>
//                   <p className="text-gray-700 mt-2">{milestone}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Our Vision */}
//         <div className="mt-20 bg-gradient-to-r from-accent to-primary text-white p-12 rounded-xl shadow-2xl text-center">
//           <h3 className="text-4xl font-bold mb-6">Our Vision</h3>
//           <p className="text-xl max-w-3xl mx-auto leading-relaxed">
//             At Puana Packaging, we envision a world where every product is packaged with care, sustainability, and innovation at its core. We’re not just creating packaging—we’re building a legacy of quality, environmental responsibility, and customer delight that shapes the future of the industry.
//           </p>
//         </div>
//       </div>
//     </section>
//     <Footer/>
//  </div>
//   );
// }

import React from 'react';
import { 
  CheckCircle, 
 
  Award, 
  Users, 
  Leaf, 
  Globe2, 
  ThumbsUp, 
  ShieldCheck, 

  LucideIcon 
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Define interfaces for the data structures
interface CoreValue {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface WhyChooseUs {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface JourneyMilestone {
  year: string;
  milestone: string;
}

const About: React.FC = () => {
  const coreValues: CoreValue[] = [
    { 
      icon: Award, 
      title: 'Quality', 
      desc: 'Committed to excellence in every product, delivering unmatched durability and finesse.' 
    },
    { 
      icon: Users, 
      title: 'Innovation', 
      desc: 'Pushing the boundaries of packaging technology with cutting-edge solutions.' 
    },
    { 
      icon: Leaf, 
      title: 'Sustainability', 
      desc: 'Crafting eco-friendly packaging for a greener tomorrow.' 
    },
    { 
      icon: CheckCircle, 
      title: 'Customer Satisfaction', 
      desc: 'Your success drives us—tailored solutions for every need.' 
    }
  ];

  const whyChooseUs: WhyChooseUs[] = [
    { 
      icon: ShieldCheck, 
      title: 'Unmatched Safety Standards', 
      desc: 'Ensuring every package meets rigorous safety and hygiene benchmarks.' 
    },
    { 
      icon: Globe2, 
      title: 'All India Impact', 
      desc: 'Delivering seamless packaging solutions to clients across the globe.' 
    },
    { 
      icon: ThumbsUp, 
      title: 'Value-Driven Excellence', 
      desc: 'Affordable, high-quality packaging that elevates your brand.' 
    }
  ];

  const ourJourney: JourneyMilestone[] = [
    { 
      year: '2015', 
      milestone: 'Founded M/S Puana Packaging with a vision to revolutionize the industry.' 
    },
    { 
      year: '2018', 
      milestone: 'Introduced our first eco-friendly multilayer packaging line.' 
    },
    { 
      year: '2022', 
      milestone: 'Expanded operations globally, serving all over India' 
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section id="about-us" className="bg-secondary/10 flex-1">
        {/* Banner Section */}
        <div 
          className="h-96 bg-cover bg-center flex items-center justify-center text-white relative"
          style={{ backgroundImage: "url('/image/About.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-accent shadow-lg z-10 animate-fade-in">
            About Us
          </h1>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-accent font-semibold text-2xl mb-4 block animate-slide-up">
              WHO WE ARE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Pioneers in Flexible Packaging Excellence
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Welcome to <strong>M/S Puana Packaging Products Pvt Ltd.</strong>, where innovation meets sustainability. 
              We’re proud to lead the charge in delivering high-quality, cost-effective multilayer flexible packaging 
              and flexible paper solutions. From food and beverage giants to niche artisans, our products are designed 
              to protect, preserve, and promote—ensuring safety, hygiene, and style in every package. Our passion for 
              excellence and planet-friendly practices sets us apart as your trusted packaging partner.
            </p>
          </div>

          {/* Our Core Values */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map(({ icon: Icon, title, desc }) => (
              <div 
                key={title} 
                className="bg-white p-6 rounded-lg shadow-md border hover:shadow-xl transition-transform transform hover:-translate-y-2 hover:border-accent"
              >
                <Icon className="h-12 w-12 text-accent mb-4 mx-auto" aria-hidden="true" />
                <h4 className="text-xl md:text-2xl font-bold text(primary mb-2">{title}</h4>
                <p className="text-gray-600 text-center">{desc}</p>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-12 animate-slide-up">
              Why Partner With Us?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {whyChooseUs.map(({ icon: Icon, title, desc }) => (
                <div 
                  key={title} 
                  className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <Icon className="h-14 w-14 text-accent mb-6 mx-auto" aria-hidden="true" />
                  <h4 className="text-xl md:text-2xl font-semibold text-primary mb-4">{title}</h4>
                  <p className="text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Journey */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-12 animate-slide-up">
              Our Journey So Far
            </h3>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute h-full border-l-4 border-accent left-1/2 transform -translate-x-1/2" aria-hidden="true"></div>
              {ourJourney.map(({ year, milestone }, index) => (
                <div 
                  key={year} 
                  className={`mb-12 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div 
                    className={`w-full md:w-5/12 bg-white p-6 rounded-lg shadow-md border ${index % 2 === 0 ? 'mr-0 md:mr-12' : 'ml-0 md:ml-12'}`}
                  >
                    <span className="text-accent font-bold text-xl">{year}</span>
                    <p className="text-gray-700 mt-2">{milestone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Vision */}
          <div className="mt-20 bg-gradient-to-r from-accent to-primary text-white p-12 rounded-xl shadow-2xl text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h3>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              At Puana Packaging, we envision a world where every product is packaged with care, sustainability, 
              and innovation at its core. We’re not just creating packaging—we’re building a legacy of quality, 
              environmental responsibility, and customer delight that shapes the future of the industry.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;