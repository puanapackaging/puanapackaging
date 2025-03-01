

import React from 'react';
import { CheckCircle, Building2, Award, Users, Leaf, Globe2, ThumbsUp, ShieldCheck } from 'lucide-react';

export default function About() {
  const coreValues = [
    { icon: Award, title: 'Quality', desc: 'Committed to excellence in every product' },
    { icon: Users, title: 'Innovation', desc: 'Pushing boundaries in packaging technology' },
    { icon: Leaf, title: 'Sustainability', desc: 'Eco-friendly packaging solutions' },
    { icon: CheckCircle, title: 'Customer Satisfaction', desc: 'Your success is our priority' }
  ];

  const whyChooseUs = [
    { icon: ShieldCheck, title: 'High Safety Standards', desc: 'Ensuring safe and hygienic packaging for all products.' },
    { icon: Globe2, title: 'Global Reach', desc: 'Serving clients worldwide with reliable and efficient solutions.' },
    { icon: ThumbsUp, title: 'Cost-Effective Solutions', desc: 'Providing value-driven packaging without compromising on quality.' }
  ];

  return (
    <section id="about-us" className="py-12 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-xl mb-2 block">WHO WE ARE</span>
          <h2 className="text-4xl font-bold mb-6 text-primary">About Us</h2>
          <p className="text-xl text-gray-700">
            Leading the way in innovative and sustainable flexible  packaging solutions, committed to excellence
            and customer satisfaction since 2017.
          </p>
        </div>

        {/* State-of-the-Art Facility */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-secondary relative z-10">
              <Building2 className="h-12 w-12 text-accent mb-6" />
              <h3 className="text-3xl font-bold mb-4 text-primary">State-of-the-Art Facility</h3>
              <p className="text-gray-700 mb-6">
                Our 25,000 square feet high-tech ultra-modern facility at SIDCUL Industrial Park,
                Sitarganj, Uttarakhand, features comprehensive infrastructure including well-maintained
                roads, street lights, sewage system, and robust safety measures.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-4 bg-secondary/10 rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-2">25K</div>
                  <div className="text-sm text-gray-600">Square Feet</div>
                </div>
                <div className="text-center p-4 bg-secondary/10 rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-2">50+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
              </div>
            </div>
            <div 
              className="absolute top-4 left-4 right-4 bottom-4 bg-accent/10 rounded-xl -z-10"
              style={{ transform: 'rotate(-2deg)' }}
            />
          </div>

          {/* Our Core Values */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-primary">Our Core Values</h3>
            <div className="grid grid-cols-1 gap-6">
              {coreValues.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start bg-white p-6 rounded-lg shadow-md border border-secondary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-xl text-primary mb-1">{title}</h4>
                    <p className="text-gray-600 text-l">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">Why Choose Us</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center bg-white p-6 rounded-lg shadow-md border border-secondary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <Icon className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="text-xl font-bold text-primary mb-2">{title}</h4>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-accent mb-2">100+</div>
            <div className="text-gray-700">Satisfied Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">1000+</div>
            <div className="text-gray-700">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">24/7</div>
            <div className="text-gray-700">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
