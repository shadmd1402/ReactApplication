import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideosList from "./pages/VideosList";
import Hello from "./demo/Hello";
import Dashboard from "./pages/Dashboard";
import Products from "./product/Products";
import AddProduct from "./product/AddProduct";

function App() {
  const userdetails = {
    username: "Shad",
    description: "desasxas asxasx asxasxa ",
    phone: "",
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VideosList />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/dashboard" element={<Dashboard user={userdetails} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/addproduct" element={<AddProduct />} />
        {/* /asxajbckas */}
        {/* sdhjcbskcdbsk */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
