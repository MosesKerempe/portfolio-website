import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link
          to="/about"
          className="bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-600 dark:hover:bg-blue-700"
        >
          About Me
        </Link>
        <Link
          to="/timeline"
          className="bg-green-500 dark:bg-green-600 text-white px-4 py-2 rounded hover:bg-green-600 dark:hover:bg-green-700"
        >
          Timeline
        </Link>
        <Link
          to="/skills"
          className="bg-purple-500 dark:bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-600 dark:hover:bg-purple-700"
        >
          Skills
        </Link>
        <Link
          to="/projects"
          className="bg-red-500 dark:bg-red-600 text-white px-4 py-2 rounded hover:bg-red-600 dark:hover:bg-red-700"
        >
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Home;