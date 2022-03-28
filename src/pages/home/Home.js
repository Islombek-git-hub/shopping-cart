// import React from "react";
import style from "./Home.module.scss";

const Home = ({ phones, addCart }) => {
  return (
    <div className="container">
      <div className={style.box_phones}>
        {phones.map(({ img, model, phone_name, price, id }, i) => {
          return (
            <div key={i + 10} className={style.card_phone}>
              <div>
                <img src={img} alt={model} />
                <h3>{phone_name}</h3>
                <p>{model}</p>
                <span>${price}</span>
                <br />
                <button onClick={() => addCart(id)}>+ Add cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
