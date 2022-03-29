import style from "./Cart.module.scss";

const Cart = ({ main_cart, filter_cart, cartFun }) => {
  const inc = 1;
  const dec = -1;
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
          {filter_cart.length > 0 &&
            filter_cart.map((aa, i) => (
              <tr className={style.table_row} key={i + 10000}>
                <td>{i + 1}</td>
                <td>
                  <img src={aa.img} alt={aa.model} />
                </td>
                <td>{aa.phone_name}</td>
                <td>$ {aa.price} </td>
                <td>
                  <button onClick={() => cartFun(aa.id, dec)}>-</button>
                  <span>{aa.count}</span>
                  <button onClick={() => cartFun(aa.id, inc)}>+</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {filter_cart.length <= 0 ? (
        <div className={style.cart_is_empty}>
          <img height="250px" src="./img/empty_cart.png" alt="is empty" />
        </div>
      ) : (
        <>
          {
            <h3>
              Total:{" "}
              {filter_cart.reduce(
                (s, i) =>
                  s + i.count * main_cart.find((l) => l.id === i.id).price,
                0
              )}{" "}
              $
            </h3>
          }
        </>
      )}
    </div>
  );
};

export default Cart;
