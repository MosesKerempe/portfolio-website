module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Updated from 'purge' to 'content' for Tailwind v3+
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Example primary color
        secondary: '#9333EA', // Example secondary color
        darkBackground: '#1A202C', // Custom dark mode background color
        darkText: '#E2E8F0', // Custom dark mode text color
      },
      spacing: {
        '128': '32rem', // Example custom spacing
        '144': '36rem',
      },
      boxShadow: {
        'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.9)', // Custom shadow for dark mode
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'], // Enable dark mode for background colors
      textColor: ['dark'], // Enable dark mode for text colors
      borderColor: ['dark'], // Enable dark mode for borders
      boxShadow: ['dark'], // Enable dark mode for shadows
    },
  },
  plugins: [],
};