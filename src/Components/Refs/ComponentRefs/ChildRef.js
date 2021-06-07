import React, { Component } from 'react'

export default class ChildRef extends Component {
    constructor(){
        super()
        this.inputRef=React.createRef()
    }
    focusMethod=()=>{
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}></input>
            </div>
        )
    }
}
