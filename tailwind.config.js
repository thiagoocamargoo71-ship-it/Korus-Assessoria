/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {

      // 🎨 CORES
      colors: {
        background: '#1A1F26',

        gold: '#D4AF37',
        goldSoft: '#C5A27D',

        bronze: '#9B7B59',

        primary: '#0A317B',
        primaryLight: '#1545A5',
      },

      // 🔤 FONTES
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },

      // ✨ SOMBRAS
      boxShadow: {
        glow: '0 0 20px rgba(212,175,55,0.25)',
        glowBlue: '0 0 20px rgba(21,69,165,0.4)',
        soft: '0 8px 30px rgba(0,0,0,0.5)',
      },

      // 🌫️ BLUR
      backdropBlur: {
        xs: '2px',
      },

      // 🎯 TRANSIÇÃO
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

    },
  },
  plugins: [],
};