import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5"
    >
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>
      <p className="text-xl mb-4 text-center">
        Feel free to reach out to me via email:
      </p>
      <a
        href="mailto:melvinjones632004@gmail.com"
        className="text-blue-500 text-xl underline mb-6"
      >
        melvinjones632004@gmail.com
      </a>

      {/* Social Media Links */}
      <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/melvin-jones-058866224/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:opacity-75 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="text-blue-600"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H3.022v7.225h1.921zm-.961-8.225a1.104 1.104 0 110-2.209 1.104 1.104 0 010 2.209zm6.092 8.225V9.359c0-2.271-1.212-3.324-2.826-3.324-1.304 0-1.903.733-2.234 1.25V6.169H4.943c.026.645 0 7.225 0 7.225h1.921v-4.03c0-.216.015-.433.079-.588.172-.432.565-.88 1.223-.88.863 0 1.208.665 1.208 1.64v3.857h1.922z" />
          </svg>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/MelvinJones1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:opacity-75 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="text-black"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.58.82-2.13-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.55.82 1.26.82 2.13 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>

        {/* Add more social icons as needed */}
      </div>
    </div>
  );
};

export default Contact;
