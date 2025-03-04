

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, Mail, Menu, X } from 'lucide-react';

// Define props interface (empty since Header takes no props)
interface HeaderProps {}

// Define the proper type for the logo click handler
type HandleLogoClick = () => void;

// Define interface for nav links
interface NavLink {
  to: string;
  label: string;
}

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const navigate = useNavigate();

  // Handle scroll event to change header background and text color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle logo and title click with proper typing
  const handleLogoClick: HandleLogoClick = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  const navLinks: NavLink[] = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/product', label: 'Products' },
    { to: '/facility', label: 'Facilities' },
    { to: '/careers', label: 'Career' },
    { to: '/contact', label: 'Contact Us' },
  ];

  return (
    <header
    className={`fixed w-full shadow-md z-50 transition-all duration-500 ease-in-out ${
      isScrolled
        ? 'bg-gradient-to-r from-gray-900 via-black to-indigo-900 text-white'
        : 'bg-gradient-to-r from-white/95 via-white to-white/95 text-gray-900'
    }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <button
            onClick={handleLogoClick}
            className="flex items-center focus:outline-none group"
            type="button"
            aria-label="Go to homepage"
          >
            <img
              src="/output-onlinepngtools.png"
              alt="Puana Packaging Products Logo"
              className="h-10 w-16 rounded-xl transition-transform duration-300 group-hover:scale-105"
              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                e.currentTarget.src = '/fallback-image.png'; // Optional: Add fallback image
              }}
            />
            <span
              className={`ml-2 text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-primary'
              }`}
            >
              Puana Packaging Products
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-medium transition-colors duration-300 relative group ${
                  isScrolled
                    ? 'text-white hover:text-gray-200'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-gray-200' : 'bg-primary'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:+919058370800"
              className={`flex items-center text-sm transition-colors duration-300 ${
                isScrolled ? 'text-white hover:text-gray-200' : 'text-primary hover:text-accent'
              }`}
              aria-label="Call us at +91 90583 70800"
            >
              <Phone
                className={`h-4 w-4 mr-2 ${
                  isScrolled ? 'text-gray-200' : 'text-accent'
                }`}
              />
              <span>+91 98979 63106</span>
            </a>
            <a
              href="mailto:puanaproducts@gmail.com"
              className={`flex items-center text-sm transition-colors duration-300 ${
                isScrolled ? 'text-white hover:text-gray-200' : 'text-primary hover:text-accent'
              }`}
              aria-label="Email us at puanaproducts@gmail.com"
            >
              <Mail
                className={`h-4 w-4 mr-2 ${
                  isScrolled ? 'text-gray-200' : 'text-accent'
                }`}
              />
              <span>sales@puanapackaging.com</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            type="button"
            aria-label={isMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X
                className={`h-6 w-6 ${
                  isScrolled ? 'text-white' : 'text-primary'
                }`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${
                  isScrolled ? 'text-white' : 'text-primary'
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className={`md:hidden py-4 transition-all duration-300 ${
              isScrolled
                ? 'bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 text-white'
                : 'bg-white text-gray-700'
            }`}
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 transition-colors duration-300 ${
                    isScrolled
                      ? 'text-white hover:bg-purple-800 hover:text-gray-200'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {/* Mobile Contact Info */}
              <div className="px-4 pt-4 border-t border-gray-200">
                <a
                  href="tel:+919058370800"
                  className={`flex items-center text-sm py-2 transition-colors duration-300 ${
                    isScrolled
                      ? 'text-white hover:text-gray-200'
                      : 'text-primary hover:text-accent'
                  }`}
                  aria-label="Call us at +91 90583 70800"
                >
                  <Phone
                    className={`h-4 w-4 mr-2 ${
                      isScrolled ? 'text-gray-200' : 'text-accent'
                    }`}
                  />
                  <span>+91 90583 70800</span>
                </a>
                <a
                  href="mailto:puanaproducts@gmail.com"
                  className={`flex items-center text-sm py-2 transition-colors duration-300 ${
                    isScrolled
                      ? 'text-white hover:text-gray-200'
                      : 'text-primary hover:text-accent'
                  }`}
                  aria-label="Email us at puanaproducts@gmail.com"
                >
                  <Mail
                    className={`h-4 w-4 mr-2 ${
                      isScrolled ? 'text-gray-200' : 'text-accent'
                    }`}
                  />
                  <span>puanaproducts@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Phone, Mail } from 'lucide-react';

// interface HeaderProps {}

// type HandleLogoClick = () => void;

// interface NavLink {
//   to: string;
//   label: string;
// }

// const Header: React.FC<HeaderProps> = () => {
//   const [isScrolled, setIsScrolled] = useState<boolean>(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleLogoClick: HandleLogoClick = () => {
//     navigate('/');
//   };

//   const navLinks: NavLink[] = [
//     { to: '/', label: 'Home' },
//     { to: '/about', label: 'About Us' },
//     { to: '/product', label: 'Products' },
//     { to: '/facility', label: 'Facilities' },
//     { to: '/careers', label: 'Career' },
//     { to: '/contact', label: 'Contact Us' },
//   ];

//   return (
//     <header
//       className={`fixed w-full shadow-md z-50 transition-all duration-500 ease-in-out ${
//         isScrolled
//           ? 'bg-gradient-to-r from-gray-900 via-black to-indigo-900 text-white'
//           : 'bg-gradient-to-r from-white/95 via-white to-white/95 text-gray-900'
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16 overflow-x-auto no-scrollbar">
//           {/* Logo Section */}
//           <button
//             onClick={handleLogoClick}
//             className="flex items-center focus:outline-none group flex-shrink-0"
//             type="button"
//             aria-label="Go to homepage"
//           >
//             <img
//               src="/output-onlinepngtools.png"
//               alt="Puana Packaging Products Logo"
//               className="h-8 w-12 rounded-xl transition-transform duration-300 group-hover:scale-105"
//               onError={(e) => {
//                 e.currentTarget.src = '/fallback-image.png';
//               }}
//             />
//             <span
//               className={`ml-2 text-lg font-bold transition-colors duration-300 whitespace-nowrap ${
//                 isScrolled ? 'text-accent' : 'text-primary'
//               }`}
//             >
//               Puana Packaging Products
//             </span>
//           </button>

//           {/* Navigation */}
//           <nav className="flex items-center space-x-6 mx-4 overflow-x-auto no-scrollbar flex-grow">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 className={`font-medium text-sm transition-colors duration-300 relative group whitespace-nowrap ${
//                   isScrolled ? 'text-gray-300 hover:text-accent' : 'text-gray-700 hover:text-primary'
//                 }`}
//               >
//                 {link.label}
//                 <span
//                   className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
//                     isScrolled ? 'bg-accent' : 'bg-primary'
//                   }`}
//                 />
//               </Link>
//             ))}
//           </nav>

//           {/* Contact Info */}
//           <div className="flex items-center space-x-4 flex-shrink-0">
//             <a
//               href="tel:+919897963106"
//               className={`flex items-center text-sm transition-colors duration-300 whitespace-nowrap ${
//                 isScrolled ? 'text-gray-300 hover:text-white' : 'text-primary hover:text-accent'
//               }`}
//               aria-label="Call us at +91 98979 63106"
//             >
//               <Phone
//                 className={`h-4 w-4 mr-1 ${
//                   isScrolled ? 'text-accent' : 'text-accent'
//                 }`}
//               />
//               <span>+91 98979 63106</span>
//             </a>
//             <a
//               href="mailto:sales@puanapackaging.com"
//               className={`flex items-center text-sm transition-colors duration-300 whitespace-nowrap ${
//                 isScrolled ? 'text-gray-300 hover:text-white' : 'text-primary hover:text-accent'
//               }`}
//               aria-label="Email us at sales@puanapackaging.com"
//             >
//               <Mail
//                 className={`h-4 w-4 mr-1 ${
//                   isScrolled ? 'text-accent' : 'text-accent'
//                 }`}
//               />
//               <span>sales@puanapackaging.com</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Phone, Mail } from 'lucide-react';

// interface HeaderProps {}

// type HandleLogoClick = () => void;

// interface NavLink {
//   to: string;
//   label: string;
// }

// const Header: React.FC<HeaderProps> = () => {
//   const [isScrolled, setIsScrolled] = useState<boolean>(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleLogoClick: HandleLogoClick = () => {
//     navigate('/');
//   };

//   const navLinks: NavLink[] = [
//     { to: '/', label: 'Home' },
//     { to: '/about', label: 'About Us' },
//     { to: '/product', label: 'Products' },
//     { to: '/facility', label: 'Facilities' },
//     { to: '/careers', label: 'Career' },
//     { to: '/contact', label: 'Contact Us' },
//   ];

//   return (
//     <header
//       className={`fixed w-full shadow-md z-50 transition-all duration-500 ease-in-out ${
//         isScrolled
//           ? 'bg-gradient-to-r from-gray-900 via-black to-indigo-900 text-white'
//           : 'bg-gradient-to-r from-white/95 via-white to-white/95 text-gray-900'
//       }`}
//     >
//       <div className="container mx-auto px-2 sm:px-4">
//         <div className="flex items-center justify-between h-14 sm:h-16 overflow-x-auto no-scrollbar">
//           {/* Logo Section */}
//           <button
//             onClick={handleLogoClick}
//             className="flex items-center focus:outline-none group flex-shrink-0"
//             type="button"
//             aria-label="Go to homepage"
//           >
//             <img
//               src="/output-onlinepngtools.png"
//               alt="Puana Packaging Products Logo"
//               className="h-7 sm:h-8 w-10 sm:w-12 rounded-xl transition-transform duration-300 group-hover:scale-105"
//               onError={(e) => {
//                 e.currentTarget.src = '/fallback-image.png';
//               }}
//             />
//             <span
//               className={`ml-1 sm:ml-2 text-base sm:text-xl font-bold transition-colors duration-300 whitespace-nowrap ${
//                 isScrolled ? 'text-accent' : 'text-primary'
//               }`}
//             >
//               Puana Packaging Products
//             </span>
//           </button>

//           {/* Navigation */}
//           <nav className="flex items-center space-x-2 sm:space-x-6 mx-2 sm:mx-4 overflow-x-auto no-scrollbar flex-grow">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 className={`font-medium text-xs sm:text-base transition-colors duration-300 relative group whitespace-nowrap ${
//                   isScrolled ? 'text-gray-300 hover:text-accent' : 'text-gray-700 hover:text-primary'
//                 }`}
//               >
//                 {link.label}
//                 <span
//                   className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
//                     isScrolled ? 'bg-accent' : 'bg-primary'
//                   }`}
//                 />
//               </Link>
//             ))}
//           </nav>

//           {/* Contact Info */}
//           <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
//             <a
//               href="tel:+919897963106"
//               className={`flex items-center text-xs sm:text-base transition-colors duration-300 whitespace-nowrap ${
//                 isScrolled ? 'text-gray-300 hover:text-white' : 'text-primary hover:text-accent'
//               }`}
//               aria-label="Call us at +91 98979 63106"
//             >
//               <Phone
//                 className={`h-4 w-4 mr-1 ${
//                   isScrolled ? 'text-accent' : 'text-accent'
//                 }`}
//               />
//               <span className="hidden sm:inline">+91 98979 63106</span>
//               <span className="sm:hidden">+91 98979...</span>
//             </a>
//             <a
//               href="mailto:sales@puanapackaging.com"
//               className={`flex items-center text-xs sm:text-base transition-colors duration-300 whitespace-nowrap ${
//                 isScrolled ? 'text-gray-300 hover:text-white' : 'text-primary hover:text-accent'
//               }`}
//               aria-label="Email us at sales@puanapackaging.com"
//             >
//               <Mail
//                 className={`h-4 w-4 mr-1 ${
//                   isScrolled ? 'text-accent' : 'text-accent'
//                 }`}
//               />
//               <span className="hidden sm:inline">sales@puanapackaging.com</span>
//               <span className="sm:hidden">sales@...</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;





