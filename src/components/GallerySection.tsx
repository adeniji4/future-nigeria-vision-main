
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  {
    type: 'image',
    src: '/Photos/IMG_4571.jpg',
    caption: 'Anisere Peter in traditional attire',
  },
  {
    type: 'image',
    src: '/Photos/IMG_4572.jpg',
    caption: 'At the Nigerian Senate with colleagues',
  },
  {
    type: 'image',
    src: '/Photos/IMG_4573.jpg',
    caption: 'Community youth engagement event',
  },
  {
    type: 'image',
    src: '/Photos/IMG_4574.jpg',
    caption: 'International diplomatic visit',
  },
  {
    type: 'image',
    src: '/Photos/IMG_4575.jpg',
    caption: 'Casual portrait during winter',
  },
  {
    type: 'image',
    src: 'https://politicsnigeria.com/wp-content/uploads/2023/07/Seal_of_the_House_of_Representatives_of_Nigeria.svg_.png',
    caption: 'Addressing the National Assembly',
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  const navigateLightbox = (direction: 'next' | 'prev') => {
    if (selectedImage === null) return;
    
    if (direction === 'next') {
      setSelectedImage((selectedImage + 1) % galleryItems.length);
    } else {
      setSelectedImage((selectedImage - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        navigateLightbox('next');
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox('prev');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-24 bg-navy" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`section-title text-white mx-auto ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            Gallery & Media
          </h2>
          <p className={`text-white/80 ${inView ? 'animate-fade-in animate-delay-200' : 'opacity-0'}`}>
            Moments from my journey in public service and youth advocacy across Nigeria.
          </p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${inView ? 'animate-fade-in animate-delay-300' : 'opacity-0'}`}>
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg cursor-pointer h-64 group"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={item.src} 
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={closeLightbox}>
            <button 
              className="absolute top-4 right-4 text-white hover:text-green z-10"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              <X className="h-8 w-8" />
            </button>
            
            <button 
              className="absolute left-4 text-white hover:text-green z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('prev');
              }}
            >
              <ChevronLeft className="h-12 w-12" />
            </button>
            
            <button 
              className="absolute right-4 text-white hover:text-green z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('next');
              }}
            >
              <ChevronRight className="h-12 w-12" />
            </button>
            
            <div className="max-w-4xl max-h-[80vh] relative" onClick={(e) => e.stopPropagation()}>
              <img 
                src={galleryItems[selectedImage].src} 
                alt={galleryItems[selectedImage].caption}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-navy/80 p-4 text-white">
                <p>{galleryItems[selectedImage].caption}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
