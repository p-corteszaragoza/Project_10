import React, { Component } from 'react';
import "./shoppingList.css"

import storeContext from '../context/storeContext';

class ShoppingList extends Component {
    static contextType = storeContext;
    state = {}
    render() {
        return (
            <div className="shopping-list">
                <div className="capture">
                    <h1>Shopping List</h1>
                </div>

                <div className="input-container">
                    <input type="text" name="text" value= { this.state.text || "" } onChange={this.handleInputChange} />
                    <button onClick={this.handleAddToList}> Add to list</button>
                </div>

                <div className="text"> { this.context.shoppingList.map((text, index) =>
                       
                        <div class="card">
                            <div class="card-body" key={index}>
                               {text}
                            </div>
                        </div>)}
                </div>   
            </div>
        );

    }

    handleInputChange = (event) => {
        console.log("TEST ..." + event.target.value);
        this.setState({ [event.target.name]: event.target.value });
    };

    handleAddToList = () => {
        console.log("Saving product");
        let value = {...this.state};
        console.log("value: " , value);
        this.context.addToShoppingList(value.text);
    };
}

export default ShoppingList;


/** 
 * ADMIN
 * handle the button click
 * call a function
 * get the text from the input field
 * connect your component to use the context store
 * call the function (addToShoppingList) on the context
 * 
 * read the shoppingLisy[] from the context
 * map that array into div with the text inside
 * **/