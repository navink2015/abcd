import React,{useReducer} from 'react'

const initialState=0
const reducer=(state,action)=>{
    switch (action) {
        case "increment":
            return state=state+1
        case "decrement":
            return state=state-1
        case "reset" :
            return state=initialState
        default:
            return state
    }
}
export default function CounterTheree() {
    const [count,dispatch]=useReducer(reducer,initialState)
    const [countOne,dispatchOne]=useReducer(reducer,initialState)
    const [countTwo,dispatchTwo]=useReducer(reducer,initialState)
    return (
        <div className="border border-primary m-2 p-2">
            <h1>Counter Three</h1>
            <div className="border border-secondary m-2 p-2">
                <div>{count}</div>
                <button onClick={()=>{dispatch("increment")}}>Increment</button>
                <button onClick={()=>{dispatch("decrement")}}>Decrement</button>
                <button onClick={()=>{dispatch("reset")}}>Re-Set</button>
            </div>
            <div className="border border-secondary m-2 p-2">
                <div>{countOne}</div>
                <button onClick={()=>{dispatchOne("increment")}}>Increment</button>
                <button onClick={()=>{dispatchOne("decrement")}}>Decrement</button>
                <button onClick={()=>{dispatchOne("reset")}}>Re-Set</button>
            </div>
            <div className="border border-secondary m-2 p-2">
                <div>{countTwo}</div>
                <button onClick={()=>{dispatchTwo("increment")}}>Increment</button>
                <button onClick={()=>{dispatchTwo("decrement")}}>Decrement</button>
                <button onClick={()=>{dispatchTwo("reset")}}>Re-Set</button>
            </div>
        </div>
    )
}
