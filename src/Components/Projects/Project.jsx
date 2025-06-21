import React from 'react';
import ProjectCard from './ProjectCard';
import blogImg from '../../assets/BlogImg.jpg';
import ecomImg from '../../assets/ecomImg.jpeg';
import portImg from '../../assets/portImg.jpg';
import weatherImg from '../../assets/weatherImg.avif';
import doctorImg from '../../assets/DocImg.jpeg';
import expenseImg from '../../assets/expenceImg.png';

const Project = () => {
  return (
    <section
      id='Projects'
      className='p-10 md:p-24 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white'
    >
      <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-md rounded-xl shadow-lg p-10 md:p-16">
        <h1 className='text-3xl md:text-5xl font-bold text-center mb-14 text-blue-400'>
          Projects
        </h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center'>
          <ProjectCard
            title="Blogging Website"
            main="A blog platform built with React.js and Express.js. Integrated component libraries for clean UI & seamless user experience."
            img= {blogImg}
          />
          <ProjectCard
            title="E-Commerce Dashboard"
            main="Created a responsive admin dashboard using React, Chart.js & Tailwind for managing products, orders, and analytics."
            img = {ecomImg}
          />
          <ProjectCard
            title="Portfolio Website"
            main="Personal portfolio site using React and Tailwind CSS to showcase projects, skills, and contact form with email integration."
            img={portImg}
          />
          <ProjectCard
            title="Weather App"
            main="Fetched real-time weather data using OpenWeatherMap API. Built with vanilla JS and responsive layout using Flexbox."
            img={weatherImg}
          />
          <ProjectCard
            title="Doctor Appointment App"
            main="A MERN stack project that enables patients to book appointments with doctors, featuring authentication and admin control."
            img={doctorImg}
          />
          <ProjectCard
            title="Expense Tracker"
            main="Full-stack application to track and categorize expenses using MongoDB and React with Redux Toolkit."
            img={expenseImg}
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
