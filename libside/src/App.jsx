import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homepage";
import Post from "./pages/Post";
import ResearchPage from "./pages/ResearchPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post" element={<Post />} />
        <Route path="/research" element={<ResearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
