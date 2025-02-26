import React from 'react';
import { Package2, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Package2 className="h-8 w-8 text-secondary" />
              <span className="ml-2 text-xl font-bold">Puana Packaging</span>
            </div>
            <p className="text-secondary">
              Leading manufacturer of innovative and sustainable packaging solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Products', 'Facilities', 'Clients', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-secondary hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company Information</h3>
            <ul className="space-y-2 text-secondary">
              <li>CIN: U36999UR2017PTC007837</li>
              <li>GST: 05AAJCP2128E1ZR</li>
              <li>PAN: AAJCP2128E</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-secondary hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-secondary hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light mt-12 pt-8 text-center text-secondary">
          <p>© 2025 Puana Packaging Products Pvt Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}