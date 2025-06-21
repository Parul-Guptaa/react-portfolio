import React, { useState } from 'react';
import bannerImg from '../../assets/BlogImg.jpg';

const ProjectCard = ({ title, main, img }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Card */}
      <div className="relative bg-[#0c0e19] text-white shadow-lg border border-blue-400 rounded-2xl p-4 w-80 h-[370px] flex flex-col justify-start hover:shadow-white transition-all duration-300 overflow-hidden">
        <img
          src={img}
          alt="Project"
          className="rounded-xl h-40 w-full object-cover mb-3"
        />
        <h3 className="text-xl font-bold mb-2">{title}</h3>

        {/* Paragraph with space for button */}
        <p className="text-sm text-gray-300 overflow-hidden max-h-[88px] pr-1 pb-10">
          {main}
        </p>

        {/* Fixed Read More Button */}
        <button
          onClick={() => setShowModal(true)}
          className="absolute bottom-4 right-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-4 py-1 rounded-full text-sm font-semibold hover:scale-105 transition"
        >
          Read More
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-70 backdrop-blur-sm overflow-y-auto"
          onClick={() => setShowModal(false)}
        >
          <div className="min-h-screen flex items-center justify-center px-4 py-10">
            <div
              className="bg-[#1e293b] text-white w-full max-w-4xl rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-6 shadow-xl border border-blue-400 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left: Image */}
              <div className="flex-1">
                <img
                  src={img}
                  alt="Project Preview"
                  className="rounded-lg w-full h-64 object-cover md:h-full"
                />
              </div>

              {/* Right: Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-4">{title}</h2>
                  <div className="text-sm md:text-base text-gray-300 max-h-64 overflow-y-auto pr-2">
                    {main}
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-4">
                  <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:opacity-90 px-4 py-2 font-semibold text-white rounded-full transition-transform transform hover:scale-105">
                    Demo
                  </button>
                  <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:opacity-90 px-4 py-2 font-semibold text-white rounded-full transition-transform transform hover:scale-105">
                    Source Code
                  </button>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-red-500"
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
