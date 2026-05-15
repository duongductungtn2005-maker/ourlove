import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Gallery from '../components/Gallery.jsx'
import Hero from '../components/Hero.jsx'
import LoveTimer from '../components/LoveTimer.jsx'
import Timeline from '../components/Timeline.jsx'

function SecretLetter() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [holdProgress, setHoldProgress] = useState(0)
  const [password, setPassword] = useState('')
  const holdTimeout = useRef(null)

  const startHold = () => {
    holdTimeout.current = setTimeout(() => {
      setIsUnlocked(true)
      setHoldProgress(100)
    }, 1200)

    setHoldProgress(40)
  }

  const endHold = () => {
    if (holdTimeout.current) clearTimeout(holdTimeout.current)
    if (!isUnlocked) setHoldProgress(0)
  }

  useEffect(() => {
    if (password.toLowerCase() === 'forever') setIsUnlocked(true)
  }, [password])

  return (
    <section id="secret-letter" className="relative py-20 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-script text-2xl text-rosewine">
          Tâm thư dành cho em
        </p>
        <h2 className="mt-3 font-display text-4xl text-velvet">
          Chỉ em có thể thấy
        </h2>
        <p className="mt-4 text-sm text-velvet/70">Nhập mật khẩu để mở.</p>
        <div className="mt-10 flex flex-col items-center gap-6">
          {!isUnlocked && (
            <div className="flex flex-col items-center gap-4">
              <button
                type="button"
                onMouseDown={startHold}
                onMouseUp={endHold}
                onMouseLeave={endHold}
                onTouchStart={startHold}
                onTouchEnd={endHold}
                className="relative h-20 w-20 rounded-full bg-rosewine text-white shadow-glow"
              >
                <span className="text-xs uppercase tracking-[0.3em]">Hold</span>
                <span
                  className="absolute bottom-0 left-0 h-1 rounded-full bg-petal"
                  style={{ width: `${holdProgress}%` }}
                />
              </button>
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password: forever"
                className="w-56 rounded-full border border-rosewine/30 bg-white/70 px-4 py-2 text-center text-sm text-velvet shadow-soft focus:outline-none"
              />
            </div>
          )}
          <motion.div
            className="glass-card w-full rounded-3xl p-8 text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={isUnlocked ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="rounded-3xl bg-white/30 p-6"
              initial={{ rotateX: 20, scaleY: 0.8 }}
              animate={isUnlocked ? { rotateX: 0, scaleY: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="font-script text-3xl text-rosewine">
                My Dearest Love,
              </p>
              <p className="mt-4 text-sm leading-relaxed text-velvet/80">
                Every day with you feels like a graceful scene, softly lit and
                wrapped in warmth. I promise to keep writing our story with
                tenderness, to celebrate the quiet moments, and to love you in
                every chapter ahead.
              </p>
              <p className="mt-6 font-script text-2xl text-rosewine">
                Forever yours.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function EndingSection() {
  return (
    <section id="ending" className="relative py-24 px-6">
      <div className="mx-auto max-w-4xl text-center text-velvet">
        <motion.div
          className="mx-auto mb-10 flex h-28 w-28 items-center justify-center rounded-full bg-rosewine/20"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          <motion.div
            className="h-16 w-16 rounded-full bg-rosewine"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2.8, repeat: Infinity }}
          />
        </motion.div>
        <p className="font-script text-3xl text-rosewine">The End</p>
        <h2 className="mt-4 font-display text-4xl">And Yet, Only the Beginning</h2>
        <p className="mt-6 text-sm text-velvet/70">
          "We are the story that keeps writing itself, glowing in the softest
          light."
        </p>
        <div className="mt-10 flex justify-center gap-3">
          {[...Array(6)].map((_, index) => (
            <span
              key={index}
              className="h-2 w-2 rounded-full bg-petal shadow-glow"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function Home() {
  return (
    <main className="relative">
      <Hero />
      <LoveTimer />
      <Timeline />
      <Gallery />
      <SecretLetter />
      <EndingSection />
    </main>
  )
}

export default Home
