export default function Loader({ message = "Loading…" }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center gap-3 py-8 text-gray-700 dark:text-gray-200"
    >
      {/* Spinner visual */}
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-green-500 border-t-transparent"></div>

      {/* Mensaje accesible */}
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
}
