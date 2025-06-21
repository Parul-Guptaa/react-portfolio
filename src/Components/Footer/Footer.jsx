import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="Footer" className="bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-500 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">

        {/* Left: Heading */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Let's Connect</h1>
          <h3 className="text-sm md:text-xl font-light">Feel free to reach out anytime!</h3>
        </div>

        {/* Right: Contact Info */}
        <ul className="text-sm md:text-lg space-y-4">
          <li className="flex items-center gap-3 hover:underline hover:scale-105 transition">
            <MdOutlineEmail size={20} />
            <a href="mailto:parulgupta@gmail.com" className="hover:underline" target="_blank" rel="noopener noreferrer">
              parulgupta@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-3 hover:underline hover:scale-105 transition">
            <CiLinkedin size={20} />
            <a
              href="https://linkedin.com/in/parul000111"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.linkedin.com/in/parul001-
            </a>
          </li>
          <li className="flex items-center gap-3 hover:underline hover:scale-105 transition">
            <FaGithub size={20} />
            <a
              href="https://github.com/parul"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/parul
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
