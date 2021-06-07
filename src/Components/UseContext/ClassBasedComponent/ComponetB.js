// import React, { Component } from 'react'
import ComponetC from './ComponetC'

// export default class ComponetB extends Component {
//     render() {
//         return (
//             <div>
//                 Component B
//                <ComponetC/>
//             </div>
//         )
//     }
// }
import React,{useContext} from 'react'
import {User} from './ComponentA'
export default function ComponetB() {
    const a=useContext(User)
    return (
        <div>
            component b
           <p> {a}</p>
            dog
            <ComponetC/>
        </div>
    )
}
