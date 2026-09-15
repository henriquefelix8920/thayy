"use client";
import { motion } from "framer-motion";
import { platforms } from "@/lib/data";

export default function Platforms() {
  return (
    <section id="platforms" className="relative py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-sm tracking-[0.4em] uppercase text-[var(--color-accent-coral)] mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Plataformas
        </motion.p>

        <motion.h2
          className="font-serif text-4xl md:text-6xl mb-16 text-balance"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Onde encontrar.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform, i) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target={platform.status === "real" ? "_blank" : undefined}
              rel={platform.status === "real" ? "noopener noreferrer" : undefined}
              className="group relative p-8 border border-white/10 rounded-sm hover:border-[var(--color-accent-coral)]/50 transition-colors duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="block text-xs tracking-[0.3em] uppercase text-[var(--color-text-muted)] mb-4">
                {platform.status === "demo" ? "Demonstração" : "Oficial"}
              </span>
              <h3 className="font-serif text-2xl mb-2">{platform.name}</h3>
              <p className="text-[var(--color-text-muted)] text-sm">
                {platform.handle}
              </p>
              <span className="absolute bottom-8 right-8 text-[var(--color-accent-coral)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl">
                →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
