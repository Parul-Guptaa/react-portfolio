import React from 'react';
import avatarImg from "../../assets/pic5.webp";

const Home = () => {
  return (
    <section id='Home' className="text-white min-h-screen flex items-center justify-center px-4 md:px-20 py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side – Text Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Hello, I'm <span className="text-blue-500">Parul</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 mb-6 tracking-tight">
            MCA '25 @ MITS • Frontend Developer (React.js) • Web Development Enthusiast
          </p>

          <p className="text-base md:text-xl text-gray-400 mb-8 leading-relaxed">
            I craft clean, responsive, and engaging user interfaces using modern frontend technologies. 
            With hands-on experience in building dynamic websites, I enjoy turning ideas into functional products 
            with attention to detail and smooth UX.
          </p>

          {/* Contact Me Button */}
          <a href="#contact" className="inline-block">
            <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:opacity-90 transition-all px-6 py-3 text-white font-semibold rounded-full shadow-lg">
              🚀 Contact Me
            </button>
          </a>
        </div>

        {/* Right Side – Profile Image */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-[0_0_40px_#3b82f6] hover:shadow-[0_0_50px_white] transition duration-300">
            <img
              src={avatarImg}
              alt="Parul"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
