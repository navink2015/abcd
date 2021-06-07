import React,{useState,useEffect} from 'react'

export default function TimeFunction() {
    const [count,setCount]=useState(0)
    useEffect(() => {
       const a= setInterval(()=>{
            setCount(count+1)
            // console.log("counter Change")
        },1000)
        return () => {
            // console.log('clean up')
            clearInterval(a)
        }
    }, [count])
    return (
        <div>
            {count}
        </div>
    )
}
