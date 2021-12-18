import { useEffect, useState } from "react";

function Header({ products }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
        let total = products.reduce((intial, product) => intial += product.quantity ? product.quantity * Number(product.price) : Number(product.price), 0)
        setTotal(total)
  },[products])

  return (
    <div>
      <header className="header">
        <div id="cart-title">
          <h2>Mini Cart</h2>
        </div>
        <div className="cart-data">
          <div className="texts">
            <p id="cart-total">{`$ ${total}`}</p>
            <p>{products.reduce((val, product) => val += product.quantity ? product.quantity : 1, 0)} Items</p>
          </div>
          <div className="imgs">
            <img className="cart-img" src="img/cart.png" alt="cart" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
