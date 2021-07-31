import React, { Component } from 'react'; //imrc
import "./itemInCart.css"


class ItemInCart extends Component { //cc
  render() {
    return (
      <div className="item-in-cart-bar">
        <img src={"/images/products/" + this.props.prod.image} alt="item" />

        <div className="item-info">
          <h2>{this.props.prod.title}</h2>
          <label>{this.props.prod.category}</label>
        </div>

        <label>${this.props.prod.price}</label>
        <label>{this.props.prod.quantity}</label>
        <label>${this.getTotal()}</label>

        <button className="btn btn-sm btn-danger">Remove</button>
      </div>
    );
  }

  getTotal = () => {
    let total = this.props.prod.price * this.props.prod.quantity;
    return total.toFixed(2);
  }

}

export default ItemInCart;

/**
 *
 *   1 - create a component (itemInCart)
 *   2 - map the cart array to the new component
 *   3 - pass the data as prop
 *   4 - in itemInCart read the and display the item info
 *
 *
 */
