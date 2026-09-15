"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { photos } from "@/lib/data";

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section ref={ref} id="gallery" className="relative py-32 md:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p
          className="text-sm tracking-[0.4em] uppercase text-[var(--color-accent-coral)] mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Galeria
        </motion.p>

        <motion.h2
          className="font-serif text-4xl md:text-6xl mb-16 text-balance"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Fragmentos de uma presença.
        </motion.h2>
      </div>

      <motion.div
        className="relative w-full"
        style={{ scale, opacity }}
      >
        <div className="flex gap-4 md:gap-6 px-6 md:px-12 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8">
          {photos.map((photo, i) => (
            <motion.button
              key={i}
              className="relative flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[35vw] aspect-[3/4] overflow-hidden rounded-sm snap-center group"
              onClick={() => setSelected(i)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-deep)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-[var(--color-bg-deep)]/95 backdrop-blur-xl flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={photos[selected].src}
              alt={photos[selected].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
            <button
              className="absolute top-6 right-6 text-[var(--color-text-primary)] text-4xl leading-none hover:text-[var(--color-accent-coral)] transition-colors"
              onClick={() => setSelected(null)}
              aria-label="Fechar"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
