import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function LetterModal({ isOpen, memory, onClose }) {
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    if (!isOpen || !memory) {
      setTypedText('')
      return
    }

    let index = 0
    const interval = setInterval(() => {
      index += 1
      setTypedText(memory.letter.slice(0, index))
      if (index >= memory.letter.length) {
        clearInterval(interval)
      }
    }, 28)

    return () => clearInterval(interval)
  }, [isOpen, memory])

  useEffect(() => {
    if (!isOpen) return

    const handleKey = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && memory && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-lg" />
          <motion.div
            className="relative max-w-3xl rounded-3xl bg-white/10 p-8 text-white shadow-2xl"
            initial={{ y: 40, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <button
              type="button"
              className="absolute right-6 top-6 rounded-full border border-white/30 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/80"
              onClick={onClose}
            >
              Close
            </button>
            <div className="grid gap-6 md:grid-cols-[1.1fr_1fr]">
              <img
                src={memory.image}
                alt={memory.title}
                className="h-64 w-full rounded-2xl object-cover"
              />
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-petal">
                  {memory.date}
                </p>
                <h3 className="mt-3 font-display text-3xl glow-text">
                  {memory.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/80">
                  {memory.caption}
                </p>
                <p className="mt-6 font-script text-xl text-petal typewriter">
                  {typedText}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LetterModal
