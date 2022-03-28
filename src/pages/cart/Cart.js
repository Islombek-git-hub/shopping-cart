import style from "./Cart.module.scss";

const Cart = ({ main_cart, removeCart, phones, addCart }) => {
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
          {main_cart.length > 0 ? (
            main_cart.map((a, i) => (
              <tr key={i + 1000} className={style.table_row}>
                <td>{i + 1}</td>
                <td>
                  <img
                    src={phones.find((p) => p.id === a.id).img}
                    alt={phones.find((p) => p.id === a.id).model}
                  />
                </td>
                <td>{phones.find((p) => p.id === a.id).phone_name}</td>
                <td>$ {phones.find((p) => p.id === a.id).price} </td>
                <td>
                  <button onClick={() => removeCart(a.id)}>-</button>
                  <span>{main_cart[i].count}</span>
                  <button onClick={() => addCart(a.id)}>+</button>
                </td>
              </tr>
            ))
          ) : (
            <div>bo'sh</div>
          )}
        </tbody>
        {/* */}
      </table>
      {/* <h3>price</h3> */}
    </div>
  );
};

export default Cart;
