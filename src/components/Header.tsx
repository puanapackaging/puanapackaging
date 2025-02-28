// import React from 'react';
// import { Package2, Phone, Mail, Menu } from 'lucide-react';

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   return (
//     <header className="fixed w-full bg-white shadow-md z-50">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           <div className="flex items-center">
//             <Package2 className="h-8 w-8 text-primary" />
//             <span className="ml-2 text-xl font-bold text-primary">Puana Packaging Products</span>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             {['Home', 'About Us', 'Products', 'Facilities', 'Career', 'Contact Us'].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase().replace(' ', '-')}`}
//                 className="text-gray-700 hover:text-primary transition-colors"
//               >
//                 {item}
//               </a>
//             ))}
//           </nav>

//           {/* Contact Info */}
//           <div className="hidden lg:flex items-center space-x-6">
//             <div className="flex items-center text-sm">
//               <Phone className="h-4 w-4 text-accent mr-2" />
//               <span className="text-primary">+91 90583 70800</span>
//             </div>
//             <div className="flex items-center text-sm">
//               <Mail className="h-4 w-4 text-accent mr-2" />
//               <span className="text-primary">puanaproducts@gmail.com</span>
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <Menu className="h-6 w-6 text-primary" />
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden py-4 bg-white">
//             <div className="flex flex-col space-y-4">
//               {['Home', 'About Us', 'Products', 'Facilities', 'Clients', 'Contact Us'].map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase().replace(' ', '-')}`}
//                   className="text-gray-700 hover:text-primary transition-colors px-4"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

import React from 'react';
import { Link } from 'react-router-dom';
import { Package2, Phone, Mail, Menu } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Package2 className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-primary">Puana Packaging Products</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="/product" className="text-gray-700 hover:text-primary transition-colors">
              Products
            </Link>
            <Link to="/facility" className="text-gray-700 hover:text-primary transition-colors">
              Facilities
            </Link>
            <Link to="/careers" className="text-gray-700 hover:text-primary transition-colors">
              Career
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center text-sm">
              <Phone className="h-4 w-4 text-accent mr-2" />
              <span className="text-primary">+91 90583 70800</span>
            </div>
            <div className="flex items-center text-sm">
              <Mail className="h-4 w-4 text-accent mr-2" />
              <span className="text-primary">puanaproducts@gmail.com</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-primary" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary transition-colors px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-primary transition-colors px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/product"
                className="text-gray-700 hover:text-primary transition-colors px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/facility"
                className="text-gray-700 hover:text-primary transition-colors px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Facilities
              </Link>
              <Link
                to="/careers"
                className="text-gray-700 hover:text-primary transition-colors px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Career
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-primary transition-colors px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
