import React from 'react';
import { Brain } from 'lucide-react';

export default function Skills() {
  const skills = {
    "Game Development": ["Unity", "Unreal Engine", "Godot", "Custom Engines"],
    "Programming": ["C++", "C#", "Python", "TypeScript"],
    "Graphics": ["OpenGL", "DirectX", "HLSL/GLSL", "Shader Programming"],
    "Tools": ["Visual Studio", "Git", "Maya", "Blender"]
  };

  return (
    <section id="skills" className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4 mb-12">
          <Brain className="w-8 h-8 text-blue-500" />
          <h2 className="text-4xl font-bold text-center">Technical Arsenal</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">{category}</h3>
              <ul className="space-y-2">
                {items.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}