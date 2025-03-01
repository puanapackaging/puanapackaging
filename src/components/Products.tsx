

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

