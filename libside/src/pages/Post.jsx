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
      title: "",
      body: "",
      author: "",
    });
  };

  return (
    <div>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleSubmit}>
          <div className="text-black mr-6">
          <label htmlFor="persona" className="text-xl">
            En tant que
          </label>
          <select
            className="leading-tight drop-shadow-lg bg-[#D9D9D9] text-gray-400 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg focus:outline-none focus:bg-slate-100 focus:border-gray-200"
            id="persona"
            name="persona"
            value={newPost.articleType}
            onChange={handleChange}
          >
            <option value="">PERSONA A SELECT.</option>
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
            <div className="mb-5">
              <label
                htmlFor="author"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Author
              </label>
              <input
                id="author"
                name="author"
                type="text"
                placeholder="Author"
                value={newPost.author}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
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
            <li key={index}>
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
