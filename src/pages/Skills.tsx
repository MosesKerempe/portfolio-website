import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    {
      name: 'JavaScript / TypeScript',
      description: 'Proficient in building dynamic and scalable web applications using JavaScript and TypeScript.',
    },
    {
      name: 'React',
      description: 'Experienced in creating interactive user interfaces and managing state with React .',
    },
    {
      name: 'Tailwind CSS',
      description: 'Skilled in designing responsive and modern UIs using the utility-first Tailwind CSS framework.',
    },
    {
      name: 'Node.js',
      description: 'Capable of building server-side applications and RESTful APIs using Node.js.',
    },
    {
      name: 'Git / GitHub',
      description: 'Proficient in version control and collaboration using Git and GitHub.',
    },
    {
      name: 'PHP',
      description: 'Experienced in backend development and server-side scripting with PHP.',
    },
    {
      name: 'MySQL',
      description: 'Skilled in designing and managing relational databases using MySQL.',
    },
    {
      name: 'Next.js',
      description: 'Experienced in building server-rendered React applications with Next.js.',
    },
  ];

  return (
    <div className="container mx-auto py-10 px-6">
      <h1 className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-8 text-center">
        My Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-yellow-400 mb-2">
              {skill.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;