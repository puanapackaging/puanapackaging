// import React, { useState } from 'react';
// import { 
//   FaMapMarkerAlt, 
//   FaPhone, 
//   FaEnvelope, 
//   FaBuilding, 
//   FaUser, 
//   FaPaperPlane, 
//   FaFax, 
//   FaGlobe, 
//   FaArrowRight 
// } from 'react-icons/fa';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// export default function Contact() {
//   // Form state
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Contact Form Submitted:', formData);
//     alert('Thank you for your message! We’ll get back to you soon.');
//     setFormData({ name: '', email: '', phone: '', message: '' });
//   };

//   return (
//     <div>
//       <Header/>
//       <section id="contact-us" className="py-20 bg-gradient-to-b from-secondary/5 to-white">
//       {/* Banner */}
//       <div className="relative h-96 mb-16 overflow-hidden">
       
//         <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/30 flex items-center justify-center">
//           <div className="text-center text-white px-4">
//             <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Let’s Connect</h1>
//             <p className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md">
//               Your gateway to collaboration, support, and innovation starts here
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4">
//         {/* Introduction */}
//         <div className="text-center mb-16">
//           <span className="text-accent font-semibold mb-2 block uppercase tracking-widest">
//             REACH OUT
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
//             We’re Just a Message Away
//           </h2>
//           <p className="text-lg text-gray-700 max-w-3xl mx-auto">
//             Whether it’s a question, a partnership idea, or a friendly chat, our team is eager to hear from you.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Enhanced Contact Information */}
//           <div className="bg-white rounded-xl p-8 shadow-xl border border-secondary/20 relative overflow-hidden">
//             <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-bl from-accent/10 to-transparent transform -rotate-12 -translate-x-1/3" />
//             <div className="relative">
//               <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
//                 <FaBuilding className="mr-3 text-accent h-8 w-8" /> Contact Details
//               </h3>
//               <div className="space-y-6">
//                 <div className="flex items-start group">
//                   <FaMapMarkerAlt className="h-6 w-6 text-accent mr-4 mt-1 group-hover:scale-110 transition-transform" />
//                   <div>
//                     <p className="text-gray-700 font-semibold">Head Office:</p>
//                     <p className="text-gray-700">
//                       B149-150 Eldeco SIDCUL Industrial Park,<br />
//                       IIE SITARGANJ, Uttarakhand, India - 262405
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start group">
//                   <FaPhone className="h-6 w-6 text-accent mr-4 mt-1 group-hover:scale-110 transition-transform" />
//                   <div>
//                     <p className="text-gray-700 font-semibold">Phone Numbers:</p>
//                     <p className="text-gray-700">Sandeep Mandal - 9058370800</p>
//                     <p className="text-gray-700">Chandan Singh Bisht - 98979 63106</p>
//                     <p className="text-gray-700">Customer Support - 1800-123-4567</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start group">
//                   <FaEnvelope className="h-6 w-6 text-accent mr-4 mt-1 group-hover:scale-110 transition-transform" />
//                   <div>
//                     <p className="text-gray-700 font-semibold">Email:</p>
//                     <p className="text-gray-700">puanaproducts@gmail.com</p>
//                     <p className="text-gray-700">support@puanaproducts.com</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start group">
//                   <FaFax className="h-6 w-6 text-accent mr-4 mt-1 group-hover:scale-110 transition-transform" />
//                   <div>
//                     <p className="text-gray-700 font-semibold">Fax:</p>
//                     <p className="text-gray-700">+91-5944-123456</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start group">
//                   <FaBuilding className="h-6 w-6 text-accent mr-4 mt-1 group-hover:scale-110 transition-transform" />
//                   <div>
//                     <p className="text-gray-700 font-semibold">Corporate Info:</p>
//                     <p className="text-gray-700">CIN: U36999UR2017PTC007837</p>
//                     <p className="text-gray-700">GST: 05AAJCP2128E1ZR</p>
//                     <p className="text-gray-700">PAN: AAJCP2128E</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start group">
//                   <FaGlobe className="h-6 w-6 text-accent mr-4 mt-1 group-hover:scale-110 transition-transform" />
//                   <div>
//                     <p className="text-gray-700 font-semibold">Website:</p>
//                     <a href="#" className="text-accent hover:text-primary transition-colors">www.puanaproducts.com</a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Enhanced Contact Form */}
//           <div className="bg-white rounded-xl p-8 shadow-xl border border-secondary/20 relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-secondary/10 to-transparent transform rotate-12 translate-x-1/3" />
//             <div className="relative">
//               <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
//                 <FaEnvelope className="mr-3 text-accent h-8 w-8" /> Drop Us a Line
//               </h3>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="relative">
//                   <FaUser className="absolute top-3 left-3 text-gray-400" />
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Full Name"
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm hover:shadow-md"
//                     required
//                   />
//                 </div>
//                 <div className="relative">
//                   <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Email Address"
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm hover:shadow-md"
//                     required
//                   />
//                 </div>
//                 <div className="relative">
//                   <FaPhone className="absolute top-3 left-3 text-gray-400" />
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="Phone Number"
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm hover:shadow-md"
//                     required
//                   />
//                 </div>
//                 <div className="relative">
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Your Message or Inquiry"
//                     rows={5}
//                     className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm hover:shadow-md resize-y min-h-[150px]"
//                     required
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="flex items-center justify-center w-full md:w-auto px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-primary transition-colors group shadow-md hover:shadow-lg"
//                 >
//                   Send Message
//                   <FaPaperPlane className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* Additional Call-to-Action */}
//         <div className="mt-16 bg-white rounded-xl p-8 shadow-xl border border-secondary/20 relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-accent/10 to-transparent transform rotate-12 translate-x-1/3" />
//           <div className="relative text-center">
//             <h3 className="text-3xl font-bold text-primary mb-4">Ready to Partner with Us?</h3>
//             <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
//               From business inquiries to collaboration opportunities, connect with us today and let’s create something extraordinary together.
//             </p>
//             <div className="flex justify-center gap-6">
//               <a
//                 href="mailto:puanaproducts@gmail.com"
//                 className="flex items-center text-accent hover:text-primary font-semibold transition-colors group"
//               >
//                 Email Us
//                 <FaPaperPlane className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
//               </a>
//               <a
//                 href="tel:9058370800"
//                 className="flex items-center text-accent hover:text-primary font-semibold transition-colors group"
//               >
//                 Call Now
//                 <FaPhone className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     <Footer/>
//     </div>
//   );
// }


