import React, {Component} from 'react';
import errorDraw from '../assets/img/errorDraw.svg';
import "./main/style.css";

class ErrorPage extends Component{
    render(){
        return(
        <div className="resultContainer">
              <img src={errorDraw} className="searchDraw"></img>
              <p className="title">
                <h3>ERROR System</h3>
              </p>
        </div>
        )
    }
}
export default ErrorPage;