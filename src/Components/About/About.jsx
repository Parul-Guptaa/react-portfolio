import React from 'react';
import AboutImg from "../../assets/download.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <section id='About' className="text-white px-6 py-20 md:px-24">
      <div className="bg-black bg-opacity-30 rounded-xl shadow-xl px-6 py-16 md:p-16 mx-auto max-w-7xl">

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-14 text-blue-400 tracking-tight">
          About Me
        </h2>

        {/* Image + Description */}
        <div className="md:flex md:items-center md:justify-center gap-16 flex-wrap mb-16">
          {/* Image */}
          <div className="flex justify-center mb-10 md:mb-0">
            <div className="relative w-44 h-44 md:w-60 md:h-60 rounded-full overflow-hidden shadow-[0_0_40px_#3b82f6] hover:shadow-[0_0_60px_white] transition duration-300">
              <img
                src={AboutImg}
                alt="Parul"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="max-w-xl text-sm md:text-lg text-gray-300 leading-relaxed tracking-wide text-center md:text-left">
            <p>
              Hi, I’m a passionate <strong className="text-blue-400">Frontend Developer</strong> with hands-on experience in building responsive and interactive web applications using <strong className="text-blue-300">React.js, HTML, CSS, and JavaScript</strong>.
              <br /><br />
              I enjoy turning ideas into digital experiences with clean and efficient code. My focus is on user-friendly design, performance, and functionality across all devices.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap gap-6 justify-center">
          {[
            {
              title: "Frontend Developer",
              desc: "I specialize in clean, responsive interfaces using HTML, CSS, and JavaScript. My goal is to deliver intuitive and pixel-perfect user experiences.",
            },
            {
              title: "ReactJS Developer",
              desc: "I build dynamic, component-driven apps using React. Skilled in hooks, state management, and scalable design systems.",
            },
            {
              title: "Backend Developer",
              desc: "I work with Node.js and Express to build APIs and manage databases with MongoDB, ensuring smooth frontend-backend integration.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-[#111827] w-80 p-6 rounded-xl shadow-md hover:shadow-[0_0_30px_#3b82f6] hover:-translate-y-1 transition-all duration-300 border border-blue-600"
            >
              <div className="flex gap-3 items-start">
                <IoArrowForward size={28} className="text-yellow-400 mt-1" />
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-tight text-gray-300">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
