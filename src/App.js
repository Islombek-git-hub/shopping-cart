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

  function addCart(id) {
    if (main_cart.some((a) => a.id === id)) {
      setMain_cart([
        ...main_cart.filter((a) => a.id !== id),
        {
          id,
          count: main_cart.find((a) => a.id === id).count + 1,
        },
      ]);
    } else {
      setMain_cart([
        ...main_cart,
        {
          id,
          count: 1,
        },
      ]);
    }
  }
  const removeCart = (id) => {
    const el = main_cart.find((i) => i.id === id);
    if (el.count > 1) {
      setMain_cart([
        ...main_cart.filter((i) => i.id !== id),
        {
          id,
          count: el.count - 1,
        },
      ]);
    } else {
      setMain_cart([...main_cart.filter((i) => i.id !== id)]);
    }
  };

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
                removeCart={removeCart}
                phones={phones}
                main_cart={main_cart}
                addCart={addCart}
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
