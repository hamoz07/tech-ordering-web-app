import TechItemsContext from "./context";

/* eslint-disable react-hooks/rules-of-hooks */
import { useReducer } from "react";

const defaultState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const totalAmount =
      state.totalPrice + action.item.price * action.item.amount;

    // checking if there any item in the cart
    const ItemSExsistanceIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const ItemSExsistance = state.items[ItemSExsistanceIndex];

    // updating amount of existing product
    let updatedItems;
    if (ItemSExsistance) {
      const updatedItem = {
        ...ItemSExsistance,
        amount: ItemSExsistance.amount + action.item.amount,
      };

      updatedItems = [...state.items];

      updatedItems[ItemSExsistanceIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalPrice: totalAmount,
    };
  }

  if (action.type === "REMOVE") {
    
    // checking if there any item in the cart
    const ItemSExsistanceIndex = state.items.findIndex(
      (item) => item.id === action.id
      );

    const ItemSExsistance = state.items[ItemSExsistanceIndex];

      const updatedTotalAmount =
        state.totalPrice - ItemSExsistance.price ;


    // updating amount of existing product
    let updatedItems;
    if (ItemSExsistance.amount === 1) {
      updatedItems = state.items.filter((JBLitem)=>JBLitem.id !== action.id)
    } else {
      const updatedItem = {...ItemSExsistance,amount:ItemSExsistance.amount - 1}
      updatedItems = [...state.items];
      updatedItems[ItemSExsistanceIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalPrice: updatedTotalAmount,
    };
  }

  return defaultState;
};

const CartItemsProvider = ({ children }) => {

  const [cartState, dispatchCartItemAction] = useReducer(
    cartReducer,
    defaultState
  );

  const adder = (item) => {
    dispatchCartItemAction({ type: "ADD", item: item });
  };

  const remover = (id) => {
    dispatchCartItemAction({ type: "REMOVE", id: id });
  };

  const cartItemsContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: adder,
    removeItem: remover,
  };

  console.log(cartItemsContext);
  return (
    <TechItemsContext.Provider value={cartItemsContext}>
      {children}
    </TechItemsContext.Provider>
  );
};

export default CartItemsProvider;
