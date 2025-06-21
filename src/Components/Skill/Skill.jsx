import React from 'react';
import htmlIcon from '../../assets/html.jpeg';
import cssIcon from '../../assets/css.jpeg';
import jsIcon from '../../assets/js.jpeg';
import reactIcon from '../../assets/react.png';
import nodeIcon from '../../assets/node.png';
import expressIcon from '../../assets/express.png';
import mongoIcon from '../../assets/mongo.png';
import gitIcon from '../../assets/git.png';
import tailwindIcon from '../../assets/tailwind.jpeg';
import mysqlIcon from '../../assets/mysql.png';
import excelIcon from "../../assets/excel.jpeg";

const technicalSkills = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'React.js', icon: reactIcon },
  { name: 'Node.js', icon: nodeIcon },
  { name: 'Express.js', icon: expressIcon },
  { name: 'MongoDB', icon: mongoIcon },
  { name: 'Git & GitHub', icon: gitIcon },
  { name: 'Tailwind CSS', icon: tailwindIcon },
  { name: 'MySQL', icon: mysqlIcon },
  { name: 'Excel', icon: excelIcon }
];

const softSkills = [
  { name: 'Communication', icon: '🗣️' },
  { name: 'Teamwork', icon: '🤝' },
  { name: 'Problem Solving', icon: '🧠' },
  { name: 'Time Management', icon: '⏰' },
  { name: 'Adaptability', icon: '🔄' },
  { name: 'Creativity', icon: '🎨' }
];

const Skill = () => {
  return (
    <div id="Skill" className="p-10 md:p-24 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      <div className="max-w-7xl mx-auto bg-black bg-opacity-30 shadow-xl rounded-3xl p-10 md:p-16">

        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 text-blue-400 tracking-tight">
          My Skills
        </h1>

        {/* Technical Skills */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-center mb-8 text-blue-300">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-28 md:w-32 bg-[#1f2937] border border-blue-500 p-4 rounded-xl shadow-md hover:shadow-[0_0_20px_#3b82f6] transition-all hover:-translate-y-1 duration-300"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain mb-3 rounded-md"
                />
                <p className="text-sm text-gray-200 text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-8 text-blue-300">Soft Skills</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-28 md:w-32 bg-[#1f2937] border border-purple-500 p-4 rounded-xl shadow-md hover:shadow-[0_0_20px_violet] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <p className="text-sm text-gray-200 text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skill;
