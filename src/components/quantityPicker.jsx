import React, { Component } from 'react'; //imrc
import "./quantityPicker.css"

class QuantityPicker extends Component { //cc
    state = { 
        value: 1,
        name: "Paola",
     };

    render() { 
        return ( 
            <div className="quantity-picker">
                <button onClick={this.increase} className="btn btn-sm btn-light">+</button>
                <label className="value"> {this.state.value} </label>
                <button disabled={this.state.value === 1} onClick={this.decrease}  className="btn btn-sm  btn-light">-</button>
            </div>
         );
    }

    sayHello(){
        // {this.sayHello()}
        return <h1>This is JSX</h1>
    }

    increase = () => {
       console.log("Button clicked! "); 
       let val = this.state.value + 1;
       this.setState({value: val});
       this.props.onValueChange(val);
    };
    
    decrease = () => {
        console.log("Button clicked! "); 
        let val = this.state.value - 1;
        if(val > 0){
            this.setState({value: val});
            this.props.onValueChange(val);
        }
     };

}
 
export default QuantityPicker;