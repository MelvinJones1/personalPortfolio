import React from "react";

import { Link } from "react-scroll";

const Home = () => {
  return (
    <div id="Home" className="h-screen overflow-hidden">
      {/* Navigation Bar */}
      <div className="flex justify-between items-center p-5 h-20 bg-gray-200 bg-opacity-70 fixed w-full z-50">
        <h1 className="text-2xl font-bold mr-10 cursor-pointer hover:text-gray-500 transition-colors duration-300">
          <Link to="Home" smooth={true} duration={500}>
            MJ
          </Link>
        </h1>
        <div className="flex text-2xl font-poppins">
          <span className="mr-10 cursor-pointer hover:text-gray-500 transition-colors duration-300">
            <Link to="Home" smooth={true} duration={500}>
              Home
            </Link>
          </span>

          <span className="mr-10 cursor-pointer hover:text-gray-500 transition-colors duration-300">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </span>
          <span className="mr-10 cursor-pointer hover:text-gray-500 transition-colors duration-300">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </span>
          <span className="mr-10 cursor-pointer hover:text-gray-500 transition-colors duration-300">
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </span>
          <span className="mr-10 cursor-pointer hover:text-gray-500 transition-colors duration-300">
            <Link to="Contact" smooth={true} duration={500}>
              Contact
            </Link>
          </span>
        </div>
      </div>

      {/* Background Video and Main Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/BackgroundVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="relative z-10">
          <p className="font-bold text-4xl text-grape">Hello, I'm</p>
          <h1 className="text-8xl font-dancing  my-5 text-black">
            Melvin Jones
          </h1>
          <p className="text-4xl text-grape font-medium mb-7">Web Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
