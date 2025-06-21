
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', level: 90, color: 'from-blue-500 to-blue-700' },
    { name: 'Tailwind CSS', level: 85, color: 'from-cyan-400 to-blue-500' },
    { name: 'React.js', level: 90, color: 'from-blue-400 to-cyan-500' },
    { name: 'JavaScript', level: 88, color: 'from-yellow-400 to-orange-500' },
    { name: 'Node.js', level: 85, color: 'from-green-500 to-green-700' },
    { name: 'Express.js', level: 80, color: 'from-gray-600 to-gray-800' },
    { name: 'MongoDB', level: 75, color: 'from-green-600 to-green-800' },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Here are some of the technologies I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="group">
              <div className="flex justify-between items-center mb-3">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-gray-400 text-sm">{skill.level}%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ 
                    width: `${skill.level}%`,
                    animation: `skill-fill 1.5s ease-out ${index * 0.1}s both`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <h4 className="text-white font-semibold mb-2">Frontend</h4>
            <p className="text-gray-400 text-sm">HTML, CSS, Tailwind CSS, React.js, JavaScript</p>
          </div>
          
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <h4 className="text-white font-semibold mb-2">Backend</h4>
            <p className="text-gray-400 text-sm">Node.js, Express.js, MongoDB</p>
          </div>
          
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <h4 className="text-white font-semibold mb-2">Tools</h4>
            <p className="text-gray-400 text-sm">VS Code, GitHub, Postman</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
