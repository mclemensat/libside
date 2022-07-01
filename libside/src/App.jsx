import { Routes, Route } from "react-router-dom";

import HomePage from "@pages/Homepage";
import Post from "@pages/Post";
import ComponentDetails from "@pages/ComponentDetails";
import ResearchPage from "@pages/ResearchPage";

import Modal from "@components/Modal";

import Nav from "@components/Nav";

function App() {
  return (
    <>
      <div className="z-0 bg-[url(@assets/livre.jpg)] bg-cover min-h-screen w-screen bg-center">
        <div className="z-10 bg-bgwhite min-h-screen w-screen">
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post" element={<Post />} />
            <Route path="/component-details" element={<ComponentDetails />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/modal" element={<Modal />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
