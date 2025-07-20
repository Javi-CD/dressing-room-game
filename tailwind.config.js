/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'game-pink': '#ff6b9d',
        'game-purple': '#a855f7',
        'game-blue': '#3b82f6',
        'game-green': '#10b981',
      },
      fontFamily: {
        game: ['Comic Sans MS', 'cursive'],
      },
    },
  },
  plugins: [],
};
