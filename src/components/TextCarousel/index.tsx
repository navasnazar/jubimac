"use client";
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import React from 'react';
import { useGSAP } from '@gsap/react';

type TextCarouselProps = {
  texts: React.ReactNode[];
  duration?: number;
  delay?: number;
};

const TextCarousel = ({ texts, duration = 1, delay = 2 }: TextCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    const timeline = gsap.timeline({ repeat: -1, delay });
    
    texts.forEach((text, index) => {
      timeline
        .to(`#carouselText`, {
          duration: duration,
          opacity: 0,
          onComplete: () => {
            setCurrentIndex(index);
          }
        })
        .to(`#carouselText`, {
          duration: duration,
          opacity: 1,
        });
    });

    return () => {
      timeline.kill();
    };
  }, [texts, duration, delay]);

  return (
    <div className="carousel-text">
      {texts[currentIndex]}
    </div>
  );
};

export default TextCarousel;
