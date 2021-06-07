import React from 'react'

function ButtonComponent({handleClick,children}) {
    console.log(`Rendering button - `,children)
    return (
        <div>
            <button onClick={handleClick}>Add button</button>
        </div>
    )
}
export default React.memo(ButtonComponent)