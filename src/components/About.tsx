
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
            I'm a passionate full-stack developer with expertise in MERN stack technologies. 
            I love turning complex problems into simple, beautiful solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              My Journey
            </h3>
            <p className="text-gray-300 leading-relaxed">
              As a fresher in the field of web development, I joined Guvi to master the MERN stack 
              technologies. During my learning journey, I gained hands-on experience with MongoDB, 
              Express.js, React.js, and Node.js, building several projects that showcase my skills.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and creating user experiences that are 
              both beautiful and functional. I'm eager to apply my knowledge in real-world projects 
              and continue growing as a developer while contributing to meaningful solutions.
            </p>
          </div>
          
          <div className="grid gap-6">
            <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Code className="w-8 h-8 text-blue-400 mb-3" />
              <h4 className="text-white font-semibold mb-2">Clean Code</h4>
              <p className="text-gray-400 text-sm">
                Writing maintainable, scalable, and efficient code following best practices.
              </p>
            </div>
            
            <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Palette className="w-8 h-8 text-purple-400 mb-3" />
              <h4 className="text-white font-semibold mb-2">Problem Solving</h4>
              <p className="text-gray-400 text-sm">
                Breaking down complex problems into simple, elegant solutions.
              </p>
            </div>
            
            <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Zap className="w-8 h-8 text-yellow-400 mb-3" />
              <h4 className="text-white font-semibold mb-2">Learning</h4>
              <p className="text-gray-400 text-sm">
                Continuously learning new technologies and improving development skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
