

// import React from 'react';
// import { Package2, Linkedin, Facebook, Instagram, LucideIcon } from 'lucide-react';
// import { Link } from 'react-router-dom';

// // Define interface for footer links
// interface FooterLink {
//   name: string;
//   path: string;
// }

// // Define interface for company info
// interface CompanyInfo {
//   label: string;
//   value: string;
// }

// // Define interface for social media links
// interface SocialLink {
//   icon: LucideIcon;
//   href: string;
//   label: string;
// }

// // Define props interface (empty since Footer takes no props)
// interface FooterProps {}

// const Footer: React.FC<FooterProps> = () => {
//   const footerLinks: FooterLink[] = [
//     { name: 'Home', path: '/' },
//     { name: 'About Us', path: '/about' },
//     { name: 'Products', path: '/product' },
//     { name: 'Facilities', path: '/facility' },
//     { name: 'Careers', path: '/careers' },
//     { name: 'Contact Us', path: '/contact' },
//   ];

//   const companyInfo: CompanyInfo[] = [
//     { label: 'CIN', value: 'U36999UR2017PTC007837' },
//     { label: 'GST', value: '05AAJCP2128E1ZR' },
//     { label: 'PAN', value: 'AAJCP2128E' },
//   ];

//   const socialLinks: SocialLink[] = [
//     { icon: Linkedin, href: 'https://www.linkedin.com', label: 'LinkedIn' },
//     { icon: Facebook, href: 'https://www.facebook.com', label: 'Facebook' },
//     { icon: Instagram, href: 'https://www.instagram.com', label: 'Instagram' },
//   ];

//   return (
//     <footer className="bg-gradient-to-br from-primary to-accent text-white py-12 relative overflow-hidden">
//       {/* Background Decorative Element */}
//       <div className="absolute inset-0 bg-pattern opacity-10" aria-hidden="true"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Logo and Description */}
//           <div className="flex flex-col items-start">
//             <Link to="/" className="flex items-center mb-6 group">
//               <img
//                 src="/output-onlinepngtools.png"
//                 alt="Puana Packaging Products Logo"
//                 className="h-10 w-16 rounded-xl transition-transform duration-300 group-hover:scale-110"
//                 onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
//                   e.currentTarget.src = '/fallback-logo.png'; // Fallback image
//                 }}
//               />
//               <span className="ml-3 text-2xl font-bold tracking-wide transition-colors duration-300 group-hover:text-secondary">
//                 Puana Packaging
//               </span>
//             </Link>
//             <p className="text-secondary text-sm md:text-base leading-relaxed">
//               Leading manufacturer of innovative and sustainable packaging solutions, crafting the future of packaging with quality and care.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg md:text-xl font-bold mb-4 text-white flex items-center">
//               <Package2 className="h-6 w-6 mr-2 text-secondary" aria-hidden="true" />
//               Quick Links
//             </h3>
//             <ul className="space-y-3">
//               {footerLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     to={link.path}
//                     className="text-secondary hover:text-white text-sm md:text-base transition-colors duration-300 hover:underline"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Company Information */}
//           <div>
//             <h3 className="text-lg md:text-xl font-bold mb-4 text-white">Company Information</h3>
//             <ul className="space-y-3 text-secondary text-sm md:text-base">
//               {companyInfo.map((info) => (
//                 <li key={info.label}>
//                   <span className="font-semibold">{info.label}:</span> {info.value}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Connect With Us */}
//           <div>
//             <h3 className="text-lg md:text-xl font-bold mb-4 text-white">Connect With Us</h3>
//             <div className="flex space-x-4">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.label}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-secondary hover:text-white transition-transform duration-300 hover:scale-125"
//                   aria-label={`Follow us on ${social.label}`}
//                 >
//                   <social.icon className="h-6 w-6" />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="border-t border-white/10 mt-12 pt-8 text-center text-secondary">
//           <p className="text-sm md:text-base">
//             © {new Date().getFullYear()} Puana Packaging Products Pvt Ltd. All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Package2, Linkedin, Facebook, Instagram, LucideIcon, ArrowRight, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterLink {
  name: string;
  path: string;
}

interface CompanyInfo {
  label: string;
  value: string;
}

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

const Footer: React.FC = () => {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-indigo-900 text-white py-12 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-40 h-40 bg-accent/20 rounded-full absolute top-10 left-10 animate-float blur-3xl"></div>
        <div className="w-56 h-56 bg-yellow-300/10 rounded-full absolute bottom-20 right-20 animate-float-delay blur-3xl"></div>
        <div className="w-24 h-24 bg-white/10 rounded-full absolute top-1/3 right-1/4 animate-pulse-slow blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-start">
            <Link to="/" className="flex items-center mb-6 group">
              <img
                src="/output-onlinepngtools.png"
                alt="Puana Packaging Products Logo"
                className="h-12 w-20 rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,107,0,0.5)]"
                onError={(e) => {
                  e.currentTarget.src = '/fallback-logo.png';
                }}
              />
              <span className="ml-3 text-2xl md:text-3xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-accent to-yellow-300 animate-text-reveal">
                Puana Packaging
              </span>
            </Link>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Innovating the future of packaging with sustainable, high-quality solutions since 2017.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-yellow-300 flex items-center animate-text-reveal">
              <Package2 className="h-6 w-6 mr-2 text-accent animate-pulse" aria-hidden="true" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white text-sm md:text-base transition-all duration-300 hover:underline hover:pl-2 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Information */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-yellow-300 animate-text-reveal">
              Company Information
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base">
              {companyInfo.map((info) => (
                <li key={info.label} className="group">
                  <span className="font-semibold text-white group-hover:text-accent transition-colors duration-300">
                    {info.label}:
                  </span>{' '}
                  <span className="group-hover:text-white transition-colors duration-300">{info.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-yellow-300 animate-text-reveal">
              Connect With Us
            </h3>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-125 hover:shadow-[0_0_10px_rgba(255,107,0,0.5)] rounded-full p-2 bg-white/10 backdrop-blur-sm"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-accent/20 mt-12 pt-8 text-center text-gray-300 relative">
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} Puana Packaging Products Pvt Ltd. All Rights Reserved.
          </p>
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-accent to-orange-500 p-3 rounded-full text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(255,107,0,0.7)]"
            aria-label="Back to Top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;