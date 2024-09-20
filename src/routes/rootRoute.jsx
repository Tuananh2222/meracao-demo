import ProductDetail from "@/Layout/Product Detail/Product-Detail";
import Home from "@/pages/Home/Home";
import { Route, Routes } from "react-router-dom";

function Root() {
  return (
    <div>
      <Routes>
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Root;
