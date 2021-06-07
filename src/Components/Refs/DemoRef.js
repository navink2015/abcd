import React, { Component } from 'react'

export default class DemoRef extends Component {
    constructor(){
        super()
        this.inputRefs=React.createRef()
        this.cbRef=null
        this.setCbRef=element=>{this.cbRef=element}
    }
    componentDidMount(){
        console.log(this.inputRefs)
        // this.inputRefs.current.focus()
        if(this.cbRef){this.cbRef.focus()}
    }
    clickEvent=()=>{
        alert(this.inputRefs.current.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRefs}/>
                <input type="text" ref={this.setCbRef}/>
                <button onClick={this.clickEvent}>Click</button>
            </div>
        )
    }
}
