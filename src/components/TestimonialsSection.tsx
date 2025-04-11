
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Anisere's passion for youth development is unmatched. His work in the Nigerian Youth Parliament has brought transformative policies that directly benefit young Nigerians.",
    author: "Hon. Ibrahim Mohammed",
    position: "Deputy Speaker, House of Representatives",
    image: "https://politicsnigeria.com/wp-content/uploads/2023/07/Seal_of_the_House_of_Representatives_of_Nigeria.svg_.png"
  },
  {
    quote: "Working with Anisere on the Digital Nigeria Initiative has been inspiring. His vision and ability to execute projects that empower youth is exactly what our country needs.",
    author: "Dr. Amina Abubakar",
    position: "Minister of Digital Economy",
    image: "https://politicsnigeria.com/wp-content/uploads/2023/07/Seal_of_the_House_of_Representatives_of_Nigeria.svg_.png"
  },
  {
    quote: "As a young entrepreneur who benefited from his mentorship program, I can attest to Anisere's genuine commitment to creating opportunities for Nigeria's youth.",
    author: "Chioma Okafor",
    position: "CEO, TechNaija Solutions",
    image: "https://politicsnigeria.com/wp-content/uploads/2023/07/Seal_of_the_House_of_Representatives_of_Nigeria.svg_.png"
  },
  {
    quote: "Few politicians truly understand and advocate for youth interests like Anisere does. His contributions to education reform have been groundbreaking.",
    author: "Prof. Samuel Adeyemi",
    position: "Vice Chancellor, Lagos State University",
    image: "https://politicsnigeria.com/wp-content/uploads/2023/07/Seal_of_the_House_of_Representatives_of_Nigeria.svg_.png"
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Auto-rotate testimonials
  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section id="testimonials" className="py-24 bg-slate" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`section-title text-navy mx-auto ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            Endorsements
          </h2>
          <p className={`text-navy-light ${inView ? 'animate-fade-in animate-delay-200' : 'opacity-0'}`}>
            Hear what colleagues, mentors, and supporters have to say about my work and vision.
          </p>
        </div>

        <div className={`max-w-4xl mx-auto ${inView ? 'animate-fade-in animate-delay-300' : 'opacity-0'}`}>
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="min-w-full px-4"
                >
                  <div className="bg-white rounded-lg shadow-lg p-8 relative">
                    <Quote className="text-gold/20 h-16 w-16 absolute top-4 left-4" />
                    <div className="relative z-10">
                      <p className="text-navy-light text-lg mb-6 italic relative z-10">
                        "{testimonial.quote}"
                      </p>
                      
                      <div className="flex items-center">
                        <div className="h-14 w-14 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-montserrat font-semibold text-navy">
                            {testimonial.author}
                          </h4>
                          <p className="text-navy-light text-sm">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`mx-1 w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? 'bg-gold w-6' : 'bg-navy-light/30'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
