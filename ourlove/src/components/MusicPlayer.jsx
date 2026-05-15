import { useEffect, useRef, useState } from 'react'

// Replace with your own track in public/music.
const trackUrl = '/music/romance.mp3'

function MusicPlayer({ autoPlay = false }) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (!autoPlay || !audioRef.current) return

    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false))
  }, [autoPlay])

  const togglePlayback = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
    }
  }

  return (
    <div className="fixed right-6 top-6 z-30">
      <button
        type="button"
        onClick={togglePlayback}
        className="glass-card rounded-full px-5 py-3 text-xs uppercase tracking-[0.35em] text-white/80 transition hover:text-white"
      >
        {isPlaying ? 'Pause' : 'Play'} Music
      </button>
      <audio ref={audioRef} src={trackUrl} loop preload="auto" />
    </div>
  )
}

export default MusicPlayer
