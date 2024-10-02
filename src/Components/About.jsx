import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="h-screen bg-gradient-to-r from-blue-purple to-pink-500 p-8 text-grape flex justify-center items-center"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div>
          <h2 className="text-[26px] font-archivo font-bold mb-6 border-b-2 border-white pb-6">
            ABOUT ME
          </h2>
          <div className="text-lg font-medium flex flex-col gap-4">
            <p>
              With a passion for frontend development that began in my early
              years, I thrive on creating innovative and visually striking web
              solutions.
            </p>
            <p>
              I’m dedicated to delivering clean, efficient code and have a knack
              for problem-solving, even when faced with new challenges.
            </p>
            <p>
              A collaborative team player with a positive attitude, I easily
              adapt to any work environment and enjoy contributing to shared
              goals.
            </p>
            <p>
              Let’s collaborate and transform ideas into extraordinary web
              experiences!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
