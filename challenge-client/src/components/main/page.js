import React, { Component, Fragment } from "react";
import "./style.css";
import searchDraw from "../../assets/img/search.svg";
import { Paper, Grid } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import LinearProgress from "@material-ui/core/LinearProgress";
import ResultsPage from "../ResultsPage";
import InitialPage from "../InitialPage";
import ErrorPage from "../ErrorPage";
import EmptyPage from "../EmptyPage";

class page extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      handleSearch,
      handleChangeText,
      results,
      firstSearch,
      searching,
      error,
      text,
    } = this.props;
    function view() {
      if (error) {
        return <ErrorPage />;
      } else {
        if (!firstSearch) {
          return <InitialPage />;
        } else {
          if (results != null && results.data!= "") {
            return <ResultsPage results={results.data} />;
          } else {
            return <EmptyPage />;
          }
        }
      }
    }

    return (
      <Fragment>
        {searching ? <LinearProgress color="primary" /> : <div></div>}
        <div className="main">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <div className="searchContainer">
                <Paper component="form" className="searchForm">
                  <InputBase
                    className="search"
                    placeholder="Buscar por DNI"  
                    value= {text}
                    onChange={(e) => {
                      const newText = e.target.value;
                      handleChangeText(newText);
                    }}
                  />
                  <IconButton
                    className="searchIcon"
                    aria-label="search"
                    onClick={() => {
                      handleSearch(text);
                    }}
                  >
                    <SearchIcon />
                  </IconButton>
                </Paper>
              </div>
            </Grid>
            <Grid item xs={12}>
              {view()}
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default page;
