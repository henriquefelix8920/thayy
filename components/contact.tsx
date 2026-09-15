"use client";
import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          className="text-sm tracking-[0.4em] uppercase text-[var(--color-accent-coral)] mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Contato
        </motion.p>

        <motion.h2
          className="font-serif text-5xl md:text-7xl leading-[1.05] mb-8 text-balance"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Vamos conversar.
        </motion.h2>

        <motion.p
          className="text-[var(--color-text-muted)] text-lg mb-12 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Discrição e atenção em cada detalhe. Entre em contato pelo WhatsApp.
        </motion.p>

        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--color-accent-coral)] text-white font-medium tracking-[0.15em] uppercase text-sm rounded-sm hover:bg-[var(--color-accent-orange)] transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Iniciar conversa
        </motion.a>
      </div>
    </section>
  );
}
