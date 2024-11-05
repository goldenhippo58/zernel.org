module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: '#0d0d0d',    // Dark background
        brightGreen: '#00ff00',       // Terminal-style green
        brightYellow: '#ffff00',      // Terminal-style yellow
        terminalWhite: '#f0f0f0',     // Off-white for text
      },
      fontFamily: {
        terminal: ['Courier', 'monospace'],
      },
    },
  },
  plugins: [],
}

