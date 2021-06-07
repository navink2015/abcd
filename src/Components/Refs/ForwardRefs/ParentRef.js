import React, { Component } from 'react'
import ChildRefs from './ChildRefs'

export default class ParentRef extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef=React.createRef()
    }
    handleClick=()=>{
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                 <ChildRefs ref={this.inputRef}/>
                 <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}
