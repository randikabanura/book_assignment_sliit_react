import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import View from "./components/View";
import Add from "./components/Add";


export default class App extends Component{

  render(){
    return(
        <Router>

            <Switch>
              <Route exact path ="/view" component={View}/>
                <Route exact path ="/add" component={Add}/>
            </Switch>
        </Router>
    )
    }
}
