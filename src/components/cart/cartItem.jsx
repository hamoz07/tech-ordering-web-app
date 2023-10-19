import React from "react";
import classes from "./cartItem.module.css";
const CartItem = ({ name, amount, price, onRem, onAdd , image }) => {
  const finalprice = `$${price.toFixed(2)}`;
  return (
    <li className={classes.cartItem}>
      <div className={classes.itemDetails}>
        <img src={image} alt={name} title={name} />
        <div>
          <h3>{name}</h3>
          <div className={classes.summary}>
            <div className={classes.price}>{finalprice}</div>
            <div className={classes.amount}>X {amount}</div>
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRem}>-</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
