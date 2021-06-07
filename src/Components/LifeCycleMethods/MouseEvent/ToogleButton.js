import React, { Component } from 'react'
import MouseClass from './MouseClass'

export default class ToogleButton extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             display:true
        }
    }
    
    render() {
        return (
            <div>
                <button onClick={()=>this.setState({display:!this.state.display})}> toggle</button>
                {this.state.display && <MouseClass/> }
            </div>
        )
    }
}
