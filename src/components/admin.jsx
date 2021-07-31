import React, { Component } from 'react'; 
import "./admin.css"
import ItemService from './../services/itemServices';

class Admin extends Component { 
    
    constructor(props){
        super(props);
        this.state = {  
            title : "", 
            price: "",
            description: "",
            image: "",
            category: "",
            discount: "",
            stock: ""
        };
       
        this.initialState = this.state;
    }

    render() { 
        return (    
            <div className="admin-page">
                <h1>Register a new product</h1>
                <div className="capture-form">
                    
                    <div className="my-control">
                        <label> Title</label>
                        <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
                    </div>  
                    
                    <div className="my-control">
                        <label> Description</label>
                        <input type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                    </div>
                 
                    <div className="my-control">
                        <label> Image</label>
                        <input type="text" name="image" value={this.state.image} onChange={this.handleInputChange} />
                    </div>
                    
                    <div className="my-control">
                        <label> Price $</label>
                        <input type="text" name="price" value={this.state.price} onChange={this.handleInputChange} />
                    </div>   
                
                    <div className="my-control">
                        <label>Category</label>
                        <input type="text" name="category" value={this.state.category} onChange={this.handleInputChange} />
                    </div>  

                    <div className="my-control">
                        <label> Discount</label>
                        <input type="text" name="discount" value={this.state.discount} onChange={this.handleInputChange} />
                    </div>

                    <div className="my-control">
                        <label> Stock</label>
                        <input type="text" name="stock" value={this.state.stock} onChange={this.handleInputChange} />
                    </div>

                    <button className="btn btn-dark" onClick={this.handleSave}>Save Product</button>      
                </div>
            </div>

         );
    }

    handleInputChange = (event) => {
        console.log(event.target.value);
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSave = async () => {
        console.log("Saving product");
        let item = {...this.state};
        item.price = item.price *  1;
        item.discount =+ item.discount;
        item.stock = parseInt(item.stock);
        console.log("Items: " , item);

        // send the object to the service
        var itemServices = new ItemService();
        let response = await itemServices.saveItem(item);
        
        console.log("OnClick Save Item: ", response);
        this.setState({response: response});
    };
}
 
export default Admin;