// Code Keypad Component Here
import React, { Component } from 'react'

class Keypad extends Component {
    onInput = (event) => {
        console.log('Entering password...')
    }

    render() {
        return(
            <div>
                <input type="password" onKeyUp={this.onInput} />
            </div>
        )
    }
}

export default Keypad