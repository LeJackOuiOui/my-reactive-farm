export default function Layout({ title, children }) {
  return (
    <main className="mx-auto max-w-3xl p-4 sm:p-6 font-sans leading-relaxed text-gray-800 dark:text-gray-100 bg-white dark:bg-neutral-900 min-h-screen">
      {/* Header principal */}
      <header className="mb-8 border-b-2 border-gray-200 pb-3 dark:border-neutral-700">
        <h1 className="text-3xl font-semibold text-green-700 dark:text-green-400">
          {title}
        </h1>
      </header>

      {/* Contenido dinámico */}
      <section>{children}</section>

      {/* Footer simple */}
      <footer className="mt-10 border-t border-gray-200 dark:border-neutral-700 pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} My Reactive Farm 🐄🌾 — Built with React &
        Tailwind
      </footer>
    </main>
  );
}
