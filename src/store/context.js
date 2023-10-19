import { createContext, useContext } from "react";

const TechItemsContext = createContext({
    items:[],
    totalPrice:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
})

export const useTechItemsContext = () => {
    return useContext(TechItemsContext);
};

export default TechItemsContext;