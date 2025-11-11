export default function AnimalCard({ animal, onSelect }) {
  const { name, type, age, weight, status } = animal;

  // Estilos condicionales según estado del animal
  const statusColors = {
    healthy:
      "bg-green-50 text-green-700 border-green-200 dark:bg-green-950/40 dark:text-green-200 dark:border-green-900/50",
    review:
      "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950/40 dark:text-yellow-200 dark:border-yellow-900/50",
    sick: "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-200 dark:border-red-900/50",
  };

  return (
    <article
      role="article"
      tabIndex="0"
      className={`flex flex-col gap-2 rounded-xl border p-4 shadow-sm transition hover:scale-[1.02] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer ${statusColors[status]}`}
      onClick={() => onSelect?.(animal)}
    >
      <header className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{name}</h2>
        <span
          className={`px-2 py-0.5 text-xs font-medium rounded-full capitalize ${
            status === "healthy"
              ? "bg-green-600 text-white"
              : status === "review"
              ? "bg-yellow-500 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {status}
        </span>
      </header>

      <ul className="text-sm space-y-1">
        <li>
          <strong className="text-gray-600 dark:text-gray-300">Type:</strong>{" "}
          {type}
        </li>
        <li>
          <strong className="text-gray-600 dark:text-gray-300">Age:</strong>{" "}
          {age} years
        </li>
        <li>
          <strong className="text-gray-600 dark:text-gray-300">Weight:</strong>{" "}
          {weight} kg
        </li>
      </ul>
    </article>
  );
}
