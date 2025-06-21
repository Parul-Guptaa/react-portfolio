import React from 'react';
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaRegFileExcel,
} from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";
import SDSLogo from "../../assets/SDSS.png";
import GoogleLogo from "../../assets/SRM.jpeg";

const Experience = () => {
  return (
    <div id='Experience' className='p-10 md:p-24 text-white bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]'>
      <div className="max-w-7xl mx-auto bg-black bg-opacity-40 rounded-3xl p-10 shadow-2xl">

        <h1 className='text-3xl md:text-5xl font-bold text-center mb-14 tracking-wide text-blue-400'>Experience</h1>

        {/* Experience Card 1 */}
        <div className='flex flex-col md:flex-row justify-between items-start gap-10 mb-16 bg-gradient-to-r from-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-blue-600 shadow-lg transition hover:shadow-[0_0_30px_#3b82f6]'>
          {/* Left: Company Info */}
          <div className='md:w-1/2 flex gap-5 items-start'>
            <img src={SDSLogo} alt="SDS" className='w-16 h-16 rounded-md object-cover shadow-md' />
            <div>
              <h2 className='text-xl font-bold'>Web Developer Intern</h2>
              <h3 className='text-base font-medium text-gray-300'>SecondDigitalSolution Pvt. Ltd. | Bangalore (Remote)</h3>
              <p className='text-sm text-gray-400 mt-1'>Jan 2025 – Present</p>
              <ul className='list-disc pl-5 text-sm mt-3 space-y-1 text-gray-300'>
                <li>Developed full-stack MERN projects</li>
                <li>Focused on frontend UI with React.js</li>
              </ul>
            </div>
          </div>

          {/* Right: Tech Icons */}
          <div className='md:w-1/2 flex flex-wrap gap-5 justify-center'>
            {[ 
              { icon: <FaHtml5 color='orangered' /> },
              { icon: <FaCss3 color='#264de4' /> },
              { icon: <FaReact color='#61DAFB' /> },
              { icon: <FaJs color='#f0db4f' /> },
              { icon: <SiMysql color='#00758f' /> },
              { icon: <FaReact color='#61DAFB' /> },
              { icon: <SiMongodb color='#47A248' /> },
            ].map((tech, index) => (
              <span key={index} className='p-4 bg-zinc-900 rounded-2xl shadow-lg'>
                {React.cloneElement(tech.icon, { size: 40 })}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Card 2 */}
        <div className='flex flex-col md:flex-row justify-between items-start gap-10 bg-gradient-to-r from-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-purple-500 shadow-lg transition hover:shadow-[0_0_30px_#8b5cf6]'>
          {/* Left: Company Info */}
          <div className='md:w-1/2 flex gap-5 items-start'>
            <img src={GoogleLogo} alt="Google" className='w-16 h-16 rounded-md object-cover shadow-md' />
            <div>
              <h2 className='text-xl font-bold'>Junior Web Developer</h2>
              <h3 className='text-base font-medium text-gray-300'>ShriRam Technologies R&D | Gwalior (Onsite)</h3>
              <p className='text-sm text-gray-400 mt-1'>Jan 2024 – Dec 2024</p>
              <ul className='list-disc pl-5 text-sm mt-3 space-y-1 text-gray-300'>
                <li>Built scalable web platforms</li>
                <li>Collaborated with global teams</li>
              </ul>
            </div>
          </div>

          {/* Right: Tech Icons */}
          <div className='md:w-1/2 flex flex-wrap gap-5 justify-center'>
            {[ 
              { icon: <SiMongodb color='#47A248' /> },
              { icon: <FaRegFileExcel color='#217346' /> },
              { icon: <FaFigma color='#a259ff' /> },
              { icon: <FaReact color='#61DAFB' /> },
            ].map((tech, index) => (
              <span key={index} className='p-4 bg-zinc-900 rounded-2xl shadow-lg'>
                {React.cloneElement(tech.icon, { size: 40 })}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
