import React,{useReducer} from 'react'

const initialState={
    firstCount:0,
    SecondCount:50
}
const reducer=(state,action)=>{
    switch (action.type) {
        case "increment1":
            return {...state,firstCount:state.firstCount+action.value}
        case "increment2":
             return {...state,SecondCount:state.SecondCount+action.value}
        case "decrement1":
            return {...state,firstCount:state.firstCount-action.value}
        case "decrement2":
            return {...state,SecondCount:state.SecondCount-action.value}
        case "reSet1":
            return {...state,firstCount:initialState.firstCount}
        case "reSet2":
            return {...state,SecondCount:initialState.SecondCount}
            
        default:
            return state
    }
}
function CounterTwo() {
    const [count,dispatch]=useReducer(reducer,initialState)
    // console.log(count)
    return (

        <div className="border border-primary m-5 p-2">
            <h1>Counter Two</h1>
            <div className="border border-secondary p-2 m-2">
            <div>{count.firstCount}</div>
            <button onClick={()=>{dispatch({type:"increment1",value:1})}}>Increment</button>
            <button  onClick={()=>{dispatch({type:"decrement1",value:1})}}>Decrement</button>
            <button  onClick={()=>{dispatch({type:"reSet1"})}}>Re Set</button>
            </div>

            <div className="border border-secondary p-2 m-2">
            <div>{count.SecondCount}</div>
            <button onClick={()=>{dispatch({type:"increment2",value:5})}}>Increment</button>
            <button  onClick={()=>{dispatch({type:"decrement2",value:5})}}>Decrement</button>
            <button onClick={()=>{dispatch({type:"reSet2"})}} >Re Set</button>
            </div>
        </div>
    )
}

export default CounterTwo
