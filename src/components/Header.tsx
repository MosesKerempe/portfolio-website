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

        {/* Navigation Links (Desktop) */}
        <ul className="hidden lg:flex lg:space-x-4 lg:items-center">
          <li>
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/timeline" className="hover:text-gray-400">
              Timeline
            </Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-gray-400">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-gray-400">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">
              Contact
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

        {/* Mobile Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:hidden absolute top-16 left-0 w-full bg-gray-800 z-10`}
        >
          <li className="border-b border-gray-700">
            <Link
              to="/"
              className="block px-4 py-2 hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="border-b border-gray-700">
            <Link
              to="/about"
              className="block px-4 py-2 hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="border-b border-gray-700">
            <Link
              to="/timeline"
              className="block px-4 py-2 hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Timeline
            </Link>
          </li>
          <li className="border-b border-gray-700">
            <Link
              to="/skills"
              className="block px-4 py-2 hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li className="border-b border-gray-700">
            <Link
              to="/projects"
              className="block px-4 py-2 hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li className="border-b border-gray-700">
            <Link
              to="/contact"
              className="block px-4 py-2 hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;