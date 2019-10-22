// Code EyesOnMe Component Here
import React, {Component} from 'react'

class EyesOnMe extends Component {
    onFocus = (event) => {
        console.log('Good!')
    }

    onBlur = (event) => {
        console.log('Hey! Eyes on me!')
    }

    render(){
        return(
            <button onFocus={this.onFocus} onBlur={this.onBlur}> Eyes on Me </button>
        )
    }

}

export default EyesOnMe