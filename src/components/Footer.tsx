import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-300 py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Musa Kerempe. All rights reserved.</p>
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
                        href="https://linkedin.com/in/Musa
                        Kerempe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 text-2xl"
                    >
                        <Linkedin /> {/* LinkedIn Icon */}
                    </a>
                    <a
                        href="https://twitter.com/Musa Dembele"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 text-2xl"
                    >
                        <Twitter /> {/* Twitter Icon */}
                    </a>
                    <a
                        href="https://instagram.com/Mousah Dembele"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 text-2xl"
                    >
                        <Instagram /> {/* Instagram Icon */}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;