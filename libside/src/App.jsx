import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homepage";
import Post from "./pages/Post";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post" element={<Post />}/>
      </Routes>
    </div>
  );
}

export default App;
