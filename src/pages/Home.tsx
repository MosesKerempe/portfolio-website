import React from 'react';
import About from './About';
import Timeline from '../components/Timeline';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto text-center py-10">
      {/* About Me Section */}
      <div className="flex flex-col items-center">
        <img
          src="/image/musa.jpg" // Replace with the actual path to your image
          alt="Musa Kerempe"
          className="w-40 h-40 rounded-full mb-4 shadow-lg"
        />
        <h1 className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">
          Hi, I'm Musa Kerempe
        </h1>
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
          I'm a passionate software and web developer dedicated to creating innovative and user-friendly digital solutions. I enjoy solving complex problems and delivering high-quality applications that make a difference.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center space-x-4 mt-6">
        <a
          href="#about"
          className="bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-600 dark:hover:bg-blue-700"
        >
          About Me
        </a>
        <a
          href="#timeline"
          className="bg-green-500 dark:bg-green-600 text-white px-4 py-2 rounded hover:bg-green-600 dark:hover:bg-green-700"
        >
          Timeline
        </a>
        <a
          href="#skills"
          className="bg-purple-500 dark:bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-600 dark:hover:bg-purple-700"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="bg-red-500 dark:bg-red-600 text-white px-4 py-2 rounded hover:bg-red-600 dark:hover:bg-red-700"
        >
          Projects
        </a>
      </div>

      {/* About Section */}
      <div id="about" className="mt-16">
        <About />
      </div>

      {/* Timeline Section */}
      <div id="timeline" className="mt-16">
        <Timeline />
      </div>

      {/* Skills Section */}
      <div id="skills" className="mt-16">
        <Skills />
      </div>

      {/* Projects Section */}
      <div id="projects" className="mt-16">
        <Projects />
      </div>

      {/* Contact Section */}
      <div id="contact" className="mt-16">
        <Contact />
      </div>
    </div>
  );
};

export default Home;