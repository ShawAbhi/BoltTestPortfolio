import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "Project Nova",
      description: "A space exploration game featuring procedural planet generation and custom shader effects.",
      image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&w=1200&q=80",
      tags: ["Unity", "C#", "HLSL", "Procedural Generation"]
    },
    {
      title: "Shader Playground",
      description: "Collection of advanced visual effects and shaders for real-time graphics.",
      image: "https://images.unsplash.com/photo-1518709766631-a6c7f7856bc3?auto=format&fit=crop&w=1200&q=80",
      tags: ["OpenGL", "GLSL", "C++"]
    },
    {
      title: "Physics Sandbox",
      description: "Custom physics engine with real-time visualization and interaction.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80",
      tags: ["Unreal Engine", "C++", "Physics"]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-900 transition-transform hover:scale-105"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform transition-transform group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}