import React,{useReducer} from 'react'
// import ComponetB from '../../UseContext/ClassBasedComponent/ComponetB'
// import ComponetC from '../../UseContext/ClassBasedComponent/ComponetC'
import ComponetReducerB from './ComponetReducerB'
import ComponetReducerC from './ComponetReducerC'

export const CountValue=React.createContext()
const initialState=0
const reducer=(state,action)=>{
    switch (action) {
        case "increment":
           return state+1
        case "decrement":
            return state-1
        case "reset":
            return initialState
        default:
            return state
    }
}

export default function ComponentA() {
    const [count,dispatch]=useReducer(reducer,initialState)
    return (
        <div>
            {count}
            {/* aoole */}
            <CountValue.Provider value={{counterState:count,CounterDispatch:dispatch}}>
                {/* <ComponetB/> */}
                <ComponetReducerB/>
                <ComponetReducerC/>
                    {/* <ComponetC/> */}
            </CountValue.Provider>
            
        </div>
    )
}
