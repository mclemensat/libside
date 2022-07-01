function NewsCard({ city, techno1, techno2, title, text }) {
  return (
    <div className="flex flex-col m-2 p-2 overflow-hidden border bg-gray-50 border-gray-100 rounded-lg group sm:grid-cols-3 shadow-lg">
      <h1 className="text-lg font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
        {city}
      </h1>
      <ul className="flex items-end space-x-1">
        <li className="inline-block px-2 py-1 text-xs font-semibold text-white bg-primary rounded-full">
          {techno1}
        </li>

        <li className="inline-block px-3 py-1 text-xs font-semibold text-white bg-primary/75 rounded-full">
          {techno2}
        </li>
      </ul>

      <h5 className="mt-4 text-sm font-bold">{title}</h5>

      <p className="mt-2 text-sm text-gray-500">{text}</p>
    </div>
  );
}

export default NewsCard;
