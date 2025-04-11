
import React from 'react';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const VisionSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section 
      id="vision" 
      className="relative py-24 bg-navy text-white overflow-hidden"
      ref={ref}
    >
      {/* Background pattern */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy via-gold to-navy"></div>
      <div 
        className="absolute inset-0 opacity-5"
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`section-title text-white mx-auto ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            Vision & Mission
          </h2>
          <p className={`text-white/80 ${inView ? 'animate-fade-in animate-delay-200' : 'opacity-0'}`}>
            My commitment to Nigeria's future is built on three foundational pillars that guide my work 
            in the Nigerian Youth Parliament.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision Card */}
          <div className={`bg-navy-light p-8 rounded-lg shadow-lg border-t-4 border-gold transition-all duration-500 hover:shadow-gold/20 hover:-translate-y-1 ${inView ? 'animate-fade-in animate-delay-100' : 'opacity-0'}`}>
            <div className="bg-gold/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Lightbulb className="text-gold h-8 w-8" />
            </div>
            <h3 className="font-montserrat font-bold text-2xl mb-4">Vision</h3>
            <p className="text-white/80">
              To create a Nigeria where youth are active architects of national policy, 
              with equal access to opportunities, education, and representation at all 
              levels of governance.
            </p>
          </div>
          
          {/* Mission Card */}
          <div className={`bg-navy-light p-8 rounded-lg shadow-lg border-t-4 border-gold transition-all duration-500 hover:shadow-gold/20 hover:-translate-y-1 ${inView ? 'animate-fade-in animate-delay-300' : 'opacity-0'}`}>
            <div className="bg-gold/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Target className="text-gold h-8 w-8" />
            </div>
            <h3 className="font-montserrat font-bold text-2xl mb-4">Mission</h3>
            <p className="text-white/80">
              To amplify youth voices, build leadership capacity, and create inclusive platforms 
              that empower Nigeria's next generation to tackle our nation's most pressing challenges 
              with innovative solutions.
            </p>
          </div>
          
          {/* Values Card */}
          <div className={`bg-navy-light p-8 rounded-lg shadow-lg border-t-4 border-gold transition-all duration-500 hover:shadow-gold/20 hover:-translate-y-1 ${inView ? 'animate-fade-in animate-delay-500' : 'opacity-0'}`}>
            <div className="bg-gold/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <TrendingUp className="text-gold h-8 w-8" />
            </div>
            <h3 className="font-montserrat font-bold text-2xl mb-4">Goals</h3>
            <p className="text-white/80">
              To transform Nigeria's policy landscape by ensuring 30% youth representation in 
              government by 2027, establishing youth advisory boards in all federal ministries, 
              and creating 100,000 digital skills opportunities by 2025.
            </p>
          </div>
        </div>
        
        <div className={`mt-16 text-center ${inView ? 'animate-fade-in animate-delay-700' : 'opacity-0'}`}>
          <a href="#projects" className="btn-primary">
            See My Initiatives
          </a>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
