import React from 'react';
import { Star, Award, Shield, ThumbsUp } from 'lucide-react';

export default function Clients() {
  const stats = [
    { icon: Star, value: '100+', label: 'Active Clients' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Shield, value: '500+', label: 'Projects Completed' },
    { icon: ThumbsUp, value: '99%', label: 'Client Satisfaction' }
  ];

  const clients = [
    'Lancer Food Products',
    'Ganga Dairy',
    'Godhan Masala Foods Limited',
    'N G Food India',
    'DSG Paper Private Limited',
    'Damyaa (P.J) Foods Pvt Ltd',
    'Raghusha Agrotech Pvt Ltd',
    'Utkarsh Food Products',
    'Satia Industries Limited'
  ];

  const testimonials = [
    {
      name: 'Client Success Story',
      role: 'Food Industry',
      content: 'Outstanding quality and service. Their packaging solutions have significantly improved our product presentation.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Partner Testimonial',
      role: 'Beverage Sector',
      content: 'Innovative solutions that have helped us reduce costs while maintaining premium quality.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    }
  ];

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold mb-2 block">OUR CLIENTS</span>
          <h2 className="text-4xl font-bold mb-6 text-primary">Trusted By Leading Brands</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Partnering with industry leaders to deliver excellence in packaging solutions that drive success
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center p-6 bg-secondary/10 rounded-xl border border-secondary hover:shadow-lg transition-all duration-300">
              <Icon className="h-8 w-8 text-accent mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">{value}</div>
              <div className="text-gray-700">{label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {clients.map((client) => (
            <div
              key={client}
              className="bg-white rounded-lg p-6 flex items-center justify-center text-center hover:shadow-lg transition-all hover:transform hover:-translate-y-1 border border-secondary group"
            >
              <div>
                <Star className="h-6 w-6 text-accent mx-auto mb-4 transform group-hover:rotate-12 transition-transform" />
                <h3 className="font-medium text-primary">{client}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-6 rounded-xl shadow-lg border border-secondary">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
              <div className="flex mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-accent" fill="currentColor" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}