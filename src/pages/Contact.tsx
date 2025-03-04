

// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import { 
//   FaMapMarkerAlt, 
//   FaPhone, 
//   FaEnvelope, 
//   FaBuilding, 
//   FaUser, 
//   FaPaperPlane, 
//   FaGlobe

// } from 'react-icons/fa';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// // Define interface for form data
// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
// }

// // Define props interface (empty since no props are passed)
// interface ContactProps {}

// const Contact: React.FC<ContactProps> = () => {
//   // Form state with type
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   // Handle input changes with typed event
//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
//     const { name, value } = e.target;
//     setFormData((prev: FormData) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Handle form submission with typed event
//   const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
//     e.preventDefault();
//     console.log('Contact Form Submitted:', formData);
//     alert('Thank you for your message! We’ll get back to you soon.');
//     setFormData({ name: '', email: '', phone: '', message: '' });
//   };

//   return (
//     <div>
//       <Header />
//       <section id="contact-us" className="py-20 bg-gradient-to-b from-secondary/5 to-white">
//         {/* Banner */}
//         <div
//           className="relative h-96 mb-16 bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
//           style={{
//             backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
//             backgroundSize: 'cover',
//             backgroundPosition: 'center'
//           }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/30"></div>
//           <div className="relative text-center px-4">
//             <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Let’s Connect</h1>
//             <p className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md">
//               Your gateway to collaboration, support, and innovation starts here
//             </p>
//           </div>
//         </div>

//         <div className="container mx-auto px-4">
//           {/* Introduction */}
//           <div className="text-center mb-16">
//             <span className="text-accent font-semibold mb-2 block uppercase tracking-widest">
//               REACH OUT
//             </span>
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
//               We’re Just a Message Away
//             </h2>
//             <p className="text-lg text-gray-700 max-w-3xl mx-auto">
//               Whether it’s a question, a partnership idea, or a friendly chat, our team is eager to hear from you.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12">
//             {/* Enhanced Contact Information */}
//             <div className="bg-white rounded-xl p-8 shadow-xl border border-secondary/20 relative overflow-hidden">
//               <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-bl from-accent/10 to-transparent transform -rotate-12 -translate-x-1/3" />
//               <div className="relative">
//                 <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
//                   <FaBuilding className="mr-3 text-accent h-8 w-8" /> Contact Details
//                 </h3>
//                 <div className="space-y-6">
//                   <div className="flex items-start group">
//                     <FaMapMarkerAlt className="h-6 w-6 text-accent mr-4 mt-1 group-hover:scale-110 transition-transform" />
//                     <div>
//                       <p className="text-gray-700 font-semibold">Head Office:</p>
//                       <p className="text-gray-700">
//                         B149-150 Eldeco SIDCUL Industrial Park,<br />
//                         IIE SITARGANJ, Uttarakhand, India - 262405
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-start group">
//                     <FaPhone className="h-6 w-6 text-accent mr-4 mt-1 group-hover:scale-110 transition-transform" />
//                     <div>
//                       <p className="text-gray-700 font-semibold">Phone Numbers:</p>
//                       <p className="text-gray-700">Sandeep Mandal - 9058370800</p>
//                       <p className="text-gray-700">Chandan Singh Bisht - 98979 63106</p>
//                       <p className="text-gray-700">Customer Support - 93106 08890</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start group">
//                     <FaEnvelope className="h-6 w-6 text-accent mr-4 mt-1 group-hover:scale-110 transition-transform" />
//                     <div>
//                       <p className="text-gray-700 font-semibold">Email:</p>
//                       <p className="text-gray-700">sales@puanapackaging.com</p>
                    
//                     </div>
//                   </div>
                 
