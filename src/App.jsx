import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Layout from "./pages/layout";
import PostDetail from "./pages/post-detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="detail/:id" element={<PostDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
