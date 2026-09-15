"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} id="about" className="relative py-32 md:py-48 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          className="relative aspect-[3/4] overflow-hidden rounded-sm"
          initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.img
            src="/images/thay-2.jpg"
            alt="Thay de moletom marrom"
            className="w-full h-full object-cover"
            style={{ x }}
          />
        </motion.div>

        <div>
          <motion.p
            className="text-sm tracking-[0.4em] uppercase text-[var(--color-accent-coral)] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Essência
          </motion.p>

          <motion.h2
            className="font-serif text-4xl md:text-6xl leading-[1.1] mb-8 text-balance"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Discreta quando necessário. Marcante por natureza.
          </motion.h2>

          <motion.p
            className="text-[var(--color-text-muted)] text-lg leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Cada detalhe importa. A forma como você se apresenta, o que escolhe
            mostrar e o que deixa no silêncio. Thay construiu uma presença que
            não depende de excessos — ela é feita de intenção.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
