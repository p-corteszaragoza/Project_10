import React, { Component } from 'react'; 
import "./contact.css"

class Contact extends Component { 
    state = {  };

    render() { 
        return (    
            <div className="contact-page">
                <h1>Contact Page</h1>
                    <h3>Have some questions? </h3>
                    <div className="capture-form">
                        <div className="my-control">
                                <label>First Name</label>
                                <input type="text" name="firstName"/>
                        </div>  
                        <div className="my-control">
                                <label>Last Name</label>
                                <input type="text" name="LastName" />
                        </div>

                        <div className="my-control">
                                <label>What is your email?</label>
                                <input type="text" name="email" />
                        </div>  

                        <div className="my-control">
                                <label>Your questions....</label>
                                <input type="text" name="questions"/>
                        </div>  

                        <button className="btn btn-dark">Save Product</button>      
                </div>
            </div>

         );
    }
}
 
export default Contact;