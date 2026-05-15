import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

const startDate = new Date(2026, 3, 25, 0, 0, 0)

const units = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
]

const getDuration = (now) => {
  const diff = Math.max(now.getTime() - startDate.getTime(), 0)
  const seconds = Math.floor(diff / 1000)
  const days = Math.floor(seconds / 86400)
  const hours = Math.floor((seconds % 86400) / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60

  return { days, hours, minutes, seconds: remainingSeconds }
}

function AnimatedValue({ value }) {
  return (
    <AnimatePresence mode="popLayout">
      <motion.span
        key={value}
        className="text-3xl font-display timer-value"
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -16, opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {String(value).padStart(2, '0')}
      </motion.span>
    </AnimatePresence>
  )
}

function LoveTimer() {
  const [duration, setDuration] = useState(() => getDuration(new Date()))

  useEffect(() => {
    const interval = setInterval(() => {
      setDuration(getDuration(new Date()))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const stats = useMemo(
    () =>
      units.map((unit) => ({
        ...unit,
        value: duration[unit.key],
      })),
    [duration]
  )

  return (
    <section id="love-timer" className="relative py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="glass-card love-timer-card rounded-3xl px-8 py-12 text-center">
          <p className="font-script text-2xl timer-subtitle">Together Since</p>
          <h2 className="mt-4 font-display text-4xl glow-text timer-date">
            25 April 2026
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.key}
                className="rounded-2xl bg-white/10 px-5 py-6 backdrop-blur"
              >
                <AnimatedValue value={item.value} />
                <p className="mt-2 text-sm uppercase tracking-[0.3em] timer-label">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoveTimer
