'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white flex items-center pt-20 sm:pt-24">
      {/* Main Content */}
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Page Title */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1A2217] mb-2">
            Get In <span className="text-[#FFB500]">Touch</span>
          </h1>
          {/* Desktop: one line, Mobile: normal wrapping */}
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto sm:whitespace-nowrap sm:overflow-hidden sm:text-ellipsis">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white border border-[#FFB500]/20 rounded-xl p-5 md:p-6 shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A2217] mb-4">Send us a Message</h2>
            
            {submitted && (
              <div className="mb-4 p-3 bg-[#2C4224]/10 border border-[#2C4224] rounded-lg">
                <p className="text-[#2C4224] font-semibold text-sm">✓ Message sent successfully!</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium text-sm mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:border-[#FFB500] focus:ring-1 focus:ring-[#FFB500] transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:border-[#FFB500] focus:ring-1 focus:ring-[#FFB500] transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium text-sm mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message..."
                  rows="4"
                  className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:border-[#FFB500] focus:ring-1 focus:ring-[#FFB500] transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFB500] text-[#1A2217] py-2.5 rounded-lg font-bold text-sm hover:bg-[#FFC500] transition transform hover:scale-[1.02] shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-[#1A2217] to-[#2C4224] rounded-xl p-5 md:p-6 shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold text-[#FFB500] mb-3">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-[#FFB500] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-base text-[#1A2217]">✉️</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-0.5">Email</h4>
                    <a href="mailto:chalotrain@chalotrain.com" className="text-gray-300 hover:text-[#FFB500] transition text-sm">
                      chalotrain@chalotrain.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-[#FFB500] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-base text-[#1A2217]">📍</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-0.5">Location</h4>
                    <p className="text-gray-300 text-sm">Uttar Pradesh, India</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-[#FFB500] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-base text-[#1A2217]">🚄</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-0.5">Support Type</h4>
                    <p className="text-gray-300 text-sm">Email support only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-white border border-[#FFB500]/20 rounded-xl p-4 shadow-sm">
              <p className="text-gray-600 text-xs sm:text-sm">
                We typically respond to all inquiries within <span className="font-bold text-[#FFB500]">24-48 hours</span>. Please provide as much detail as possible to help us assist you better.
              </p>
            </div>

            {/* Quick Links */}
            <div className="bg-white border border-[#FFB500]/20 rounded-xl p-4 shadow-sm">
              <h4 className="text-base font-bold text-[#1A2217] mb-2">Quick Links</h4>
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                <a href="/about" className="text-gray-600 hover:text-[#FFB500] transition">About Us</a>
                <span className="text-gray-300">•</span>
                <a href="/privacy-policy" className="text-gray-600 hover:text-[#FFB500] transition">Privacy Policy</a>
                <span className="text-gray-300">•</span>
                <a href="/terms" className="text-gray-600 hover:text-[#FFB500] transition">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}