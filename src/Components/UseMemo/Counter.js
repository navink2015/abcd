import React,{useState,useMemo} from 'react'

function Counter() {
    const [couterOne, setcouterOne] = useState(0)
    const [contTwo, setcontTwo] = useState(0)
    const isEven=useMemo(()=>{
        let i=0
        while (i<200000000) i++
        return couterOne%2===0
    },[couterOne])
    return (
        <div>

            <button onClick={()=>setcouterOne(couterOne+1)}>Conuter One {couterOne}</button> 
            <span>{isEven?'even':'odd'}</span>
            <hr></hr>
            <button onClick={()=>setcontTwo(contTwo+1)}>Counter Two {contTwo}</button> 
        </div>
    )
}

export default Counter
