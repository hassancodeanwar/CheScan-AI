import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: "Ahmed El-Sharkawy",
      role: "AI Engineer",
      image: "https://github.com/hassananwar01/img/blob/main/Sharkawy.png?raw=true",
      github: "https://github.com/Ahmed-el-sharkawy",
      linkedin: "https://www.linkedin.com/in/a-y-elsharkawy/"
    },
    {
      name: "Hassan Anwar",
      role: "AI Engineer",
      image: "https://github.com/hassananwar01/img/blob/main/Anwar.png?raw=true",
      github: "https://github.com/hassancodeanwar",
      linkedin: "https://linkedin.com/in/hassancodeanwar"
    },
    {
      name: "Mohamed Allam",
      role: "ML Engineer",
      image: "https://github.com/hassananwar01/img/blob/main/Allam.png?raw=true",
      github: "https://github.com/mohamedallamai",
      linkedin: "https://www.linkedin.com/in/mohamedallamai/"
    }
  ];

  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-center mb-12">Our Team</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}