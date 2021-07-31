import React, { Component } from 'react'; //imrc
import "./item.css"
import QuantityPicker from './quantityPicker';
import StoreContext from '../context/storeContext';

class Item extends Component { //cc

  static contextType = StoreContext;

  state = { quantity: 1 };

  render() {
    return (
      <div className="item-bar">
        <img src={"/images/products/" + this.props.product.image} alt="item" />

        <h6>{this.props.product.title}</h6>
        <label>Total: ${this.getTotal()}</label>
        <br></br>
        <label>Price: ${(+this.props.product.price || 0).toFixed(2)}</label>
        <div className="item-controls">
          <QuantityPicker onValueChange={this.handleQuantityChange}></QuantityPicker>

          <button onClick={this.handleAddButton} className="btn btn-sm btn-light btn-add">
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>);
  }

  handleAddButton = () => {
    console.log("onClick.... ", this.props.product);
    // debugger
    // create a copy of the prod
    var copy = {
      ...this.props.product, //copy every property from prod object
      quantity: this.state.quantity
    };

    // add the quantity
    //copy.quantity = this.setState.quantity;

    //send the copy to the cart
    this.context.addProdToCart(copy);
    //this.context.addProdToCart(this.props.product);
  };

  getTotal = () => {
    let total = this.props.product.price * this.state.quantity;
    return total.toFixed(2);
  }

  handleQuantityChange = (quantity) => {
    console.log("Quantity changed");
    this.setState({ quantity: quantity });
  };

}

export default Item;

/**
 *
 *   1 - create a component (itemInCart)
 *   2 - map the cart array to the new component
 *   3 - pass the data as prop
 *   4 - in itemInCart read the and display the item info
 *
 *
 */
