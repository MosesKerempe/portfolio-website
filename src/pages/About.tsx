import React from 'react';

const About: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            {/* About Me Section */}
            <h1 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">About Me</h1>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                I am a passionate Software developer with a strong background in web development and design. My journey in technology began with a fascination for how things work, leading me to explore various programming languages and frameworks.
            </p>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                Over the time, I have built several websites and applications using technologies like <span className="font-semibold text-blue-500 dark:text-blue-400">TypeScript</span>, <span className="font-semibold text-blue-500 dark:text-blue-400">React</span>, <span className="font-semibold text-blue-500 dark:text-blue-400">Tailwind CSS</span>, and <span className="font-semibold text-blue-500 dark:text-blue-400">Node.js</span>, and many more. I enjoy creating user-friendly, responsive, and visually appealing web applications.
            </p>

            {/* Vision Section */}
            <div className="mt-8">
                <h2 className="text-3xl font-bold mb-4 text-green-600 dark:text-green-400">Vision</h2>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                    My vision is to build websites and applications that meet diverse goals, from enhancing user experiences to solving real-world problems. I aim to create solutions that are not only functional but also impactful.
                </p>
            </div>

            {/* Mission Section */}
            <div className="mt-8">
                <h2 className="text-3xl font-bold mb-4 text-purple-600 dark:text-purple-400">Mission</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                    My mission is to continuously learn and grow as a developer while contributing to projects that make a difference. I strive to deliver high-quality software that aligns with the unique needs and goals of clients and users.
                </p>
            </div>
        </div>
    );
};

export default About;