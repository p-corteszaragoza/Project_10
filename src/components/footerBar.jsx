import React, { Component } from 'react'; //imrc
import "./footerBar.css"

class FooterBar extends Component { //cc
    state = {  };

    render() { 
        return ( 
            <footer className="footerbar-page">
                <span className="text-footer"> Copyright &copy;  2020-2021 Backpacks | Copyright &copy; 2020-2021 Backpack store. All rights reserved.</span>
            </footer>
         );
    }
}
 
export default FooterBar;