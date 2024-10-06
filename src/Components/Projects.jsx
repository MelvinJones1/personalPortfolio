import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Movie Recommendation",
      skills: "React js | Tailwind CSS  | Redux",
      about:
        "Movies Recommendation app where you can get recommendations based on your favourite genres.",
      learning: "Implemented openAI's Api to recommend Movies.",
      visitLink: "",
      sourceLink: "",
    },
    {
      title: "EZpay",
      skills: "React js | Express js | MongoDB | JWT",
      about:
        "Developed a virtual payment app, where you can send virtual money and receive from your friends.",
      learning:
        "Learnt about Authentication and how to refer and store data in MongoDB.",
      visitLink: "",
      sourceLink: "",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-blue-purple to-queen-pink p-4 sm:p-8 h-auto"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-archivo font-bold text-center text-cream my-20">
          PROJECTS
        </h2>
        <div className="flex flex-wrap -mx-2 mb-8">
          {projects.map(
            (
              { title, skills, about, learning, visitLink, sourceLink },
              index,
            ) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/2 px-2 mb-10">
                <div className="bg-cream p-6 border border-grape rounded-md mb-4 flex flex-col gap-3 h-full">
                  <h3 className="text-lg md:text-[23px] font-archivo font-bold mb-2">
                    {title}
                  </h3>
                  <p className="text-sm md:text-[13px] text-grape mb-2">
                    {skills}
                  </p>
                  <div className="flex flex-col justify-between">
                    <p className="text-base mb-4 font-medium">{about}</p>
                    <p className="text-base mb-4 font-medium">
                      <span className="font-bold">Learnings</span>: {learning}
                    </p>
                  </div>
                  <div className="flex gap-4 text-grape">
                    <a
                      href={visitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm underline hover:opacity-60"
                    >
                      Visit
                    </a>
                    <a
                      href={sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm underline hover:opacity-60"
                    >
                      View Source
                    </a>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
