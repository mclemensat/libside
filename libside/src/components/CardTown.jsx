import { useState } from "react";

const posts = [
  {
    title: "Nantes",
    href: "#",
    category: { name: "Component", href: "#" },
    description: "Searches for a random avatar component",
    date: "Jun 29, 2022",
    datetime: "2022-06-29",

    readingTime: "6 min",
    author: {
      name: "Team Nantes",
      href: "#",
      imageUrl: "../src/assets/react_original_logo_icon_146374.png",
    },
  },
  {
    title: "Nice",
    href: "#",
    category: { name: "Component", href: "#" },
    description: "Search for an MDP Middleware component",
    date: "Jun 30, 2022",
    datetime: "2022-06-30",

    readingTime: "11 min",
    author: {
      name: "Team Nice",
      href: "#",
      imageUrl: "../src/assets/file_type_html_icon_130541.png",
    },
  },
];

export default function CardTown() {
  const [answer, setAnswer] = useState({});
  const [submittedAnswer, setSubmittedAnswer] = useState([]);
  console.log(submittedAnswer);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedAnswer([answer]);

    e.target.reset();
  };

  return (
    <div className="p-6">
      <div className="relative max-w-4xl mx-auto">
        <div className="max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-1 mb-3 bg-white p-6 flex flex-col justify-between">
                <div>
                  <p className="text-sm font-medium text-primary">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </div>
              </div>
              <div className="flex justify-center mb-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.author.imageUrl}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200"></div>
              <div
                id="messages"
                className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
              >
                <div className="chat-message">
                  <div className="flex items-end justify-end">
                    <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end"></div>
                    <img
                      src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4"
                      alt="My profile"
                      className="w-6 h-6 rounded-full order-2"
                    />
                  </div>
                </div>
              </div>

              <form>
                <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
                  <input
                    id="answer"
                    name="answer"
                    type="text"
                    value=""
                    placeholder="Help the team!"
                    className="w-full mb-2 focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
                  />
                  <div className="absolute right-0 items-center inset-y-0 hidden sm:flex"></div>
                </div>
              </form>
            </div>
          ))}

          <div
            key=""
            className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div>
                <p className="text-sm font-medium text-primary">
                  <a href="" className="hover:underline">
                    Component
                  </a>
                </p>
                <a href="" className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900">
                    Bordeaux
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    Looking for a label scan component
                  </p>
                </a>
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a href="">
                    <span className="sr-only">Team Bdx</span>
                    <img
                      className="h-10 w-10 rounded-full"
                      src="../src/assets/file_type_css_icon_130661.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a href="" className="hover:underline">
                      Team Bdx
                    </a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime="{post.datetime}">Jul 01, 2022</time>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200"></div>
              <div
                id="messages"
                className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
              >
                <div className="chat-message">
                  <div className="flex items-end justify-end">
                    <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                      <div>
                        <ul>
                          {submittedAnswer.map((a, index) => (
                            <li
                              key={answer.id}
                              className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-primary text-white "
                            >
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <img
                      src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4"
                      alt="My profile"
                      className="w-6 h-6 rounded-full order-2"
                    />
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
                  <input
                    id="answer"
                    name="answer"
                    type="text"
                    value={answer.answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Help the team!"
                    className="w-full mb-2 focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
                  />
                  <div className="absolute right-0 items-center inset-y-0 hidden sm:flex"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
