import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import { useContext } from "react";
import ItemsContext from "../../../store/items-context";
const MealItem = (props) => {
  const cartCtx = useContext(ItemsContext);
  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.item.id,
      name: props.item.name,
      amount: amount,
      price: props.item.price
    })
  };

  return (
    <li className={classes.meal}>
      <div>
        <h2>{props.item.name}</h2>
        <div className={classes.description}>{props.item.description}</div>
        <div className={classes.price}>${props.item.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={props.item.id}/>
      </div>
    </li>
  );
};

export default MealItem;
