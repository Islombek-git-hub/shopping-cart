import React, { useState } from "react";

// import style from "./App.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";
import phones from "./phones.json";

function App() {
  const [main_cart, setMain_cart] = useState(phones);
  const [filter_cart, setfilter_cart] = useState([]);
  function cartFun(id, i, n) {
    let x = main_cart;
    if (main_cart.some((a) => a.id === id)) {
      x[i].count = x[i].count + n;
      setMain_cart(x);
    }
    setfilter_cart(main_cart.filter((a) => a.count > 0));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar filter_cart={filter_cart} />}>
          <Route
            index
            element={
              <Home
                cartFun={cartFun}
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
                cartFun={cartFun}
                filter_cart={filter_cart}
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
