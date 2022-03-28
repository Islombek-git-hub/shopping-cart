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
          {filter_cart.length > 0 ? (
            filter_cart.map((aa, i) => (
              <tr key={i + 10000} className={style.table_row}>
                <td>{i + 1}</td>
                <td>
                  <img src={aa.img} alt={aa.model} />
                </td>
                <td>{aa.phone_name}</td>
                <td>$ {aa.price} </td>
                <td>
                  <button onClick={() => cartFun(aa.id, i, dec)}>-</button>
                  <span>{aa.count}</span>
                  <button onClick={() => cartFun(aa.id, i, inc)}>+</button>
                </td>
              </tr>
            ))
          ) : (
            <div>bo'sh</div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
