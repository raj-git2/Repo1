import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-700 to-indigo-800">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Learn New Skills, Grow Your Business
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
            Financial education and tools designed for entrepreneurs to build sustainable businesses
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              as={Link}
              to="/signup"
              variant="primary"
              size="lg"
              className="px-8 py-3 text-lg"
            >
              Get Started Free
            </Button>
            <Button 
              as={Link}
              to="/courses"
              variant="secondary"
              size="lg"
              className="px-8 py-3 text-lg bg-white text-blue-700 hover:bg-gray-100"
            >
              Browse Courses
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;