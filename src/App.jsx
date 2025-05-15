import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodaysDeals from "./pages/TodaysDeals";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Loginsignup from "./pages/Loginsignup";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<TodaysDeals />} />
          <Route
            path="/mens-clothing"
            element={<ShopCategory category="mens clothing" />}
          />
          <Route
            path="/mens-shoes"
            element={<ShopCategory category="mens shoes" />}
          />
          <Route
            path="/womens-clothing"
            element={<ShopCategory category="womens clothing" />}
          />
          <Route
            path="/womens-shoes"
            element={<ShopCategory category="womens shoes" />}
          />
          <Route
            path="/sports & outdoors"
            element={<ShopCategory category="sports & outdoors" />}
          />
          <Route
            path="/electronics"
            element={<ShopCategory category="electronics" />}
          />
          <Route path="/health" element={<ShopCategory category="health" />} />
          <Route path="/product" element={<Product />} />
          <Route path=":productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Loginsignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
