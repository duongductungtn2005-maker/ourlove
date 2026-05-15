import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home.jsx'
import RosePetals from './components/RosePetals.jsx'
import MusicPlayer from './components/MusicPlayer.jsx'
import memories from './data/memories.js'

const MIN_LOADING_MS = 1400

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-rosewine"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center text-white">
        <p className="font-display text-3xl tracking-wide">Our Love Story</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="h-2 w-2 rounded-full bg-white/80 animate-pulse"></span>
          <span className="h-2 w-2 rounded-full bg-white/60 animate-pulse"></span>
          <span className="h-2 w-2 rounded-full bg-white/40 animate-pulse"></span>
        </div>
        <p className="mt-6 text-sm uppercase tracking-[0.4em] text-white/70">
          Loading memories
        </p>
      </div>
    </motion.div>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [password, setPassword] = useState('')
  const [showError, setShowError] = useState(false)
  const imageSources = useMemo(
    () => memories.map((memory) => memory.image),
    []
  )

  useEffect(() => {
    // Preload gallery images for smoother transitions.
    const startTime = Date.now()
    const preloadPromises = imageSources.map(
      (src) =>
        new Promise((resolve) => {
          const image = new Image()
          image.onload = resolve
          image.onerror = resolve
          image.src = src
        })
    )

    Promise.all(preloadPromises).then(() => {
      const elapsed = Date.now() - startTime
      const remaining = Math.max(MIN_LOADING_MS - elapsed, 0)
      setTimeout(() => setIsLoading(false), remaining)
    })
  }, [imageSources])

  useEffect(() => {
    // Soft cursor glow follows the pointer for a cinematic feel.
    const handleMove = (event) => {
      const x = `${event.clientX - 110}px`
      const y = `${event.clientY - 110}px`
      document.documentElement.style.setProperty('--cursor-x', x)
      document.documentElement.style.setProperty('--cursor-y', y)
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (password.trim() === '425') {
      setIsUnlocked(true)
      setShowError(false)
    } else {
      setShowError(true)
    }
  }

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-cream text-velvet">
        <div className="cursor-glow" />
        <div className="flex min-h-screen items-center justify-center px-6">
          <form
            onSubmit={handleSubmit}
            className="glass-card w-full max-w-md rounded-3xl p-8 text-center"
          >
            <p className="font-script text-2xl text-rosewine">
              Nhập mật khẩu
            </p>
            <h2 className="mt-3 font-display text-3xl text-velvet">
              Chỉ em có thể thấy
            </h2>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Mật khẩu"
              className="mt-6 w-full rounded-full border border-rosewine/30 bg-white/70 px-4 py-3 text-center text-sm text-velvet shadow-soft focus:outline-none"
              type="password"
              inputMode="numeric"
            />
            {showError && (
              <p className="mt-3 text-sm text-rosewine">
                Mật khẩu chưa đúng.
              </p>
            )}
            <button
              type="submit"
              className="romantic-button mt-6 w-full rounded-full px-6 py-3 text-sm uppercase tracking-[0.35em] text-white"
            >
              Mở vào
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream text-velvet">
      <div className="cursor-glow" />
      <RosePetals />
      <MusicPlayer />
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>
      {!isLoading && <Home />}
    </div>
  )
}

export default App