import React, { useState, ChangeEvent, FormEvent } from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaBuilding, 
  FaUser, 
  FaPaperPlane, 
  FaFax, 
  FaGlobe, 
  FaArrowRight 
} from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Contact Form Submitted:', formData);
    alert('Thank you for your message! We’ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div>
      <Header/>
      <section id="contact-us" className="py-20 bg-gradient-to-b from-secondary/5 to-white">
      {/* Banner */}
      <div className="relative h-96 mb-16 overflow-hidden">
       
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Let’s Connect</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md">
              Your gateway to collaboration, support, and innovation starts here
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Introduction */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold mb-2 block uppercase tracking-widest">
            REACH OUT
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            We’re Just a Message Away
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Whether it’s a question, a partnership idea, or a friendly chat, our team is eager to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Enhanced Contact Information */}
          <div className="bg-white rounded-xl p-8 shadow-xl border border-secondary/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-bl from-accent/10 to-transparent transform -rotate-12 -translate-x-1/3" />
            <div className="relative">
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                <FaBuilding className="mr-3 text-accent h-8 w-8" /> Contact Details
              </h3>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <FaMapMarkerAlt className="h-6 w-6 text-accent mr-4 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-gray-700 font-semibold">Head Office:</p>
                    <p className="text-gray-700">
                      B149-150 Eldeco SIDCUL Industrial Park,<br />
                      IIE SITARGANJ, Uttarakhand, India - 262405
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <FaPhone className="h-6 w-6 text-accent mr-4 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-gray-700 font-semibold">Phone Numbers:</p>
                    <p className="text-gray-700">Sandeep Mandal - 9058370800</p>
                    <p className="text-gray-700">Chandan Singh Bisht - 98979 63106</p>
                    <p className="text-gray-700">Customer Support - 1800-123-4567</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <FaEnvelope className="h-6 w-6 text-accent mr-4 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-gray-700 font-semibold">Email:</p>
                    <p className="text-gray-700">puanaproducts@gmail.com</p>
                    <p className="text-gray-700">support@puanaproducts.com</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <FaFax className="h-6 w-6 text-accent mr-4 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-gray-700 font-semibold">Fax:</p>
                    <p className="text-gray-700">+91-5944-123456</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <FaBuilding className="h-6 w-6 text-accent mr-4 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-gray-700 font-semibold">Corporate Info:</p>
                    <p className="text-gray-700">CIN: U36999UR2017PTC007837</p>
                    <p className="text-gray-700">GST: 05AAJCP2128E1ZR</p>
                    <p className="text-gray-700">PAN: AAJCP2128E</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <FaGlobe className="h-6 w-6 text-accent mr-4 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-gray-700 font-semibold">Website:</p>
                    <a href="#" className="text-accent hover:text-primary transition-colors">www.puanaproducts.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-xl border border-secondary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-secondary/10 to-transparent transform rotate-12 translate-x-1/3" />
            <div className="relative">
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                <FaEnvelope className="mr-3 text-accent h-8 w-8" /> Drop Us a Line
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <FaUser className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm hover:shadow-md"
                    required
                  />
                </div>
                <div className="relative">
                  <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm hover:shadow-md"
                    required
                  />
                </div>
                <div className="relative">
                  <FaPhone className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm hover:shadow-md"
                    required
                  />
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message or Inquiry"
                    rows={5}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm hover:shadow-md resize-y min-h-[150px]"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center w-full md:w-auto px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-primary transition-colors group shadow-md hover:shadow-lg"
                >
                  Send Message
                  <FaPaperPlane className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Call-to-Action */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-xl border border-secondary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-accent/10 to-transparent transform rotate-12 translate-x-1/3" />
          <div className="relative text-center">
            <h3 className="text-3xl font-bold text-primary mb-4">Ready to Partner with Us?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              From business inquiries to collaboration opportunities, connect with us today and let’s create something extraordinary together.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="mailto:puanaproducts@gmail.com"
                className="flex items-center text-accent hover:text-primary font-semibold transition-colors group"
              >
                Email Us
                <FaPaperPlane className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </a>
              <a
                href="tel:9058370800"
                className="flex items-center text-accent hover:text-primary font-semibold transition-colors group"
              >
                Call Now
                <FaPhone className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
}