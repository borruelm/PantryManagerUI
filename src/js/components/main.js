import React, { Component } from "react";
import ReactDOM from "react-dom";
//import MainJSX from "./main.jsx"
import "@babel/polyfill";
import axios from "axios";

class Main extends Component{

  constructor(){
    super();
    this.state= {
      users: []
    }
  }


  componentWillMount = () =>{
    axios.get('https://swapi.co/api/people/1')
  .then((response) => {
    let res = response.data;
    // handle success
    console.log("Testing AXIOS:");
    console.log(response.data);
  })
  .catch( (error) =>{
    // handle error
    console.log(error);
  })
  }


  render(){
    return(
      <div>
        <h1>This is the main component</h1>
      </div>
    );
  }

}

export default Main;
