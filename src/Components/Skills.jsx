import React from "react";
import backgroundVideo from "../assets/backgroundVideo.mp4";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "React JS",
    "Java",
    "Tailwind CSS",
  ];

  return (
    <section
      id="skills"
      className="h-screen p-8 text-grape flex justify-center items-center relative "
    >
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="max-w-2xl mx-auto text-center z-10">
        <h2 className="text-3xl font-archivo font-bold mb-10">SKILLS</h2>

        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="font-semibold bg-cream p-3 border border-solid border-grape rounded-md md:w-1/3 lg:w-1/4"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
