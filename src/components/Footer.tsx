
import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-navy-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="font-montserrat font-bold text-xl">
              ANISERE<span className="text-green">.</span>
            </h3>
            <p className="text-white/70 mt-2">Empowering the Next Generation</p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="bg-navy-light hover:bg-navy p-3 rounded-full transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp className="text-green h-5 w-5" />
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between border-t border-white/10 pt-6">
          <div className="mb-4 md:mb-0">
            <p className="text-white/50 text-sm">
              &copy; {new Date().getFullYear()} Anisere Peter. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="text-white/70 hover:text-green text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 hover:text-green text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-white/70 hover:text-green text-sm transition-colors duration-200">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
