/* This example requires Tailwind CSS v2.0+ */
const posts = [
  {
    title: "Nantes",
    href: "#",
    category: { name: "Component", href: "#" },
    description: "Searches for a random avatar component",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",

    readingTime: "6 min",
    author: {
      name: "Team Nantes",
      href: "#",
      imageUrl: "../src/assets/react_original_logo_icon_146374.png",
    },
  },
  {
    title: "Bordeaux",
    href: "#",
    category: { name: "Component", href: "#" },
    description: "Looks for a label scan component",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    readingTime: "4 min",
    author: {
      name: "Team Bdx",
      href: "#",
      imageUrl: "../src/assets/file_type_css_icon_130661.png",
    },
  },
  {
    title: "Nice",
    href: "#",
    category: { name: "Component", href: "#" },
    description: "Search for an MDP Middleware component",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",

    readingTime: "11 min",
    author: {
      name: "Team Nice",
      href: "#",
      imageUrl: "../src/assets/file_type_html_icon_130541.png",
    },
  },
];

export default function CardTown() {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div>
                  <p className="text-sm font-medium text-indigo-600">
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
                <div className="mt-6 flex items-center">
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
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
