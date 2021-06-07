import React, { Component } from 'react'

export default class PracticeClass extends Component {
    constructor(props){
        console.log("constructor")
        super(props)
        this.state={
            count:5,
            data:"something"
        }
        this.increment=()=>this.setState({count:this.state.count+1})
        this.decrement=()=>this.setState({count:this.state.count-1})
    }
    componentDidMount(){
        console.log("Component Did Mount")
        // this.setState({count:50})
    }
    render() {
        console.log("Render")
        return (
            <div className="border border-seconary">
                <h1>Class component</h1>
                <h3>The count is {this.state.count}</h3>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                {this.state.data}
            </div>
        )
    }
    componentDidUpdate(){
        console.log("component Update")
        // this.setState({data:"Nothing"})
    }
}
