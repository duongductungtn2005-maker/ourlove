/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        rosewine: '#7e1e2e',
        blush: '#f6c3d0',
        cream: '#fff7f2',
        velvet: '#3a0c16',
        petal: '#ffdbe6',
        pearl: '#fffaf7',
      },
      boxShadow: {
        glow: '0 0 30px rgba(255, 162, 190, 0.35)',
        soft: '0 10px 30px rgba(58, 12, 22, 0.18)',
      },
      backdropBlur: {
        xl: '22px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        drift: {
          '0%': { transform: 'translate3d(0, -10%, 0) rotate(0deg)' },
          '100%': { transform: 'translate3d(0, 110%, 0) rotate(360deg)' },
        },
        pulseHeart: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.08)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 4s ease-in-out infinite',
        drift: 'drift 18s linear infinite',
        heart: 'pulseHeart 3.5s ease-in-out infinite',
        shimmer: 'shimmer 10s ease infinite',
      },
      fontFamily: {
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        body: ['"DM Sans"', '"Nunito"', 'sans-serif'],
        script: ['"Great Vibes"', '"Allura"', 'cursive'],
      },
    },
  },
  plugins: [],
}
