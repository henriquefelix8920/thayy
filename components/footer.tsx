export default function Footer() {
  return (
    <footer className="relative py-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-serif text-xl tracking-[0.2em]">THAY</p>
        <p className="text-sm text-[var(--color-text-muted)]">
          © {new Date().getFullYear()} — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
