import React,{useReducer} from 'react'

const initialState=0
const reducer=(state,action)=>{
    switch (action) {
        case "increment":
            return state+1
        case "decrement":
            return state-1
        case "reSet":
            return initialState
        default:
            return state
    }
}

export default function CounterOne() {

    const [count,dispatch]=useReducer(reducer,initialState)
    return (
        <div className="border border-primary p-4 m-5">
            <h1>Counter One</h1>
           <div>Count - {count}</div>
            <button onClick={()=>dispatch("increment")}>Increment</button>
            <button onClick={()=>dispatch("decrement")}>Decrement</button>
            <button onClick={()=>dispatch("reSet")}>Re set</button>
        </div>
    )
}
