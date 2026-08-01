/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#0A1713',
          900: '#0F231C',
          800: '#162E25',
          700: '#1F3F34',
          600: '#2A5244',
        },
        coffee: {
          950: '#1B0E09',
          900: '#2C1810',
          800: '#3D2314',
          700: '#52301A',
          600: '#6F3E22',
          500: '#8C522D',
          400: '#A7693B',
        },
        cream: {
          50: '#FFFDF9',
          100: '#FDFBF7',
          200: '#F7F2EB',
          300: '#EFE6D8',
          400: '#E6D7C3',
          500: '#D9C5AA',
        },
        gold: {
          400: '#E5C158',
          500: '#D4AF37',
          600: '#C5A059',
          700: '#A68239',
        },
        accent: {
          pistachio: '#E3EAD8',
          mocha: '#F3E9DC',
          blush: '#FDF0ED',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        script: ['"Alex Brush"', 'cursive'],
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '28px',
        '4xl': '36px',
        '5xl': '48px',
      },
      boxShadow: {
        'luxury': '0 20px 50px -12px rgba(15, 35, 28, 0.12)',
        'luxury-hover': '0 30px 60px -15px rgba(15, 35, 28, 0.22)',
        'glow-gold': '0 0 25px rgba(212, 175, 55, 0.35)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'smoke': 'smokeRise 4s ease-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        smokeRise: {
          '0%': { opacity: '0.2', transform: 'translateY(0) scale(1)' },
          '50%': { opacity: '0.5', transform: 'translateY(-15px) scale(1.1)' },
          '100%': { opacity: '0', transform: 'translateY(-30px) scale(1.2)' },
        }
      }
    },
  },
  plugins: [],
}
