import Layout from "./layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";

function App() {
  return (
    <main>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </Layout>
    </main>
  );
}

export default App;
