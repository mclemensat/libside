function NewsCard({ city, techno, title, text }) {
  return (
    <div className="flex flex-col m-2 p-2 overflow-hidden border bg-gray-50 border-gray-100 rounded-lg group sm:grid-cols-3">
      <ul className="flex items-end space-x-1">
        <li className="inline-block px-3 py-1 text-md font-semibold text-white bg-primary rounded-full">
          {city}
        </li>

        <li className="inline-block px-3 py-1 text-xs font-semibold text-white bg-primary rounded-full">
          {techno}
        </li>
      </ul>

      <h5 className="mt-4 font-bold">{title}</h5>

      <p className="mt-2 text-sm text-gray-500">{text}</p>
    </div>
  );
}

export default NewsCard;
