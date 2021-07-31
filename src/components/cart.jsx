import React, { Component } from 'react';
import "./cart.css"
import storeContext from '../context/storeContext';
import ItemInCart from "./itemInCart";
import ItemService from './../services/itemServices';
/**
 * In cart component
 * 
 * connect to the context
 * 
 * get the cart(array) from the context
 * map the array into string(x.title)
 * 
 * **/

class Cart extends Component {
    static contextType = storeContext;

    state = {
        couponCode: ""//,
       // discount: 0
    };

    render() {
        return (
            <div className="cart-page">
                <h3> Cart Page</h3> 
                <div className="cart-page-container">   
                    <div>
                        {this.context.cart.map((prod) =>
                        <ItemInCart key={prod._id} prod={prod}></ItemInCart>)} 
                    </div>
                    <div className="total-container">
                        <div>Total: {this.getTotal()} </div>
                        <div>
                            <input type="text" name="couponCode" placeholder="Discount code" value={this.state.couponCode} onChange={this.handleInputChange}></input>
                            <button onClick={this.validateCode} className="btn btn-sm btn-dark">Apply</button>
                        </div>
                        <button onClick={this.handlePlaceOrder} className="btn btn-sm btn-dark">Place order</button>
                    </div>

                    
              </div>
            </div>
        );
    }


    handlePlaceOrder = async () => {
        let order = {
            user: "Paola",
            couponCode: this.state.couponCode,
            product: this.context.cart,
            createdOn: new Date(),
        };
        console.log("ORDER "  , order);

        let service = new ItemService();
        let placeOrder = await service.placeOrder(order);
        console.log(placeOrder);
        /** 
         * api end point: /api/order
         *  POST
         *  receive the order
         *  save the order in the orders collection
         *
         *  FE service:
         *      Create a method that receives an order
         *      Send the order to the new endpoint
         * 
         *  from the component:
         *      create an instance of the service
         *      call the new method 
         * **/
    };

    getTotal = () => {
        console.log("Discount: ", this.context.discount);
        let total = 0;
        for(let i = 0; i < this.context.cart.length; i++){
            let product = this.context.cart[i];
            total += (product.quantity * product.price);
        }
        let discount = total * (this.state.discount / 100);
        return (total - discount).toFixed(2);
    }

    handleInputChange = (event) => {
        console.log(event.target.value);
        this.setState({ [event.target.name]: event.target.value });
    };

    validateCode = async () => {
        // Create a method on the service
        // Will call the new endpoint on the server
        // Create an instance of the service
        // Call the new method
        var service = new ItemService();
        var response = await service.validateCode(this.state.couponCode);
        console.log(response);
        if(response.error){
            alert("Invalid Code")
        } else {
            console.log("You got a discount for " , response.discount + "%");
            //TODO: apply the discount to the total(decrease total)
            //this.setState({ discount: response.discount});
            this.context.discount = response.discount;
            this.setState({ discount: this.context.discount});
            console.log("this... " ,  this.state.discount + " " + this.context.discount);
        }
    };
    
}

export default Cart;