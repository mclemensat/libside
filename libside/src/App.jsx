import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homepage";
import Post from "./pages/Post";
<<<<<<< HEAD
import ComponentDetails from "./pages/ComponentDetails";
=======
import ResearchPage from "./pages/ResearchPage";
>>>>>>> c3b4df27538ab979ab4c516d3d3f53b448672ab3

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post" element={<Post />} />
<<<<<<< HEAD
        <Route path="/component-details" element={<ComponentDetails />} />
=======
        <Route path="/research" element={<ResearchPage />} />
>>>>>>> c3b4df27538ab979ab4c516d3d3f53b448672ab3
      </Routes>
    </div>
  );
}

export default App;
