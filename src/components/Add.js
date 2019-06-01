import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css'
import Header from "./common/Header";
import Select from 'react-select'
import axios from 'axios'
export default class Add extends Component{

    constructor(props) {
        super(props);
        this.state={
            name:'',
            isbn:'',
            author:'',
            publisher:'',
            year:'',
            price: '',
            authors: []
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

componentWillMount() {
        fetch("http://localhost:8000/authors")
            .then(response => response.json())
            .then(json=> this.setState({
                authors: json
            })).catch(err=>console.log(err))
}

    handleFormSubmit(e){
        e.preventDefault()
        console.log("errtjk")
        const reqbody = {
            "name": this.state.name,
            "isbn": this.state.isbn,
            "author": this.state.author,
            "price": this.state.price,
            "year": this.state.year,
            "publisher": this.state.publisher,
        }
        fetch("http://localhost:8000/books/newBook",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reqbody)
        }).then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    render() {
        return(
            <div>
                <Header/>

                <form onSubmit={this.handleFormSubmit}>
                <div >
                    <div>
                        Name:  <input type="text" name="name" placeholder="name" required onChange={e => this.setState({name: e.target.value})}/>
                    </div>
                    <div>
                        ISBN:  <input type="number" name="isbn" placeholder="number" required onChange={e => this.setState({isbn: e.target.value})}/>
                    </div>
                    <div className=" form_group col-xs-6 mt-10">
                        {/*Author:  <input type="text" name="author" placeholder="author" required onChange={e => this.setState({author: e.target.value})}/>*/}
                        Author:                    <select onChange={event => this.setState({author:event.target.value})}>
                            {this.state.authors.map((obj)=>{
                                return(
                                    <option value={obj.FirstName+" "+obj.LastName}>{obj.FirstName+" "+obj.LastName}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div>
                       Price:   <input type="text" name="price" placeholder="price" required onChange={e => this.setState({price: e.target.value})}/>
                    </div>
                    <div>
                        Year:  <input type="number" name="year" placeholder="year" required onChange={e => this.setState({year: e.target.value})}/>
                    </div>
                    <div>
                        Publisher:  <input type="text" name="publisher" placeholder="publisher" required onChange={e => this.setState({publisher: e.target.value})}/>
                    </div>

                    <div>
                        <input type="submit" name="submit" placeholder="submit" value="Submit" required onChange={e => this.setState({isbn: e.target.value})}/>
                    </div>


                </div>
                </form>
            </div>
        )
    }
}