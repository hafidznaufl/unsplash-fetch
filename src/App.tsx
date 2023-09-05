import Layout from "./layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Homes";
import Photos from "./pages/Photos";
import Collections from "./pages/Collections";
import Topics from "./pages/Topics";

function App() {
  return (
    <main>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/topics" element={<Topics />} />
        </Routes>
      </Layout>
    </main>
  );
}

export default App;
