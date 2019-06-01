import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css'

export default class Header extends Component{

    render() {
        return(
            <div>
                <div className="container text-center bg-light">
                    <nav className="navbar navbar-expand-lg navbar-light  bg-light">
                        <div className="collapse navbar-collapse  bg-light" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={'/view'}> <button className="btn btn-outline-danger" >View</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                                </li>
                                <li className="nav-item">
                                    <Link to={'/add'}> <button className="btn btn-outline-danger" >Add</button></Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}