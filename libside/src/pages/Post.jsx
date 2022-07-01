import { useState } from "react";

import Nav from "@components/Nav";
import CSS from "@assets/file_type_css_icon_130661.png";
import Modal from "@components/Modal";

export default function Post() {
  const [newPost, setNewPost] = useState({});
  const [submittedPosts, setSubmittedPosts] = useState([]);
  const [shoMyModal, setShowMyModal] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedPosts([...submittedPosts, { ...newPost, id: newPost.title }]);

    setNewPost({
      team: "",
      subject: "",
      title: "",
      body: "",
    });
  };

  const handleOnClose = () => setShowMyModal(false);

  return (
    <div className="z-0 bg-[url(@assets/livre.jpg)] bg-cover min-h-screen w-screen bg-center">
      <div className="z-10 bg-[rgba(255,255,255,0.90)] min-h-screen w-screen">
        <br></br>
        <h1 className="mt-4 mb-12 text-4xl drop-shadow-lg uppercase text-center text-primary">
          Post an article
        </h1>
        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[550px]">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col align-left">
                <div className="text-black mr-6">
                  <select
                    className="w-64 mb-8 leading-tight drop-shadow-lg bg-white text-gray-400 border-[1.5px] border-primary text-gray-700 py-3 px-4 pr-8 rounded-lg focus:outline-none focus:bg-slate-100 focus:border-gray-200"
                    id="team"
                    name="team"
                    value={newPost.team}
                    onChange={handleChange}
                  >
                    <option value="">Your team</option>
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
                <div className="text-black mr-6">
                  <select
                    className="w-64 mb-8 leading-tight drop-shadow-lg bg-white text-gray-400 border-[1.5px] border-primary text-gray-700 py-3 px-4 pr-8 rounded-lg focus:outline-none focus:bg-slate-100 focus:border-gray-200"
                    id="subject"
                    name="subject"
                    value={newPost.subject}
                    onChange={handleChange}
                  >
                    <option value="">Subject</option>
                    <option value="News">News</option>
                    <option value="Search">Search</option>
                  </select>
                </div>
              </div>
              <div className="mb-8">
                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Title"
                  value={newPost.title}
                  onChange={handleChange}
                  className="w-full rounded-md border-[1.5px] border-primary drop-shadow-lg bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <textarea
                  rows="4"
                  id="body"
                  name="body"
                  placeholder="Your message"
                  value={newPost.body}
                  onChange={handleChange}
                  className="w-full resize-none rounded-md border-[1.5px] border-primary drop-shadow-lg bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
              </div>
              <div className="text-center">
                <button className="mt-8 mx-12 rounded-md bg-primary hover:bg-secondary py-3 px-8 text-base font-semibold text-white outline-none">
                  Preview
                </button>
                <button
                  onClick={() => setShowMyModal(true)}
                  className="mt-8 mx-12 rounded-md bg-primary hover:bg-secondary py-3 px-8 text-base font-semibold text-white outline-none"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>

        <div>
          <ul>
            {submittedPosts.map((post, index) => (
              <li key={index} className="text-center">
                <div className="relative pb-20 px-4">
                  <div className="relative max-w-7xl mx-auto">
                    <div className="mt-4 max-w-lg mx-auto gap-5">
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
                                {post.team}
                              </p>
                              <p className="text-center mt-3 text-base text-gray-500">
                                {post.body}
                              </p>
                            </a>
                          </div>
                          <div className="mt-6 flex justify-center">
                            <div className="flex-shrink-0">
                              <a href="">
                                <span className="sr-only">{post.team}</span>
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={CSS}
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
                                <time>Jul 01, 2022</time>
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
        </div>
        <Modal onClose={handleOnClose} visible={shoMyModal} />
      </div>
    </div>
  );
}
