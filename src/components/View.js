import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css'
import Header from "./common/Header";

import axios from 'axios'

export default class View extends Component{

    constructor(){
        super();
        this.state={
            book: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/books')
            .then(res => res.json())
            .then(json => this.setState({
                book: json
            }))
            .catch(err => console.log(err))
    }

    render() {
        return(
            <div>
                <Header/>

                {this.state.book.map((obj)=>{
                    return(
                        <div> {obj.Name}</div>
                    )
                })}

            </div>
        )
    }
}