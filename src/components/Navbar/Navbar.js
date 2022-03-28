import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import style from "./Navbar.module.scss";
// ICONS START
import { FaHome } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
// ICONS END

const Navbar = ({ filter_cart }) => {
  // console.log(phones);
  return (
    <>
      <nav className={style.nav}>
        <ul>
          <li>
            <NavLink to="/">
              <div className={style.nav_link}>
                <FaHome /> HOME
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <div className={style.nav_link}>
                <FaCartArrowDown /> CART
                {filter_cart.length && (
                  <span className={style.cart_count}>{filter_cart.length}</span>
                )}
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <div className={style.nav_link}>
                <AiFillMessage /> CONTACT
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
