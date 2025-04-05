import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react'; // Import icons from lucide-react

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sync theme with localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-300 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Link to Home */}
        <Link to="/" className="text-2xl font-bold hover:text-gray-400">
          My Portfolio
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">About</Link>
          </li>
          <li>
            <Link to="/timeline" className="hover:text-gray-400">Timeline</Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-gray-400">Skills</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-gray-400">Projects</Link>
          </li>
        </ul>
        <button
          onClick={toggleTheme}
          className="bg-gray-700 dark:bg-gray-600 text-white p-2 rounded-full hover:bg-gray-600 dark:hover:bg-gray-500"
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </nav>
    </header>
  );
};

export default Header;