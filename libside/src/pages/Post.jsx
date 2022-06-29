import { useState } from "react";

export default function Post() {
  const [newPost, setNewPost] = useState({});
  const [submittedPosts, setSubmittedPosts] = useState([]);

  const handleChange = ({ target: { name, value } }) => {
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedPosts([...submittedPosts, { ...newPost, id: newPost.title }]);

    setNewPost({
      articleType: "",
      title: "",
      body: "",
      author: "",
    });
  };

  return (
    <div className="bg-gray-50">
      <br></br>
      <h1 className="text-4xl text-center">Write an article</h1>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center">
              <div className="text-center text-black mr-6">
                <select
                  className="mb-4 leading-tight drop-shadow-lg bg-white text-gray-400 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg focus:outline-none focus:bg-slate-100 focus:border-gray-200"
                  id="author"
                  name="author"
                  value={newPost.author}
                  onChange={handleChange}
                  required
                >
                  <option value="">My team</option>
                  <option value="Aix-En-Provence">Aix-En-Provence</option>
                  <option value="Aveiro">Aveiro</option>
                  <option value="Bordeaux">Bordeaux</option>
                  <option value="Brest">Brest</option>
                  <option value="Brussels">Brussels</option>
                  <option value="Canada">Canada</option>
                  <option value="Casablanca">Casablanca</option>
                  <option value="Clermont">Clermont-Ferrand</option>
                  <option value="Dijon">Dijon</option>
                  <option value="Geneva">Geneva</option>
                  <option value="Le Mans">Le Mans</option>
                  <option value="Lille">Lille</option>
                  <option value="Lyon">Lyon</option>
                  <option value="Munchen">München</option>
                  <option value="Nantes">Nantes</option>
                  <option value="Nice">Nice</option>
                  <option value="Niort">Niort</option>
                  <option value="Orléans">Orléans</option>
                  <option value="Paris">Paris</option>
                  <option value="Rennes">Rennes</option>
                  <option value="Strasbourg">Strasbourg</option>
                  <option value="Toulouse">Toulouse</option>
                  <option value="Tours">Tours</option>
                  <option value="Vernon">Vernon</option>
                </select>
              </div>
              <div className="text-center text-black mr-6">
                <select
                  className="mb-4 leading-tight drop-shadow-lg bg-white text-gray-400 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg focus:outline-none focus:bg-slate-100 focus:border-gray-200"
                  id="articleType"
                  name="articleType"
                  value={newPost.articleType}
                  onChange={handleChange}
                  required
                >
                  <option value="">I am writing an article for</option>
                  <option value="News">News</option>
                  <option value="Search">Search</option>
                </select>
              </div>
            </div>
            <div className="my-4">
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Title"
                value={newPost.title}
                onChange={handleChange}
                className="w-full rounded-md border border-slate-200 drop-shadow-lg bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
            <div className="mb-5">
              <textarea
                rows="4"
                id="body"
                name="body"
                placeholder="Article"
                value={newPost.body}
                onChange={handleChange}
                className="w-full resize-none rounded-md border border-slate-200 drop-shadow-lg bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button className="rounded-md bg-primary hover:bg-secondary py-3 px-8 text-base font-semibold text-white outline-none">
                Preview of my article
              </button>
            </div>
          </form>
        </div>
      </div>

      <div>
        <ul>
          {submittedPosts.map((post, index) => (
            // <li key={index} className="m-2">
            //   {post.articleType}
            //   {post.title}
            //   {post.body}
            //   {post.author}
            // </li>
            //   ))}
            <li key={index} className="text-center">
              <div className="relative pb-20 px-4">
                <div className="relative max-w-7xl mx-auto">
                  <div className="mt-12 max-w-lg mx-auto gap-5">
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div>
                          <p className="text-center text-sm font-medium text-indigo-600">
                            <a href="" className="hover:underline">
                              {post.title}
                            </a>
                          </p>
                          <a href="" className="block mt-2">
                            <p className="text-center text-xl font-semibold text-gray-900">
                              {post.author}
                            </p>
                            <p className="text-center mt-3 text-base text-gray-500">
                              {post.body}
                            </p>
                          </a>
                        </div>
                        <div className="mt-6 flex justify-center">
                          <div className="flex-shrink-0">
                            <a href="">
                              <span className="sr-only">{post.author}</span>
                              <img
                                className="h-10 w-10 rounded-full"
                                src="../src/assets/file_type_css_icon_130661.png"
                                alt="css-icon"
                              />
                            </a>
                          </div>
                          <div className="ml-3">
                            <p className="text-center text-sm font-medium text-gray-900">
                              <a href="" className="hover:underline">
                                Team Bdx
                              </a>
                            </p>
                            <div className="flex text-center space-x-1 text-sm text-gray-500">
                              <time>Mar 20, 2020</time>
                              <span aria-hidden="true">&middot;</span>
                              <span>4 min read</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="text-center">
          <button
            onClick={() => alert("Article publié")}
            className="rounded-md bg-primary hover:bg-secondary py-3 px-8 text-base font-semibold text-white outline-none"
          >
            Publish my article
          </button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}
