import React, {Component} from 'react';
import "./home.css"

class Home extends Component {
    state ={ }
    render(){
        return (
            <div className="home-page"> 
                <div className="img-container">
                    <img src={"/images/products/banner-img.jpg"} alt="item" /> 
                    
                </div>
                <div className="info-container"> 
                    <h1>Backpack Store</h1>  
                    <h3>Unique, cutting-edge bags and backpacks.</h3>
                </div>
               
            </div> 
           
        );
    }
}

export default Home;