import React from 'react';
import { MapPin, Phone, Mail, Building } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact-us" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-primary">Get in Touch</h2>
          <p className="text-lg text-gray-700">
            Reach out to us for any inquiries or collaboration opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-secondary">
              <h3 className="text-2xl font-bold mb-6 text-primary">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-accent mr-4 mt-1" />
                  <p className="text-gray-700">
                    B149-150 Eldeco SIDCUL Industrial Park,<br />
                    IIE SITARGANJ, Uttarakhand
                  </p>
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

          <div className="bg-white rounded-xl p-8 shadow-lg border border-secondary">
            <h3 className="text-2xl font-bold mb-6 text-primary">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-secondary rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-secondary rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-secondary rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-secondary rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}