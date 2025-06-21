import React from 'react';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="text-white py-20 px-4 md:px-20  bg-opacity-90">
      <div className="max-w-4xl mx-auto bg-slate-900 bg-opacity-70 p-10 md:p-16 rounded-2xl border border-blue-400 
        shadow-[0_0_30px_rgba(0,0,0,0.7)] backdrop-blur-lg 
        transition-all duration-500 hover:shadow-[0_0_40px_white]">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Let's <span className='text-blue-400'> Contact</span></h2>
          <p className="text-gray-400 text-sm md:text-base">
            Have a project in mind or just want to say hi? Drop a message below.
          </p>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          {/* Name */}
          <div className="relative">
            <FaUser className="absolute left-3 top-4 text-gray-400" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full pl-10 pr-4 py-3 bg-zinc-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full pl-10 pr-4 py-3 bg-zinc-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <FaCommentDots className="absolute left-3 top-4 text-gray-400" />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full pl-10 pr-4 py-3 bg-zinc-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-2">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:opacity-90 px-8 py-3 rounded-full font-semibold text-white transition-transform transform hover:scale-105 shadow-lg"
            >
              🚀 Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
