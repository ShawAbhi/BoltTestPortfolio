import React from 'react';
import { Gamepad2 } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">GameDev Portfolio</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}