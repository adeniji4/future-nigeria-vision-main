
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-16",
        isScrolled ? "bg-navy shadow-lg py-2" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white font-montserrat font-bold text-xl md:text-2xl z-50">
          ANISERE<span className="text-green">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Vision', 'Projects', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-white hover:text-green transition-colors duration-300 nav-link font-medium"
            >
              {item}
            </a>
          ))}
          <button className="btn-primary flex items-center">
            Get Involved <ChevronDown className="ml-2 h-4 w-4" />
          </button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Navigation Menu */}
        <div className={cn(
          "fixed inset-0 bg-navy flex flex-col justify-center items-center transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}>
          <nav className="flex flex-col items-center space-y-6">
            {['Home', 'About', 'Vision', 'Projects', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-white hover:text-green text-2xl transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button 
              className="btn-primary mt-6"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Involved
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
