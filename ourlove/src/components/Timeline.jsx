import { motion } from 'framer-motion'
import memories from '../data/memories.js'

function Timeline() {
  return (
    <section id="timeline" className="relative py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="font-script text-2xl text-rosewine">
            Thời gian quen nhaoooo
          </p>
          <h2 className="mt-3 font-display text-4xl text-velvet">
            Kỉ niệm siêu bựa
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-rosewine/30 sm:left-1/2" />
          <div className="space-y-10">
            {memories.map((event, index) => (
              <motion.div
                key={event.id}
                className={`relative flex flex-col gap-6 sm:flex-row ${
                  index % 2 === 0
                    ? 'sm:justify-start'
                    : 'sm:flex-row-reverse sm:justify-start'
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-rosewine text-white shadow-glow sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                  <span className="text-xs">{index + 1}</span>
                </div>
                <div className="glass-card w-full rounded-3xl p-6 sm:w-[46%]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-96 w-full rounded-2xl object-cover"
                  />
                  <p className="mt-4 text-xs uppercase tracking-[0.35em] text-rosewine">
                    {event.date}
                  </p>
                  <h3 className="mt-3 font-display text-2xl text-velvet">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm text-velvet/70">
                    {event.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
