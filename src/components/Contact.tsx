

import React, { useState } from "react";
import { MapPin, Phone, Mail, Building } from "lucide-react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-accent mr-4" />
                  <p className="text-gray-700">puanaproducts@gmail.com</p>
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
  );
}
