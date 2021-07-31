import React, { Component } from 'react'; //imrc
import "font-awesome/css/font-awesome.min.css";
import "./infoBottomBar.css"



class InfoBottomBar extends Component { //cc
    state = {  };

    render() { 
        return ( 
          <div className="info-bar">
            <table>
            <tbody>
              <tr>
                <th>Contact Info</th>
                <th>Office Hours</th>
                <th>Follow us</th> 
              </tr>
              <tr>
                <td> <i className="fa fa-facebook-f"></i> BackpackStore</td>
                <td>444 S. Cedros Ave</td>
                <td>Monday 11 a.m - 4 p.m</td>
              </tr>
              <tr>
                <td><i className="fa fa-twitter"></i> BackpackStore</td>
                <td><i className="fa fa-phone"></i> 1-555-55-55</td>
                <td>Wednesday 11 a.m - 6 p.m</td>
              </tr>
              <tr>
                <td><i className="fa fa-instagram"></i> BackpackStore</td>
                <td></td>
                <td>Saturday 11 a.m - 6 p.m</td>
              </tr>
              </tbody>
            </table>
          </div> );
    }
}
 
export default InfoBottomBar;