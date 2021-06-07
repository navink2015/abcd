import React,{useState , useEffect} from 'react'

function CounterFunction() {
    const [counter,setCounter]=useState(0)
    const [name,setName]=useState('')
    useEffect(() => {
        console.log("component updated")
        document.title=`Counter ${counter}`
        // return () => {
        //     cleanup
        // }
    },[counter])
    return (
        <div>
            <input type="text" 
            onChange={(e)=>{
                setName(e.target.value)
            }}
            value={name}
            ></input>
            <button onClick={()=>setCounter(counter+1)}>Counter {counter}</button>
        </div>
    )
}

export default CounterFunction
