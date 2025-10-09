import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import dashboardImage from '../assets/images.jpg';

const Hero = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    if (!imageElement) return;

    const handleScroll = () => {
      if (window.scrollY > 100) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center">
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl pb-6 font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Dress Smarter, Not Harder <br /> with Your AI Stylist
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Get daily, personalized outfit suggestions from an AI that knows your wardrobe, your schedule, and the weather.
        </p>
        <div className="flex justify-center items-center space-x-4 mb-16">
        
          <a href="/dashboard">
            <Button size="lg" className="px-8 bg-black text-white hover:bg-gray-800">
              Get Started
            </Button>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="ghost" className="px-8">
              Watch Demo
            </Button>
          </a>
        </div>

        
        <div className="hero-image-wrapper">
          <div ref={imageRef} className="hero-image">
            <img
              src={dashboardImage} // Use your actual dashboard image
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

