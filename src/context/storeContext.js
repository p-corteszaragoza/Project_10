import React from "react";

export default React.createContext({
  /*name: "",
    products: [],
    categories: [],*/
  discount: 0,
  cart: [],
  shoppingList: [],
  addProdToCart: (product) => {},
  addToShoppingList: (text) => {},
});
