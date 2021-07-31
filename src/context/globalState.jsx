import React, { Component } from 'react';
import StoreContext from './storeContext';

class GlobalState extends Component {
    state = {
        /*name: "Paola",
        products: [],
        categories: [],*/
        cart: [],
        shoppingList: [],
        discount: 0

    };
    render() {
        return (<StoreContext.Provider value={{
            /*name: this.state.name,
            products: this.state.products,
            categories: this.state.categories,*/
            discount: this.state.discount,
            cart: this.state.cart,
            shoppingList: this.state.shoppingList,
            addProdToCart: this.addProdToCart,
            addToShoppingList: this.addToShoppingList,
        }}>
            {this.props.children}
        </StoreContext.Provider>
        );
    }

    addToShoppingList = (text) => {
        // Add to the shopping list
        let copy = [...this.state.shoppingList];
        copy.push(text);
        for (let i = 0; i < copy.length; i++) {
            console.log("shoppingList[", i, "] = " , copy[i]);
        }
        this.setState({ shoppingList: copy });
    };

    /***
     * found = false
     * travel the array
     * get the product inside
     * 
     * if the produc _id is equals to the new product_id
     *  increase the quantity of product
     * set a flag to found
     * outside the for 
     * if not found, push it
     */
    addProdToCart = (product) => {
        let myCart = [...this.state.cart];
        let found = false;
        for (let i = 0; i < myCart.length; i++) {
            let current = myCart[i];
            if (current._id === product._id) {
                found = true;
                current.quantity += product.quantity;
            }
        }

        if (!found) {
            myCart.push(product);
        }

        // myCart.push(product);
        this.setState({ cart: myCart });
        console.log("Added a prod to cart: ", myCart);
    };
}

export default GlobalState;
