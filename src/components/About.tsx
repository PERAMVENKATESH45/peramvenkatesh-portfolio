
import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with expertise in modern web technologies. 
            I love turning complex problems into simple, beautiful designs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              My Journey
            </h3>
            <p className="text-gray-300 leading-relaxed">
              With over 3 years of experience in web development, I've worked with startups and 
              established companies to create digital solutions that make a difference. My expertise 
              spans from front-end technologies like React and Vue.js to back-end development with 
              Node.js and Python.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and creating user experiences that are 
              both beautiful and functional. When I'm not coding, you can find me exploring new 
              technologies or contributing to open-source projects.
            </p>
          </div>
          
          <div className="grid gap-6">
            <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Code className="w-8 h-8 text-blue-400 mb-3" />
              <h4 className="text-white font-semibold mb-2">Clean Code</h4>
              <p className="text-gray-400 text-sm">
                Writing maintainable, scalable, and efficient code that stands the test of time.
              </p>
            </div>
            
            <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Palette className="w-8 h-8 text-purple-400 mb-3" />
              <h4 className="text-white font-semibold mb-2">Design Focus</h4>
              <p className="text-gray-400 text-sm">
                Creating intuitive user interfaces that provide exceptional user experiences.
              </p>
            </div>
            
            <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Zap className="w-8 h-8 text-yellow-400 mb-3" />
              <h4 className="text-white font-semibold mb-2">Performance</h4>
              <p className="text-gray-400 text-sm">
                Optimizing applications for speed, accessibility, and search engine visibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
