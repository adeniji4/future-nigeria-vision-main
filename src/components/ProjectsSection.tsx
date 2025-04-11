
import React from 'react';
import { Laptop, Users, Book, Megaphone, GraduationCap, Globe } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Digital Nigeria Initiative',
    description: 'Bridging the digital divide by providing tech education and resources to underserved communities.',
    icon: <Laptop className="h-8 w-8 text-gold" />,
    stats: '50+ youths trained',
  },
  {
    title: 'Youth Policy Forum',
    description: 'Creating platforms for youth to engage directly with policymakers on issues that affect their future.',
    icon: <Users className="h-8 w-8 text-gold" />,
    stats: '10+ policy recommendations adopted',
  },
  {
    title: 'Future Leaders Mentorship',
    description: 'Connecting aspiring young leaders with established professionals across various sectors.',
    icon: <Book className="h-8 w-8 text-gold" />,
    stats: '50+ mentorship matches',
  },
  {
    title: 'Youth Voice Campaign',
    description: 'Advocating for increased youth representation in governance and decision-making processes.',
    icon: <Megaphone className="h-8 w-8 text-gold" />,
    stats: '10+ youth candidates supported',
  },
  {
    title: 'Education Access Program',
    description: 'Providing scholarships and educational support to talented students from low-income backgrounds.',
    icon: <GraduationCap className="h-8 w-8 text-gold" />,
    stats: '10+ scholarships awarded',
  },
  {
    title: 'Pan-African Youth Network',
    description: 'Building connections between Nigerian youth and their peers across the African continent.',
    icon: <Globe className="h-8 w-8 text-gold" />,
    stats: '5 countries connected',
  },
];

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="py-24 bg-slate" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`section-title text-navy mx-auto ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            Projects & Initiatives
          </h2>
          <p className={`text-navy-light ${inView ? 'animate-fade-in animate-delay-200' : 'opacity-0'}`}>
            Through these key initiatives, I'm working to create tangible impact and 
            lasting change for Nigerian youth across the nation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`project-card bg-white rounded-lg shadow-md overflow-hidden ${
                inView ? `animate-fade-in animate-delay-${(index * 100) % 500}` : 'opacity-0'
              }`}
            >
              <div className="p-6">
                <div className="mb-4">
                  {project.icon}
                </div>
                <h3 className="font-montserrat font-bold text-xl text-navy mb-2">
                  {project.title}
                </h3>
                <p className="text-navy-light mb-4">
                  {project.description}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-dark">
                  <span className="text-gold font-semibold">{project.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`mt-16 text-center ${inView ? 'animate-fade-in animate-delay-700' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded">
            <span className="font-montserrat font-semibold">Impact so far:</span>
            <span className="text-gold font-bold">1000+ youths empowered</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
