

import React from 'react';
import { Package2, Linkedin, Facebook, Instagram, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

// Define interface for footer links
interface FooterLink {
  name: string;
  path: string;
}

// Define interface for company info
interface CompanyInfo {
  label: string;
  value: string;
}

// Define interface for social media links
interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

// Define props interface (empty since Footer takes no props)
interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const footerLinks: FooterLink[] = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/product' },
    { name: 'Facilities', path: '/facility' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const companyInfo: CompanyInfo[] = [
    { label: 'CIN', value: 'U36999UR2017PTC007837' },
    { label: 'GST', value: '05AAJCP2128E1ZR' },
    { label: 'PAN', value: 'AAJCP2128E' },
  ];

  const socialLinks: SocialLink[] = [
    { icon: Linkedin, href: 'https://www.linkedin.com', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary to-accent text-white py-12 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 bg-pattern opacity-10" aria-hidden="true"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-start">
            <Link to="/" className="flex items-center mb-6 group">
              <img
                src="/output-onlinepngtools.png"
                alt="Puana Packaging Products Logo"
                className="h-10 w-16 rounded-xl transition-transform duration-300 group-hover:scale-110"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.src = '/fallback-logo.png'; // Fallback image
                }}
              />
              <span className="ml-3 text-2xl font-bold tracking-wide transition-colors duration-300 group-hover:text-secondary">
                Puana Packaging
              </span>
            </Link>
            <p className="text-secondary text-sm md:text-base leading-relaxed">
              Leading manufacturer of innovative and sustainable packaging solutions, crafting the future of packaging with quality and care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-white flex items-center">
              <Package2 className="h-6 w-6 mr-2 text-secondary" aria-hidden="true" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-secondary hover:text-white text-sm md:text-base transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Information */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-white">Company Information</h3>
            <ul className="space-y-3 text-secondary text-sm md:text-base">
              {companyInfo.map((info) => (
                <li key={info.label}>
                  <span className="font-semibold">{info.label}:</span> {info.value}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white transition-transform duration-300 hover:scale-125"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-secondary">
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} Puana Packaging Products Pvt Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;