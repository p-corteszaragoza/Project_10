import React, { Component } from 'react'; //imrc
import Item from "./item";
import "./catalog.css"
import ItemService from './../services/itemServices';

class Catalog extends Component { //cc
    state = {  
      items: [],
      categories: [],
      selectedCategory: "",
    };

    constructor(){
      super();
    }
    // display element on the screen
    render() { 
      let itemsToDisplay = this.state.items;

      //sort
      itemsToDisplay = this.state.items.sort((a, b) => a.price < b.price);
      
      if(this.state.selectedCategory){
        // filter your items array      
        itemsToDisplay = itemsToDisplay.filter( item => item.category === this.state.selectedCategory);

      }

      return ( 
          <div className="catalog-container">
            <h3>Our amazing catalog with {this.state.items.length} products</h3>
            <div className="filter-buttons">

              <div className="btn btn-add" onClick={() => this.filterItems("")}>All Items</div>

              { this.state.categories.map((cat) => (
                <button className="btn btn-add" key={cat} onClick={() => this.filterItems(cat)}> {cat} </button>
              ))}
            </div>

            <div className="item-container">
              { itemsToDisplay.map((product) => (
                <Item key={product._id} product ={product}></Item>
              ))}
           </div>  
          </div>
      );
    }

    filterItems = (category) => {
      console.log("Filtering...", category);
      this.setState({selectedCategory: category});
    };

    // called after the render function
    async componentDidMount() {
      console.log("Catalog did mount");

      // call the service to get the list of items
      var itemServices = new ItemService();
      var items = await itemServices.getCatalog();
      console.log(items);
      this.setState({items: items});

      // Identify the unique categories
      //let cats = [];

      /*for(let i = 0; i < items.length; i++) {
        let cat = items[i].category;
       if(!cats.includes(cat)){
        cats.push(cat);
       }
      }*/

      //get categories from server
      let cats = await itemServices.getCategories();
      console.log("categories from server: ", cats);

      //console.log("Unique categories: ", categories);
      this.setState({categories: cats})
    }
}
 
export default Catalog;