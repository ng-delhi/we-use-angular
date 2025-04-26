/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      "./src/**/*.{html,ts}",
    ],
    theme: {
      extend: {},
      screens: {
        // Mobile devices
        'max-xs': {'max': '479px'},   // Extra small mobile (<= 479px)
        'max-sm': {'max': '639px'},   // Small mobile (480px - 639px)
        
        // Tablets
        'max-md': {'max': '767px'},   // Tablets (640px - 767px)
        'max-lg': {'max': '1023px'},  // Small laptops / tablets
        
        // Desktops
        'max-xl': {'max': '1279px'},  // Medium desktops
        'max-2xl': {'max': '1535px'}, // Large desktops
        
        // Ultra large screens
        'max-3xl': {'max': '1919px'}, // Very large monitors
        'max-4xl': {'max': '2559px'}, // Ultra wide screens
      },
    },
    plugins: [],
  }
  