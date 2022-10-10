import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import cartContext from "../../store/cartContext";
import { useContext } from "react";
import ItemsContext from "../../store/items-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(cartContext);
  const itemsCtx = useContext(ItemsContext);

  const totalAmount = `$${itemsCtx.totalAmount.toFixed(2)}`;
  const hasItems = itemsCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    itemsCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    itemsCtx.addItem({...item, amount:1})
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {itemsCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={cartCtx.closeCart} className={classes["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
