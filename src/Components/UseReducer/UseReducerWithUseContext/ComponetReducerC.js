import React,{useContext} from 'react'
import { CountValue } from './ComponentA'


export default function ComponetReducerC() {
    const countContext=useContext(CountValue)
    // console.log(countContext)
    return (
        <div>
            <div>   
                <button onClick={()=>{countContext.CounterDispatch("increment")}}>Increment</button>
                <button  onClick={()=>{countContext.CounterDispatch("decrement")}}>Decrement</button>
                <button  onClick={()=>{countContext.CounterDispatch("reset")}}>Reset</button>
            </div>
        </div>
    )
}
