import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">Let's Create Something Amazing</h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Whether you're looking for a technical artist, gameplay programmer, or 
          someone who can bridge the gap between art and code, I'd love to hear from you.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}