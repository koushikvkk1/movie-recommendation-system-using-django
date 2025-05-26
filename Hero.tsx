
import React from 'react';
import { Play, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1489599904472-284d04d17f69?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-20 text-white max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          CineMatch
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Discover your next favorite movie with AI-powered recommendations tailored just for you
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
            <Play className="mr-2 h-5 w-5" />
            Start Exploring
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg rounded-full transition-all duration-300">
            <Info className="mr-2 h-5 w-5" />
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 left-10 w-1 h-1 bg-white rounded-full animate-ping"></div>
    </div>
  );
};

export default Hero;
