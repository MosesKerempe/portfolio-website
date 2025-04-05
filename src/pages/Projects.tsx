import React from 'react';

const Projects: React.FC = () => {
  const projectList = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my skills, projects, and experience. Built with React, TypeScript, and Tailwind CSS to create a responsive and visually appealing design.',
      liveDemo: 'https://your-portfolio-live-demo.com', // Replace with your live demo link
      sourceCode: 'https://github.com/yourusername/portfolio-website', // Replace with your GitHub repo link
    },
    {
      title: 'Swahilipothub Website',
      description: 'A fully functional website designed from scratch for Swahilipothub. It features a modern design and user-friendly interface to showcase the organization’s mission and services.',
      liveDemo: 'https://swahilipothub-website-zeta.vercel.app/', // Replace with your live demo link
      sourceCode: 'https://github.com/MosesKerempe/swahilipot-cloned', // Replace with your GitHub repo link
    },
    {
      title: 'Swahilipothub Template',
      description: 'A website designed using a pre-built template for Swahilipothub. It demonstrates how templates can be customized to meet specific branding and functionality requirements.',
      liveDemo: 'https://swahilipothubwebsite-nine.vercel.app/', // Replace with your live demo link
      sourceCode: 'https://github.com/MosesKerempe/swahilipot-template', // Replace with your GitHub repo link
    },
  ];

  return (
    <div className="container mx-auto text-center py-10">
      <h1 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">{project.title}</h2>
            <p className="text-gray-700 dark:text-gray-400 mb-4">{project.description}</p>
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-400 hover:underline mr-4"
            >
              Live Demo
            </a>
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-400 hover:underline"
            >
              Source Code
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;