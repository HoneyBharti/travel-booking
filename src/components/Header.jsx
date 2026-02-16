import { TrainFront, Menu, X } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation(); // Get current location

  // Close when clicking outside menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Handle navigation and close menu
  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  // Function to check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* ================= FIXED HEADER ================= */}
      <div className="fixed top-0 left-0 right-0 z-[999] w-full flex justify-center bg-transparent">
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 py-2 sm:py-3">
          <div className="relative">
            <header
              className={`
                w-full
                bg-[#1A2217]/90
                backdrop-blur-md
                shadow-[0_8px_30px_rgba(0,0,0,0.4)]
                rounded-full
                px-5 sm:px-6 md:px-8
                py-3 md:py-4
                relative
                transition-all duration-300
                ${isMenuOpen ? 'lg:rounded-full rounded-b-none rounded-t-full' : 'rounded-full'}
              `}
            >
              <div className="flex items-center justify-between">
                
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
                  <div className="bg-yellow-400 p-1.5 sm:p-2 rounded-full">
                    <TrainFront className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  </div>
                  <span className="text-yellow-400 font-semibold text-base sm:text-lg md:text-xl">
                    ChaloTrain
                  </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-6 xl:gap-10 text-white font-medium text-sm xl:text-base">
                  <Link 
                    to="/" 
                    onClick={() => window.scrollTo(0, 0)}
                    className={`hover:text-yellow-400 transition ${isActive("/") ? "text-yellow-400" : "text-white"}`}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/about" 
                    onClick={() => window.scrollTo(0, 0)}
                    className={`hover:text-yellow-400 transition ${isActive("/about") ? "text-yellow-400" : "text-white"}`}
                  >
                    About Us
                  </Link>
                  <Link 
                    to="/privacy-policy" 
                    onClick={() => window.scrollTo(0, 0)}
                    className={`hover:text-yellow-400 transition ${isActive("/privacy-policy") ? "text-yellow-400" : "text-white"}`}
                  >
                    Policy
                  </Link>
                  <Link 
                    to="/terms" 
                    onClick={() => window.scrollTo(0, 0)}
                    className={`hover:text-yellow-400 transition ${isActive("/terms") ? "text-yellow-400" : "text-white"}`}
                  >
                    Terms & Condition
                  </Link>
                  <Link 
                    to="/contact" 
                    onClick={() => window.scrollTo(0, 0)}
                    className={`hover:text-yellow-400 transition ${isActive("/contact") ? "text-yellow-400" : "text-white"}`}
                  >
                    Contact Us
                  </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden text-yellow-400 p-2 relative z-10"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </header>

            {/* ================= MOBILE DROPDOWN MENU ================= */}
            {isMenuOpen && (
              <div 
                ref={menuRef}
                className="lg:hidden absolute left-0 right-0 bg-[#1A2217]/95 backdrop-blur-xl shadow-2xl rounded-b-2xl rounded-t-none border-x border-b border-white/10 overflow-hidden animate-expandDown"
                style={{
                  top: 'calc(100% - 4px)',
                  borderTop: 'none'
                }}
              >
                <nav className="flex flex-col">
                  <button 
                    onClick={() => handleNavigation("/")} 
                    className={`text-left px-5 py-4 hover:bg-white/5 transition ${isActive("/") ? "text-yellow-400" : "text-white"} border-t border-white/10 first:border-t-0`}
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => handleNavigation("/about")} 
                    className={`text-left px-5 py-4 hover:bg-white/5 transition ${isActive("/about") ? "text-yellow-400" : "text-white"} border-t border-white/10`}
                  >
                    About Us
                  </button>
                  <button 
                    onClick={() => handleNavigation("/privacy-policy")} 
                    className={`text-left px-5 py-4 hover:bg-white/5 transition ${isActive("/privacy-policy") ? "text-yellow-400" : "text-white"} border-t border-white/10`}
                  >
                    Policy
                  </button>
                  <button 
                    onClick={() => handleNavigation("/terms")} 
                    className={`text-left px-5 py-4 hover:bg-white/5 transition ${isActive("/terms") ? "text-yellow-400" : "text-white"} border-t border-white/10`}
                  >
                    Terms & condition
                  </button>
                  <button 
                    onClick={() => handleNavigation("/contact")} 
                    className={`text-left px-5 py-4 hover:bg-white/5 transition ${isActive("/contact") ? "text-yellow-400" : "text-white"} border-t border-white/10`}
                  >
                    Contact Us
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;