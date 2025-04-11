
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-navy">
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to top, rgba(30, 42, 69, 1) 0%, rgba(30, 42, 69, 0.7) 100%)',
          }}
        />
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/Photos/IMG_4573.jpg"
            alt="Nigerian Youth Parliament - Anisere Peter"
            className="w-full h-90 object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h1 className="font-montserrat font-bold text-white text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Empowering the <span className="text-gradient">Next Generation</span> of Nigerian Leaders
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Member of the Nigerian Youth Parliament committed to driving positive change, fostering youth participation, and building a stronger future for Nigeria.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <a href="#vision" className={`btn-primary ${isLoaded ? 'animate-fade-in animate-delay-300' : 'opacity-0'}`}>
              Discover My Vision
            </a>
            <a href="#contact" className={`btn-secondary ${isLoaded ? 'animate-fade-in animate-delay-500' : 'opacity-0'}`}>
              Get In Touch
            </a>
          </div>
          
          <div className={`mt-16 ${isLoaded ? 'animate-fade-in animate-delay-700' : 'opacity-0'}`}>
            <a 
              href="#about" 
              className="inline-flex items-center text-white hover:text-green transition-colors duration-300"
            >
              <span className="mr-2">Scroll to explore</span>
              <div className="animate-float">
                <ArrowRight className="h-5 w-5" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
