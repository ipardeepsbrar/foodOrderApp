import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
const MealItem = (props) => {
    console.log(props.item.name);
  return (
    <li className={classes.meal}>
      <div>
        <h2>{props.item.name}</h2>
        <div className={classes.description}>{props.item.description}</div>
        <div className={classes.price}>${props.item.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm id={props.item.id}/>
      </div>
    </li>
  );
};

export default MealItem;
