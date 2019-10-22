// Code Keypad Component Here
  
import React, { Component } from 'react'

class Keypad extends Component {
   
    keyPadHandler = () => {
        {console.log('Entering password...')}
    }

    render() {
        return (<div>
            <input type="password" onKeyUp={this.keyPadHandler}/>
        </div>)
    }
}

export default Keypad