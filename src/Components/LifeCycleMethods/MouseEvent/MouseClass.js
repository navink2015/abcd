import React, { Component } from 'react'

export default class MouseClass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             x:0,
             y:0,
        }
    }
    logMouse=e=>{
        this.setState({x:e.clientX,y:e.clientY})
    }
    componentDidMount(){
        window.addEventListener('mousemove',this.logMouse)
        console.log("mounting")
    }
    componentWillUnmount(){
        window.removeEventListener('mousemove',this.logMouse)
    }
    
    render() {
        return (
            <div>
               X- {this.state.x} and Y - {this.state.y}
            </div>
        )
    }
}
