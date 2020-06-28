import React, {Component} from 'react';
import emptyDraw from '../assets/img/emptyDraw.svg';
import "./main/style.css";

class EmptyPage extends Component{
    render(){
        return(
        <div className="resultContainer">
              <img src={emptyDraw} className="searchDraw"></img>
              <p className="title">
                <h3>Sin Resultados!.</h3>
              </p>
        </div>
        )
    }
}
export default EmptyPage;