import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Index from "./components/Pages/Index";
import ProductDetails from "./components/Pages/ProductDetails";
import Wishlist from "./components/Pages/Wishlist";
import Cart from "./components/Pages/Cart";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
}

export default App;
