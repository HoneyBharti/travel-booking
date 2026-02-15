import React from "react";

const Footer = () => {

  return (
  <footer className="bg-[#1A2217] border-t border-[#FFB500]/20 mt-16">
    
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    
    <div className="grid md:grid-cols-4 gap-8 mb-8">
        
      <div>
        <h4 className="text-[#FFB500] font-bold mb-4">ChaloTrain</h4>
        <p className="text-gray-300 text-sm">Your trusted travel companion</p>
      </div>
      <div>
        <h4 className="text-[#FFB500] font-bold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm text-gray-300">
          <li><a href="/" className="hover:text-[#FFB500] transition">Home</a></li>
          <li><a href="/about" className="hover:text-[#FFB500] transition">About Us</a></li>
          <li><a href="/contact" className="hover:text-[#FFB500] transition">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-[#FFB500] font-bold mb-4">Legal</h4>
        <ul className="space-y-2 text-sm text-gray-300">
          <li><a href="/privacy-policy" className="hover:text-[#FFB500] transition">Privacy Policy</a></li>
          <li><a href="/terms" className="hover:text-[#FFB500] transition">Terms & Conditions</a></li>
          <li><a href="/about" className="hover:text-[#FFB500] transition">Disclaimer</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-[#FFB500] font-bold mb-4">Support</h4>
        {/* Email as clickable mailto link */}
        <a 
          href="mailto:chalotrain@chalotrain.com" 
          className="text-sm text-gray-300 hover:text-[#FFB500] transition"
        >
          chalotrain@chalotrain.com
        </a>
      </div>
    </div>
    <div className="border-t border-[#FFB500]/20 pt-8 text-center text-gray-300 text-sm">
      <p>&copy; 2026 ChaloTrain. All rights reserved.</p>
    </div>
  </div>
</footer>
  );
};

export default Footer;