export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#000000',
          900: '#050506',
          850: '#0a0a0c',
          800: '#101014',
          700: '#17171c',
          border: '#22222b',
        },
        purple: {
          50: '#f4ecff',
          100: '#e5d4ff',
          200: '#cbaaff',
          300: '#b07dff',
          400: '#9a52ff',
          500: '#8b2bff',
          600: '#7318e0',
          700: '#5b12b8',
          800: '#420b87',
          900: '#2a0758',
        },
        muted: '#a0a0a0',
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(139,43,255,0.35), 0 18px 60px -20px rgba(139,43,255,0.55)',
        'glow-sm': '0 10px 40px -18px rgba(139,43,255,0.7)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      keyframes: {
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        dash: {
          to: { strokeDashoffset: '-200' },
        },
        pulseNode: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'spin-slow': 'spinSlow 48s linear infinite',
        float: 'float 7s ease-in-out infinite',
        dash: 'dash 6s linear infinite',
        'pulse-node': 'pulseNode 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
