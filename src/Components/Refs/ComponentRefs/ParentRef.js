import React, { Component } from 'react'
import ChildRef from './ChildRef'

 class ParentRef extends Component {
     constructor(){
         super()
         this.componentRef=React.createRef()
     }
    focusInput=()=>{
        // console.log("clicked")
        this.componentRef.current.focusMethod()

    }
    render() {
        return (
            <div>
                <ChildRef ref={this.componentRef}/>
                <button onClick={this.focusInput}>Focus the input</button>
            </div>
        )
    }
}

export default ParentRef
