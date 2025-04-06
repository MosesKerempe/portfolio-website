import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-300 py-6">
            <div className="container mx-auto text-center">
                {/* Quick Links Section */}
                <h2 className="text-lg font-bold mb-4">Quick Links</h2>
                <div className="flex justify-center space-x-4 mb-6">
                    <a
                        href="#about"
                        className="text-blue-400 hover:text-blue-500"
                    >
                        About Me
                    </a>
                    <a
                        href="#timeline"
                        className="text-green-400 hover:text-green-500"
                    >
                        Timeline
                    </a>
                    <a
                        href="#skills"
                        className="text-purple-400 hover:text-purple-500"
                    >
                        Skills
                    </a>
                    <a
                        href="#projects"
                        className="text-red-400 hover:text-red-500"
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="text-yellow-400 hover:text-yellow-500"
                    >
                        Contact
                    </a>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-6 mt-4">
                    <a
                        href="https://github.com/MosesKerempe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 text-2xl"
                    >
                        <Github /> {/* GitHub Icon */}
                    </a>
                    <a
                        href="https://linkedin.com/in/MusaKerempe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 text-2xl"
                    >
                        <Linkedin /> {/* LinkedIn Icon */}
                    </a>
                    <a
                        href="https://twitter.com/MusaDembele"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 text-2xl"
                    >
                        <Twitter /> {/* Twitter Icon */}
                    </a>
                    <a
                        href="https://instagram.com/MousahDembele"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 text-2xl"
                    >
                        <Instagram /> {/* Instagram Icon */}
                    </a>
                </div>

                {/* Footer Text */}
                <p className="text-sm text-gray-400 mt-4">
                    &copy; {new Date().getFullYear()} Musa Kerempe. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;