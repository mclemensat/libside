function ResearchCard({
  imgSrc,
  agencyLocation,
  componentName,
  componentDescription,
  creationDate,
  creatorName,
}) {
  return (
    <article className="m-4 p-6 bg-white sm:p-8 rounded-xl ring ring-indigo-50">
      <div className="flex items-start">
        <div
          className="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full "
          aria-hidden="true"
        >
          <div className="flex items-center gap-1">
            <img src={imgSrc} alt="logo" />
          </div>
        </div>

        <div className="sm:ml-8">
          <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
            {agencyLocation}
          </strong>

          <h2 className="mt-4 text-lg font-medium sm:text-xl">
            <a href="" className="hover:underline">
              {" "}
              {componentName}{" "}
            </a>
          </h2>

          <p className="mt-1 text-sm text-gray-700">{componentDescription}</p>

          <div className="mt-4 sm:flex sm:items-center sm:gap-2">
            <div className="flex items-center text-gray-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p className="ml-1 text-xs font-medium">{creationDate}</p>
            </div>

            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>

            <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
              Created by {creatorName}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ResearchCard;
