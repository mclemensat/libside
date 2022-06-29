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
      <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleSubmit}>
            <div class="mb-5">
              <label
                htmlFor="title"
                class="mb-3 block text-base font-medium text-[#07074D]"
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
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label
                htmlFor="body"
                class="mb-3 block text-base font-medium text-[#07074D]"
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
                class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div class="mb-5">
              <label
                htmlFor="author"
                class="mb-3 block text-base font-medium text-[#07074D]"
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
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div>
              <button class="hover:shadow-form rounded-md bg-[#527CA4] py-3 px-8 text-base font-semibold text-white outline-none">
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
