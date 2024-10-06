import React, { useState } from "react";
import { Link } from "react-scroll";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="home" className="h-screen overflow-hidden">
      {/* Navigation Bar */}
      <div className="flex justify-between items-center p-5 h-20 bg-gray-200 bg-opacity-70 fixed w-full z-50">
        <h1 className="text-2xl font-bold mr-10 cursor-pointer hover:text-gray-500 transition-colors duration-300">
          <Link to="Home" smooth={true} duration={500}>
            MJ
          </Link>
        </h1>
        <div className="hidden sm:flex text-xl font-poppins">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <span
              key={item}
              className="mx-3 cursor-pointer hover:text-gray-500 transition-colors duration-300"
            >
              <Link to={item.toLowerCase()} smooth={true} duration={500}>
                {item}
              </Link>
            </span>
          ))}
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="sm:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-gray-200 bg-opacity-70 fixed top-20 left-0 w-full z-40">
          <div className="flex flex-col items-center">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <span
                key={item}
                className="my-3 text-xl cursor-pointer hover:text-gray-500 transition-colors duration-300"
              >
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              </span>
            ))}
          </div>
        </div>
      )}

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
          <p className="font-bold text-3xl sm:text-4xl text-grape">
            Hello, I'm
          </p>
          <h1 className="text-5xl sm:text-8xl font-dancing my-5 text-black">
            Melvin Jones
          </h1>
          <p className="text-3xl sm:text-4xl text-grape font-medium mb-7">
            Web Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
