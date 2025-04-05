import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react'; // Import icons from lucide-react

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-300 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold hover:text-gray-400">
          My Portfolio
        </Link>

        {/* Hamburger Menu Button (Visible on Mobile) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white hover:text-gray-400 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:flex lg:space-x-4 lg:items-center absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent z-10`}
        >
          <li className="border-b border-gray-700 lg:border-none">
            <Link
              to="/"
              className="block px-4 py-2 lg:p-0 hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="border-b border-gray-700 lg:border-none">
            <Link
              to="/about"
              className="block px-4 py-2 lg:p-0 hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="border-b border-gray-700 lg:border-none">
            <Link
              to="/timeline"
              className="block px-4 py-2 lg:p-0 hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Timeline
            </Link>
          </li>
          <li className="border-b border-gray-700 lg:border-none">
            <Link
              to="/skills"
              className="block px-4 py-2 lg:p-0 hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li className="border-b border-gray-700 lg:border-none">
            <Link
              to="/projects"
              className="block px-4 py-2 lg:p-0 hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
        </ul>

        {/* Dark Mode Toggle */}
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