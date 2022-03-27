import React, { useState, useEffect } from "react";
import style from "./Cart.module.scss";

const Cart = ({ main_cart, phones, setMain_cart }) => {
  return (
    <div className="container">
      <table>
        <thead className={style.t_head}>
          <tr>
            <th>№</th>
            <th>Img phone</th>
            <th>Name phone</th>
            <th>Price</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody className={style.t_body}>
          {main_cart.map((phone, i) => {
            return (
              <tr className={style.table_row} key={i + 100}>
                <td>{i + 1}</td>
                <td>
                  <img src={phone.img} alt={phone.phone_name} />
                </td>
                <td>{phone.phone_name}</td>
                <td>
                  <b>$</b> {phone.price}
                </td>
                <td>
                  <button>-</button>
                  <span>{phone.count}</span>
                  <button>+</button>
                </td>
              </tr>
            );
          })}
        </tbody>
        {/* */}
      </table>
      <h3>
        {main_cart.length > 0 ? (
          <>
            Total $
            {main_cart.reduce(
              (s, i) =>
                s + i.count * phones.find((l) => l.price === i.price).price,
              0
            )}
          </>
        ) : (
          <div className={style.cart_is_empty}>
            <img height="200px" src="/img/empty_cart.png" alt="empty_cart" />
          </div>
        )}
        {}
      </h3>
    </div>
  );
};

export default Cart;
