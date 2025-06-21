import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import React, { useState } from "react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const navItems = [
    { label: "About", href: "#About" },
    { label: "Skill", href: "#Skill" },
    { label: "Experience", href: "#Experience" },
    { label: "Projects", href: "#Projects" },
    { label: "Contact", href: "#contact" },
    { label: "Resume.pdf", href: "/resume.pdf", target: "_blank" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white/5 backdrop-blur-md shadow-md px-6 md:px-20 py-5 md:py-6 flex justify-between items-center text-white">
      {/* Logo */}
      <a href="#Home">
        <span className="text-3xl md:text-4xl font-extrabold tracking-widest bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer hover:opacity-90 transition">
          PORTFOLIO
        </span>
      </a>

      {/* Navigation Links */}
      <ul
        className={`${
          menu ? "block" : "hidden"
        } md:flex gap-6 font-semibold text-base md:text-lg text-white mt-4 md:mt-0 px-4 py-4 md:px-0 md:py-0 bg-black bg-opacity-70 md:bg-transparent rounded-xl md:rounded-none text-center absolute md:static top-20 md:top-auto left-6 md:left-auto right-6 md:right-auto`}
      >
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target={item.target || "_self"}
            rel={item.target ? "noopener noreferrer" : ""}
            onClick={() => {
              openMenu(false);
              setShowMenu(true);
            }}
          >
            <li className="relative transition duration-300 py-1 md:py-0 
              hover:text-transparent hover:bg-clip-text 
              hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full 
              after:bg-gradient-to-r after:from-blue-400 after:via-purple-500 after:to-pink-500 
              after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
              {item.label}
            </li>
          </a>
        ))}
      </ul>

      {/* Hamburger Menu Toggle */}
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-6 top-6 cursor-pointer"
          onClick={() => {
            openMenu(true);
            setShowMenu(false);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-6 top-6 cursor-pointer"
          onClick={() => {
            openMenu(false);
            setShowMenu(true);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
