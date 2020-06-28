import React, {Component, Fragment} from "react";
import Page from './page';
import {searchData} from '../../redux/actions';
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';


class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: "",
            regexp : /^[0-9\b]+$/
        };
        
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
    }

    handleSearch(text){
        this.setState({text: text});
        if(text != ""){
            this.props.searchData(text);
        }
    }
    handleChangeText(text){
        /*if(text=""){
            
        }*/

        if (!Number(text)) {
            if(text===""){
                this.setState({text});
            }

            return;
        }

            this.setState({text});
        
    }

    render(){
        const {
            text,
        } = this.state;
        console.log(this.props.searching);
        console.log(this.props.results);
        console.log(text);  
        return(
         <Page 
            text = {text}
            results = {this.props.results}
            firstSearch= {this.props.firstSearch}
            searching= { this.props.searching}
            error= {this.props.error}
            handleSearch = {this.handleSearch}
            handleChangeText = {this.handleChangeText}
        />
        );
    }
}
const mapStateToProps = state => ({
    text : state.search.text,
    results: state.search.data,
    firstSearch: state.search.firstSearch,
    searching: state.search.searching,
    error: state.search.error
});

const mapDispatchToProps = {
    searchData
};

export default connect(mapStateToProps,mapDispatchToProps)(Main);