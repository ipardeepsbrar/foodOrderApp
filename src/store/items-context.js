import React from "react"
const ItemsContext = React.createContext({
    items:[],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (item) => {}
});

export default ItemsContext;