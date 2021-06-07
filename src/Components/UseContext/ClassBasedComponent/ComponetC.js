// import React, { Component } from 'react'

// export default class ComponetC extends Component {
//     render() {
//         return (
//             <div>
//               <h1>Component C</h1>  
//             </div>
//         )
//     }
// }
import {User} from './ComponentA'
import React from 'react'

export default function ComponetC() {
    return (
        <div>
            <User.Consumer>
            {user=>{return <h1>{user}</h1>}}
            </User.Consumer>
        </div>
    )
}
