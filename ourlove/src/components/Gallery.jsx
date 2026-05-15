import { useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import memories from '../data/memories.js'
import LetterModal from './LetterModal.jsx'
import galleryVideo from '../image/vid1.mp4'

function Gallery() {
  const [activeMemory, setActiveMemory] = useState(null)

  return (
    <section id="gallery" className="relative py-20 px-6">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 text-center">
          <p className="font-script text-2xl text-rosewine">Memory Gallery</p>
          <h2 className="mt-3 font-display text-4xl text-velvet">
            Frames of Us
          </h2>
        </div>
        <div className="hidden sm:block">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {memories.map((memory) => (
              <motion.button
                key={memory.id}
                type="button"
                className="group w-full overflow-hidden rounded-3xl text-left"
                onClick={() => setActiveMemory(memory)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative">
                  <img
                    src={memory.image}
                    alt={memory.title}
                    className="h-72 w-full rounded-3xl object-cover sm:h-80 lg:h-96"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 transition group-hover:opacity-100">
                    <p className="text-xs uppercase tracking-[0.3em] text-petal">
                      {memory.date}
                    </p>
                    <p className="mt-2 font-display text-2xl text-white">
                      {memory.title}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
        <div className="sm:hidden">
          <Swiper spaceBetween={16} slidesPerView={1.1}>
            {memories.map((memory) => (
              <SwiperSlide key={memory.id}>
                <button
                  type="button"
                  className="w-full text-left"
                  onClick={() => setActiveMemory(memory)}
                >
                  <img
                    src={memory.image}
                    alt={memory.title}
                    className="h-80 w-full rounded-3xl object-cover"
                  />
                  <p className="mt-4 text-xs uppercase tracking-[0.3em] text-rosewine">
                    {memory.date}
                  </p>
                  <p className="mt-2 font-display text-2xl text-velvet">
                    {memory.title}
                  </p>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-14">
          <video
            className="w-full rounded-3xl object-cover"
            controls
            preload="metadata"
          >
            <source src={galleryVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <LetterModal
        isOpen={Boolean(activeMemory)}
        memory={activeMemory}
        onClose={() => setActiveMemory(null)}
      />
    </section>
  )
}

export default Gallery
