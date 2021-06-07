import React, { PureComponent } from 'react'

export default class ComponetPure extends PureComponent {
    render() {
        console.log("Pure Component")
        return (
            <div>
                Pure Component {this.props.name}
                
            </div>
        )
    }
}
