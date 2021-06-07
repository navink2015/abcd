import React,{useContext} from 'react'
import { CountValue } from './ComponentA'



export default function ComponetReducerB() {
    const CountContext = useContext(CountValue)

    return (
        <div>
            <div>
            <button onClick={()=>CountContext.CounterDispatch("increment")}>Increment</button>
            <button onClick={()=>CountContext.CounterDispatch("decrement")}>Decrement</button>
            <button onClick={()=>CountContext.CounterDispatch("reset")}>Reset</button>
            </div>
            
        </div>
    )
}
