import { Link } from "react-router-dom";

function PostComponent() {
  return (
    <div className="flex flex-col items-center max-w-xl mx-auto text-center w-fit m-4 p-3 rounded-xl bg-white ring-1 ring-gray-300">
      <h2 className="text-sm font-bold sm:text-2xl">
        Want to be a part of Libside ?
      </h2>

      <p className="mx-auto text-sm mt-4 text-gray-500">
        If you also want to participate in Libside, post your work here so that
        all your collaborators can access to your web components.{" "}
      </p>

      <Link
        to="/post"
        className="flex items-center justify-between px-5 py-3 mt-8 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 group"
      >
        <span className="text-md mr-3 font-medium group-hover:text-white">
          Post my component
        </span>

        <span className="flex-shrink-0 bg-white border border-blue-600 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </Link>
    </div>
  );
}

export default PostComponent;
