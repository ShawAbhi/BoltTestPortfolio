import React from 'react';
import { Code2, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20" />
          <h1 className="text-5xl md:text-7xl font-bold relative">
            Gameplay Programmer
            <br />& Technical Artist
          </h1>
        </div>
        
        <div className="mt-8 flex justify-center gap-4">
          <Code2 className="w-8 h-8 text-blue-500" />
          <Sparkles className="w-8 h-8 text-purple-500" />
        </div>
        
        <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
          Crafting immersive gaming experiences through code and art. 
          Specializing in gameplay mechanics, shader development, and technical optimization.
        </p>
        
        <div className="mt-10">
          <a
            href="#projects"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}