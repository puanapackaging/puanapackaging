import React, { useState } from 'react';
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaFileUpload, 
  FaPaperPlane, 
  FaBriefcase, 
  FaArrowRight 
} from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Careers() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null,
    coverLetter: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you can add logic to send the form data to an API or server
    alert('Thank you for your application! We’ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', position: '', resume: null, coverLetter: '' });
  };

  return (
   <div>
    <Header/>

    <section id="careers" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Banner */}
      <div className="relative h-96 mb-16 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
          alt="Careers Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Join Our Team</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md">
              Build your career with a leader in innovative manufacturing
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Introduction */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold mb-2 block uppercase tracking-widest">
            CAREER OPPORTUNITIES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Shape the Future with Us
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We’re looking for talented individuals to join our dynamic team. Explore opportunities 
            and grow with a company committed to excellence and innovation.
          </p>
        </div>

        {/* Job Application Form */}
        <div className="bg-white rounded-xl p-8 shadow-xl border border-secondary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-secondary/10 to-transparent transform rotate-12 translate-x-1/3" />
          <div className="relative">
            <div className="flex items-center mb-8">
              <h3 className="text-3xl font-bold text-primary flex items-center">
                <FaBriefcase className="mr-3 text-accent" /> Apply Now
              </h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="relative">
                  <FaUser className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
                {/* Email */}
                <div className="relative">
                  <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
                {/* Phone */}
                <div className="relative">
                  <FaPhone className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
                {/* Position */}
                <div className="relative">
                  <FaBriefcase className="absolute top-3 left-3 text-gray-400" />
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent appearance-none"
                    required
                  >
                    <option value="" disabled>Select Position</option>
                    <option value="Production Supervisor">Production Supervisor</option>
                    <option value="Quality Control Engineer">Quality Control Engineer</option>
                    <option value="Packaging Specialist">Packaging Specialist</option>
                    <option value="Maintenance Technician">Maintenance Technician</option>
                    <option value="R&D Scientist">R&D Scientist</option>
                  </select>
                </div>
              </div>
              {/* Resume Upload */}
              <div className="relative">
                <FaFileUpload className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-accent file:text-white hover:file:bg-primary"
                  required
                />
              </div>
              {/* Cover Letter */}
              <div className="relative">
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  placeholder="Tell us why you’re a great fit (optional)"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-y min-h-[120px]"
                />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="flex items-center justify-center w-full md:w-auto px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-primary transition-colors group"
              >
                Submit Application
                <FaPaperPlane className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Open Positions Teaser */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">Current Openings</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Check out some of our available positions and apply today!
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Production Supervisor', desc: 'Oversee manufacturing operations' },
              { title: 'Quality Control Engineer', desc: 'Ensure product excellence' },
              { title: 'R&D Scientist', desc: 'Innovate new solutions' }
            ].map((job) => (
              <div key={job.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold text-primary">{job.title}</h4>
                <p className="text-gray-600 mt-2">{job.desc}</p>
              </div>
            ))}
          </div>
          <button className="mt-8 flex items-center mx-auto text-accent hover:text-primary font-semibold transition-colors group">
            View All Positions
            <FaArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
    <Footer/>
   </div>
  );
}