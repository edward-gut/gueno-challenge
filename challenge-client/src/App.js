import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import store from './redux/store';
import main from './components/main';

class App extends Component{
  render(){
    return(
      <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/main" component={main} />
                    <Redirect from="/" to="/main" />
                </Switch>
            </BrowserRouter>
      </Provider>
    )
  }
  
}

export default App;