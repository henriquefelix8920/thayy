"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ y, scale }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/thay-1.jpg')",
            filter: "brightness(0.45) saturate(1.1)",
          }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-deep)] via-transparent to-[var(--color-bg-deep)]/60" />

      <motion.div
        className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto"
        style={{ opacity }}
      >
        <motion.p
          className="text-sm tracking-[0.4em] uppercase text-[var(--color-accent-coral)] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Presença
        </motion.p>

        <motion.h1
          className="font-serif text-[clamp(4rem,14vw,12rem)] leading-[0.85] text-[var(--color-text-primary)] max-w-4xl"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          Thay
        </motion.h1>

        <motion.p
          className="mt-8 text-lg md:text-xl text-[var(--color-text-muted)] max-w-md text-balance"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Uma experiência editorial. Elegância que não precisa se explicar.
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-[var(--color-accent-coral)] to-transparent" />
      </motion.div>
    </section>
  );
}
