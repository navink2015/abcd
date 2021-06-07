import React, { Component } from 'react'
import MemoComponent from '../MemoComponent/MemoComponent'
import ComponetPure from './ComponetPure'
import RegularComponent from './RegularComponent'

export default class ParentComponent extends Component {
    constructor(){
        super()
        this.state={name:'navin'}
    }
    componentDidMount(){
        setInterval(
            ()=>{
                // console.log("interval")
                this.setState({name:'kumar'})
            },5000
        )
    }
    render() {
        console.log("_______________Parent Component__________________")
        return (
            <div>
                Parent Component
                <RegularComponent name={this.state.name}/>
                <ComponetPure  name={this.state.name}/>
                <MemoComponent name={this.state.name}/>
            </div> 
        )
    }
}
