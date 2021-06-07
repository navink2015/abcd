import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
             name:''
        }
    }
    componentDidMount(){
        document.title=`clicked ${this.state.count}`
    }
    componentDidUpdate(prevProp,prevState){
        if(prevState.count!==this.state.count){
        console.log("Component update")
        document.title=`clicked ${this.state.count}`
        }
    }
    
    render() {
        return (
            <div>
                <input type="text" onChange={(e)=>{this.setState({name:e.target.value})}} value={this.state.name}></input>
                <button onClick={()=>{
                    this.setState({count:this.state.count+1})
                    console.log("button is clicked",this.state.count)
                    
                }}>count button {this.state.count}</button>
            </div>
        )
    }
}
