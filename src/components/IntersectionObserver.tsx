
import React, { useEffect, useRef } from 'react';

const IntersectionObserver = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elementsToAnimate = document.querySelectorAll('.animate-reveal');
    elementsToAnimate.forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => {
      if (observerRef.current) {
        elementsToAnimate.forEach((element) => {
          observerRef.current?.unobserve(element);
        });
      }
    };
  }, []);

  return null;
};

export default IntersectionObserver;
