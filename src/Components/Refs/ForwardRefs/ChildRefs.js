import React from 'react'

const   ChildRefs=React.forwardRef((props,ref)=> {
    return (
        <div>
            <input type="text" ref={ref}></input>
        </div>
    )
})

export default  ChildRefs