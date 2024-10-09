import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Assuming you use React Router

import Layout from "./layout/Layout";
import Homepage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/category/:id" element={<ProductPage />} /> */}
          <Route path="/categories/*" element={<CategoryPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
