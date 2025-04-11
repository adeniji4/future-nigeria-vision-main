
import React, { useEffect } from 'react';
import { Award, BookOpen, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 bg-slate">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${inView ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <h2 className="section-title text-navy">About Anisere Peter</h2>
            <p className="text-navy-light mb-6">
              As a dedicated member of the Nigerian Youth Parliament, I bring fresh perspective 
              and passionate advocacy for Nigeria's next generation of leaders.
            </p>
            <p className="text-navy-light mb-6">
              With a background in Political Science from the University of Lagos and extensive 
              community development experience, I've dedicated my career to amplifying youth voices 
              and creating platforms for meaningful participation in governance.
            </p>
            <p className="text-navy-light mb-8">
              My work in the Parliament focuses on education reform, youth entrepreneurship, and digital 
              inclusion—three pillars I believe are essential for Nigeria's sustainable development 
              and prosperous future.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                <Award className="text-green h-10 w-10 mb-3" />
                <h3 className="font-montserrat font-semibold text-navy">2+ Years</h3>
                <p className="text-navy-light text-sm text-center">In Nigerian Youth Parliament</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                <Users className="text-green h-10 w-10 mb-3" />
                <h3 className="font-montserrat font-semibold text-navy">100+</h3>
                <p className="text-navy-light text-sm text-center">Youths Empowered</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                <BookOpen className="text-green h-10 w-10 mb-3" />
                <h3 className="font-montserrat font-semibold text-navy">15+</h3>
                <p className="text-navy-light text-sm text-center">Initiatives Launched</p>
              </div>
            </div>
          </div>
          
          <div className={`relative h-[500px] rounded-lg overflow-hidden ${inView ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <img 
              src="/Photos/IMG_4571.jpg" 
              alt="Anisere Peter - Nigerian Youth Parliament" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy p-6">
              <div className="inline-block bg-green px-4 py-2 rounded-full text-white font-medium text-sm mb-2">
                Member, Nigerian Youth Parliament
              </div>
              <h3 className="text-white font-montserrat font-bold text-2xl">Anisere Peter</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
