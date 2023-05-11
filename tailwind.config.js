/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px'
    },
    extend: {
      colors:{
        primary: '#0a0a0a',
        accent: '#B809c3',
        primaryColor: '#67DB52'
      },
      backgroundImage: {
          site : 'url("./assets/site-bg.jpg")',
          about: "url('./assets/about(1).png')",
          service: "url('./assets/services.png')"
          
      }
    }
  },
  plugins: [],
}