//                   <div className="flex items-start group">
//                     <FaBuilding className="h-6 w-6 text-accent mr-4 mt-1 group-hover:scale-110 transition-transform" />
//                     <div>
//                       <p className="text-gray-700 font-semibold">Corporate Info:</p>
//                       <p className="text-gray-700">CIN: U36999UR2017PTC007837</p>
//                       <p className="text-gray-700">GST: 05AAJCP2128E1ZR</p>
//                       <p className="text-gray-700">PAN: AAJCP2128E</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start group">
//                     <FaGlobe className="h-6 w-6 text-accent mr-4 mt-1 group-hover:scale-110 transition-transform" />
//                     <div>
//                       <p className="text-gray-700 font-semibold">Website:</p>
//                       <a href="#" className="text-accent hover:text-primary transition-colors">www.puanapackaging.com</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Enhanced Contact Form */}
//             <div className="bg-white rounded-xl p-8 shadow-xl border border-secondary/20 relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-secondary/10 to-transparent transform rotate-12 translate-x-1/3" />
//               <div className="relative">
//                 <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
//                   <FaEnvelope className="mr-3 text-accent h-8 w-8" /> Drop Us a Line
//                 </h3>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="relative">
//                     <FaUser className="absolute top-3 left-3 text-gray-400" />
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="Full Name"
//                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm hover:shadow-md"
//                       required
//                     />
//                   </div>
//                   <div className="relative">
//                     <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="Email Address"
//                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm hover:shadow-md"
//                       required
//                     />
//                   </div>
//                   <div className="relative">
//                     <FaPhone className="absolute top-3 left-3 text-gray-400" />
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="Phone Number"
//                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm hover:shadow-md"
//                       required
//                     />
//                   </div>
//                   <div className="relative">
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       placeholder="Your Message or Inquiry"
//                       rows={5}
//                       className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm hover:shadow-md resize-y min-h-[150px]"
//                       required
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     className="flex items-center justify-center w-full md:w-auto px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-primary transition-colors group shadow-md hover:shadow-lg"
//                   >
//                     Send Message
//                     <FaPaperPlane className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>

//           {/* Additional Call-to-Action */}
//           <div className="mt-16 bg-white rounded-xl p-8 shadow-xl border border-secondary/20 relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-accent/10 to-transparent transform rotate-12 translate-x-1/3" />
//             <div className="relative text-center">
//               <h3 className="text-3xl font-bold text-primary mb-4">Ready to Partner with Us?</h3>
//               <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
//                 From business inquiries to collaboration opportunities, connect with us today and let’s create something extraordinary together.
//               </p>
//               <div className="flex justify-center gap-6">
//                 <a
//                   href="mailto:sales@puanapackaging.com"
//                   className="flex items-center text-accent hover:text-primary font-semibold transition-colors group"
//                 >
//                   Email Us
//                   <FaPaperPlane className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
//                 </a>
//                 <a
//                   href="tel:98979 63106"
//                   className="flex items-center text-accent hover:text-primary font-semibold transition-colors group"
//                 >
//                   Call Now
//                   <FaPhone className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default Contact;




import React, { useState } from "react";
import { MapPin, Phone, Mail, Building } from "lucide-react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailData = {
      to_name: "Admin", // Change this if needed
      from_name: formData.name, // Ensure this matches EmailJS template
      phone: formData.phone,
      email: formData.email,
      description: formData.message, // Ensure this matches EmailJS template
    };

    emailjs
      .send(
        "service_x5cikxi", // Replace with your EmailJS service ID
        "template_ahvoigx", // Replace with your EmailJS template ID
        emailData,
        "mEQbxrROUPlsb-gSM" // Replace with your EmailJS public key
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <div>
      <Header/>
      <section id="contact-us" className="py-20 bg-secondary/10">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-primary">Get in Touch</h2>
          <p className="text-lg text-gray-700">Reach out to us for any inquiries or collaboration opportunities</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-secondary">
              <h3 className="text-2xl font-bold mb-6 text-primary">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-accent mr-4 mt-1" />
                  <p className="text-gray-700">B149-150 Eldeco SIDCUL Industrial Park, IIE SITARGANJ, Uttarakhand</p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-accent mr-4" />
                  <div>
                    <p className="text-gray-700">Sandeep Mandal - 9058370800</p>
                    <p className="text-gray-700">Chandan Singh Bisht - 98979 63106</p>
                    <p className="text-gray-700">Support - 9310608890</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-accent mr-4" />
                  <p className="text-gray-700">puanaproducts@gmail.com</p>
                </div>
                  <div className="flex items-center">
                                  <Mail className="h-6 w-6 text-accent mr-4" />
                                  <p className="text-gray-700">sales@puanapackaging.com</p>
                    </div>
                <div className="flex items-center">
                  <Building className="h-6 w-6 text-accent mr-4" />
                  <div>
                    <p className="text-gray-700">CIN: U36999UR2017PTC007837</p>
                    <p className="text-gray-700">GST: 05AAJCP2128E1ZR</p>
                    <p className="text-gray-700">PAN: AAJCP2128E</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-secondary">
            <h3 className="text-2xl font-bold mb-6 text-primary">Send us a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-secondary rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-secondary rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-secondary rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-secondary rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-lg transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
}
