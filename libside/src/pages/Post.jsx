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
    <div>
      <h1 className="mt-4 text-4xl text-center">Write an article</h1>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleSubmit}>
            <div className="text-center text-black mr-6">
              <select
                className="mb-4 leading-tight drop-shadow-lg bg-[#D9D9D9] text-gray-400 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg focus:outline-none focus:bg-slate-100 focus:border-gray-200"
                id="articleType"
                name="articleType"
                value={newPost.articleType}
                onChange={handleChange}
              >
                <option value="">I am writing an article for</option>
                <option value="News">News</option>
                <option value="Search">Search</option>
              </select>
            </div>
            <div className="mb-5">
              <label
                htmlFor="title"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Title"
                value={newPost.title}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="body"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Body
              </label>
              <textarea
                rows="4"
                id="body"
                name="body"
                placeholder="Article"
                value={newPost.body}
                onChange={handleChange}
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div className="text-center text-black mr-6">
              <select
                className="mb-4 leading-tight drop-shadow-lg bg-[#D9D9D9] text-gray-400 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg focus:outline-none focus:bg-slate-100 focus:border-gray-200"
                id="author"
                name="author"
                value={newPost.author}
                onChange={handleChange}
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
            <div>
              <button className="hover:shadow-form rounded-md bg-primary hover:bg-secondary py-3 px-8 text-base font-semibold text-white outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <h2>Mes posts</h2>
      <div>
        <ul>
          {submittedPosts.map((post, index) => (
            <li key={index} className="m-2">
              {post.articleType}
              {post.title}
              {post.body}
              {post.author}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
