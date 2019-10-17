import React, { Component } from 'react'

export default class Keypad extends Component {
    handleInput = (event) => {
        console.log("Entering password...");
     }
  
     render() { 
        return (
           <div>
              <input type="password" onKeyUp={this.handleInput} name="pwd" id="pwd" />
           </div> 
        );
     }
  }
   
