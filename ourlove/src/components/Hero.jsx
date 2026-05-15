import { motion } from 'framer-motion'

const names = ['Đức Tùng', 'An Thảo']

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <motion.div
        className="absolute inset-0 cinema-gradient opacity-90"
        animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse' }}
      />
      <div className="absolute inset-0 bg-black/25" />
      <div className="relative z-10 max-w-3xl text-center text-white">
        <motion.p
          className="font-script text-3xl text-petal drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Chuyện tình đôi ta
        </motion.p>
        <motion.h1
          className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl glow-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {names[0]} &amp; {names[1]}
        </motion.h1>
        <motion.p
          className="mt-6 text-base sm:text-lg text-white/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Anh yêu em, Thảo! Anh yêu em mọi khoảnh khắc
        </motion.p>
        <motion.div
          className="mt-10 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#love-timer"
            className="romantic-button scroll-cat-button text-white transition"
            aria-label="Scroll to Begin"
          >
            <svg viewBox="0 0 64 64" aria-hidden="true" role="img">
              <path
                d="M20 12c2 0 5 4 6 6 2-1 4-1 6-1s4 0 6 1c1-2 4-6 6-6 4 0 6 8 6 14 0 14-10 24-24 24S8 40 8 26c0-6 2-14 6-14Zm8 20a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm14 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-10 10c-4 0-7-2-9-4a1 1 0 1 1 2-1c2 2 4 3 7 3s5-1 7-3a1 1 0 1 1 2 1c-2 2-5 4-9 4Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
