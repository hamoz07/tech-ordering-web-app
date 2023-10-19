/* eslint-disable react/prop-types */

import TechItemsContext, { useTechItemsContext } from "../../../store/context";
import classes from "./techItem.module.css";
import TechItemForm from "./techItemForm";

const TechItem = ({ id, name, desc, price, image }) => {
  const { addItem } = useTechItemsContext();
  const addingItem = (amount) => {
    addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
      image:image
    });
  };

  return (
    <li className={classes.item}>
      <div className={classes.itemDetails}>
        <img src={image} alt={name} title={name} />
        <div>
          <h3>{name}</h3>
          <div className={classes.description}>{desc}</div>
          <div className={classes.price}>{price}</div>
        </div>
      </div>
      <div>
        <TechItemForm onAdding={addingItem} />
      </div>
    </li>
  );
};

export default TechItem;
