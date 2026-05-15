import { useMemo } from 'react'

const createItems = (count) =>
  Array.from({ length: count }).map((_, index) => ({
    id: `petal-${index}`,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 14 + Math.random() * 10,
    size: 14 + Math.random() * 16,
    blur: Math.random() * 1.6,
    rotate: Math.random() * 180,
  }))

const createHearts = (count) =>
  Array.from({ length: count }).map((_, index) => ({
    id: `heart-${index}`,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 18 + Math.random() * 10,
    size: 8 + Math.random() * 10,
    blur: Math.random() * 1.4,
  }))

function RosePetals() {
  const petals = useMemo(() => createItems(24), [])
  const hearts = useMemo(() => createHearts(12), [])

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="rose-petal absolute animate-drift"
          style={{
            left: `${petal.left}%`,
            top: '-10%',
            width: `${petal.size}px`,
            height: `${petal.size * 1.4}px`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            filter: `blur(${petal.blur}px)`,
            transform: `rotate(${petal.rotate}deg)`,
          }}
        />
      ))}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart absolute animate-drift opacity-60"
          style={{
            left: `${heart.left}%`,
            top: '-15%',
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            filter: `blur(${heart.blur}px)`,
          }}
        />
      ))}
    </div>
  )
}

export default RosePetals
