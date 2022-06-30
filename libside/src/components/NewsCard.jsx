function NewsCard() {
  return (
    <div className="flex flex-col m-2 p-2 overflow-hidden border border-gray-100 rounded-lg group sm:grid-cols-3">
      <ul className="flex space-x-1">
        <li className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">
          Notice
        </li>

        <li className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">
          Information
        </li>
      </ul>

      <h5 className="mt-4 font-bold">Lorem ipsum dolor sit amet.</h5>

      <p className="mt-2 text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        adipisci!
      </p>
    </div>
  );
}

export default NewsCard;
