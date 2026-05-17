/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#6C63FF',
          light: '#8B85FF',
          dark: '#5A52CC',
        },
        secondary: {
          DEFAULT: '#FF6584',
          light: '#FF85A0',
          dark: '#CC4D67',
        },
        accent: '#00D4FF',
        surface: {
          light: 'rgba(255,255,255,0.75)',
          dark: 'rgba(15,15,35,0.75)',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6C63FF, #FF6584)',
        'gradient-cool': 'linear-gradient(135deg, #6C63FF, #00D4FF)',
        'gradient-warm': 'linear-gradient(135deg, #FF6584, #FFB347)',
        'gradient-hero-light': 'linear-gradient(135deg, #F8F9FF 0%, #EEF0FF 50%, #FFE8EC 100%)',
        'gradient-hero-dark': 'linear-gradient(135deg, #0D0D1A 0%, #16163A 50%, #1A0D1A 100%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 2s infinite',
        glow: 'glow 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(108,99,255,0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(108,99,255,0.9), 0 0 60px rgba(255,101,132,0.5)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        glass: '0 8px 32px rgba(108,99,255,0.15)',
        'glass-dark': '0 8px 32px rgba(0,0,0,0.4)',
        glow: '0 0 30px rgba(108,99,255,0.4)',
        'glow-pink': '0 0 30px rgba(255,101,132,0.4)',
        card: '0 20px 60px rgba(108,99,255,0.12)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
