import React, { useRef, useEffect } from 'react';
import { Package, ShieldCheck, Zap, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Products() {
  const products = [
    {
      title: 'Multilayer Flexible Packaging',
      icon: Package,
      description: 'Advanced multilayer packaging solutions for superior protection.',
      image: '/image/img1.jpg'
    },
    {
      title: 'Flexible Paper Packaging',
      icon: ShieldCheck,
      description: 'Eco-friendly paper-based packaging options.',
      image: 'image/Flexible Paper Packaging.jpg'
    },
    {
      title: 'Food and Beverage Packaging',
      icon: Zap,
      description: 'Specialized packaging solutions for the food industry.',
      image: 'image/food.jpg'
    },
    {
      title: 'Custom Packaging',
      icon: Package,
      description: 'Tailor-made solutions for unique packaging needs.',
      image: 'image/custom.avif'
    },
    {
      title: 'Sustainable Solutions',
      icon: ShieldCheck,
      description: 'Environmentally friendly and sustainable packaging.',
      image: 'image/sustanable.jpg'
    },
    {
      title: 'Innovative Designs',
      icon: Zap,
      description: 'Creative packaging designs to enhance brand identity.',
      image: 'image/bulb.avif'
    }
  ];

  const sliderRef = useRef(null);

  // Automatic Scrolling Logic
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
    }, 3000); // Scroll every 3 seconds
    return () => clearInterval(scrollInterval);
  }, []);

  // Manual Scroll Controls
  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
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

        {/* Product Slider */}
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
                <button className="text-accent hover:text-primary">Learn More</button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={scrollLeft} 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-accent/50 p-3 rounded-full text-white hover:bg-accent transition-all"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button 
          onClick={scrollRight} 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-accent/50 p-3 rounded-full text-white hover:bg-accent transition-all"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
