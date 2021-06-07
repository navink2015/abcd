import React from 'react'

function InputComponent({text,count}) {
    console.log(`Rendering ${text}`)
    return (
        <div>
            {/* <h1>Input Component</h1> */}
            <div>{text}-{count}</div>
        </div>
    )
}

export default React.memo(InputComponent)