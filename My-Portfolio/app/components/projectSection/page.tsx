"use client"

import React from "react";

const ProjectSection = () => {
  return (
    <div>
      <main className="py-12 px-6">
        <h2 className="text-4xl text-center font-bold text-blue-900 mb-10 animate-fade-in-down">
          My Projects
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border rounded-lg p-6 shadow-lg hover:scale-105 transition-transform bg-white animate-fade-in-up delay-150">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              A Calculaor project
            </h3>
            <p className="text-gray-600">
              This is my awesome portfolio project. A Calculator created with
              typescript, node.js and inquirer.{" "}
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              onClick={() =>
                window.open(
                  "https://github.com/MuhammadIbrahim557/A-simple-calculator.git",
                  "_blank"
                )
              }
            >
              View Project
            </button>
          </div>

          <div className="border rounded-lg p-6 shadow-lg hover:scale-105 transition-transform bg-white animate-fade-in-up delay-150">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              ATM Machine project
            </h3>
            <p className="text-gray-600">
              This is an ATM machine was created by me with typescript, node.js
              and inquirer.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              onClick={() =>
                window.open(
                  "https://github.com/MuhammadIbrahim557/ATM-machine-project.git",
                  "_blank"
                )
              }
            >
              View Project
            </button>
          </div>
          <div className="border rounded-lg p-6 shadow-lg hover:scale-105 transition-transform bg-white animate-fade-in-up delay-150">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Currency Converter project
            </h3>
            <p className="text-gray-600">
              This is an Currency converter was created by me with typescript,
              node.js and inquirer.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              onClick={() =>
                window.open(
                  "https://github.com/MuhammadIbrahim557/Currency_converter.git",
                  "_blank"
                )
              }
            >
              View Project
            </button>
          </div>
          <div className="border rounded-lg p-6 shadow-lg hover:scale-105 transition-transform bg-white animate-fade-in-up delay-150">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Todo List project
            </h3>
            <p className="text-gray-600">
              This is a simple To do list created with typescript/js, node.js
              and inquirer.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              onClick={() =>
                window.open(
                  "https://github.com/MuhammadIbrahim557/To-do-list.git",
                  "_blank"
                )
              }
            >
              View Project
            </button>
          </div>
          <div className="border rounded-lg p-6 shadow-lg hover:scale-105 transition-transform bg-white animate-fade-in-up delay-150">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Number Guessing game project{" "}
            </h3>
            <p className="text-gray-600">
              This is CLI based number guessing game, it was my extremely solid
              experience when building it and when we play it to guess random
              number to enjoy it.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              onClick={() =>
                window.open(
                  "https://github.com/MuhammadIbrahim557/another-project",
                  "_blank"
                )
              }
            >
              View Project
            </button>
          </div>
          <div className="border rounded-lg p-6 shadow-lg hover:scale-105 transition-transform bg-white animate-fade-in-up delay-150">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Word counter project
            </h3>
            <p className="text-gray-600">
              This is a handy word counter tool! Just paste your text, and it
              quickly tells you how many words you've written. It's perfect for
              checking paragraph or sentence lengths.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              onClick={() =>
                window.open(
                  "https://github.com/MuhammadIbrahim557/Word_counter.git",
                  "_blank"
                )
              }
            >
              View Project
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectSection;
