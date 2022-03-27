import React, { useState } from "react";

// import style from "./App.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";
import phones from "./phones.json";

function App() {
  const [main_cart, setMain_cart] = useState([]);
  function addCart(i) {
    let newElement = phones[i];
    setMain_cart([...main_cart, newElement]);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar main_cart={main_cart} />}>
          <Route
            index
            element={
              <Home
                addCart={addCart}
                phones={phones}
                main_cart={main_cart}
                setMain_cart={setMain_cart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                phones={phones}
                main_cart={main_cart}
                setMain_cart={setMain_cart}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
          {/* <Route element={<Home />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
