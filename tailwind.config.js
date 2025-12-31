/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {
      colors: {
        'ctos': {
          primary: '#00D4FF',
          secondary: '#0099CC',
          accent: '#FF6B00',
          danger: '#FF0044',
          success: '#00FF88',
          dark: '#0A0E1A',
          'dark-lighter': '#151B2D',
          gray: '#7D8CA3',
          light: '#FFFFFF'
        }
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        primary: ['Rajdhani', 'sans-serif'],
        mono: ['Courier New', 'monospace']
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00D4FF 0%, #0099CC 100%)',
        'gradient-danger': 'linear-gradient(135deg, #FF0044 0%, #CC0033 100%)'
      },
      animation: {
        'glitch': 'glitch 1s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '25%': { transform: 'translate(-2px, 2px)' },
          '50%': { transform: 'translate(2px, -2px)' },
          '75%': { transform: 'translate(-2px, -2px)' }
        }
      }
    }
  },
  plugins: []
}
