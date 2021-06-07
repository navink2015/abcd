import React,{useState} from 'react'

function FirstFile() {
    const [number, setNumber] = useState(0)
    const [toggle, setToggle] = useState(false)
    const them={
        backgroundColor:toggle?"red":"blue",
        color:toggle?"white":"yellow"
    }
    const getNumberArray=(number)=>{
        return [number,number+1,number+2]
    }
    console.log(number)
    console.log(getNumberArray(number))
    // const getNumber=[1,2,4]
    return (
        <div style={them} className="container">
            <input type="number" onChange={(e)=>setNumber(parseInt(e.target.value))}></input>
            <button onClick={()=>(setToggle(!toggle))}>Toggle</button>
            {/* <div > */}
                {/* <ul> */}
              {getNumberArray(number).map((e,i)=>{
                  return <li key={i}> {e}</li>
              })}
              {/* {number} {number+1} {number+2} */}
              {/* </ul> */}
            {/* </div> */}
        </div>
    )
}

export default FirstFile
