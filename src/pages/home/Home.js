// import React from "react";
import style from "./Home.module.scss";

const Home = ({ phones, main_cart, addCart }) => {
  console.log(main_cart);
  return (
    <div className="container">
      <div className={style.box_phones}>
        {phones.map((phone, i) => {
          return (
            <div key={i + 10} className={style.card_phone}>
              <div>
                <img src={phone.img} alt={phone.model} />
                <h3>{phone.phone_name}</h3>
                <p>{phone.model}</p>
                <span>${phone.price}</span>
                <br />
                <button onClick={() => addCart(i)}>+ Add cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
