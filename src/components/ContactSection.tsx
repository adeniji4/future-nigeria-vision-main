
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. We'll respond to you shortly.",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-navy text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`section-title text-white mx-auto ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            Get Involved
          </h2>
          <p className={`text-white/80 ${inView ? 'animate-fade-in animate-delay-200' : 'opacity-0'}`}>
            Join me in building a better future for Nigerian youth. Together, we can create 
            meaningful change and empower the next generation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={inView ? 'animate-fade-in-left' : 'opacity-0'}>
            <div className="bg-navy-light rounded-lg p-8">
              <h3 className="font-montserrat font-bold text-2xl mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gold/10 p-3 rounded-full mr-4">
                    <Mail className="text-gold h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email</p>
                    <p className="text-white">contact@aniserepeter.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gold/10 p-3 rounded-full mr-4">
                    <Phone className="text-gold h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Phone</p>
                    <p className="text-white">08012345678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gold/10 p-3 rounded-full mr-4">
                    <MapPin className="text-gold h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Office</p>
                    <p className="text-white">Nigerian Youth Parliament, Abuja, Federal Capital Territory</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-montserrat font-medium text-xl mb-4">Connect on Social Media</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-gold/10 hover:bg-gold/20 p-3 rounded-full transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="text-gold h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="bg-gold/10 hover:bg-gold/20 p-3 rounded-full transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter className="text-gold h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="bg-gold/10 hover:bg-gold/20 p-3 rounded-full transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="text-gold h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="bg-gold/10 hover:bg-gold/20 p-3 rounded-full transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="text-gold h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={inView ? 'animate-fade-in-right' : 'opacity-0'}>
            <form onSubmit={handleSubmit} className="bg-navy-light rounded-lg p-8">
              <h3 className="font-montserrat font-bold text-2xl mb-6">Send a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-navy border border-white/20 rounded-md px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-navy border border-white/20 rounded-md px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="Your email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white/80 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-navy border border-white/20 rounded-md px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="How would you like to get involved?"
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
