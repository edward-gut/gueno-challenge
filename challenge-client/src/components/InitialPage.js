import React, {Component} from 'react';
import "./main/style.css";
import searchDraw from "../assets/img/search.svg"

class InitialPage extends Component{
    render(){
        return(
        <div className="resultContainer">
              <img src={searchDraw} className="searchDraw"></img>
              <p className="title">
                <h3>Prestamos G&uuml;eno<br /> Challenge</h3>
              </p>
        </div>
        )
    }
}

export default InitialPage;