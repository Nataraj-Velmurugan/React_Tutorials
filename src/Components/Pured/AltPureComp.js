import  { Component, PureComponent } from "react";


export default class AltPureComp extends Component {
    constructor() {
        super()
        this.state = {
            count: 1
            
            }
    }

    shouldComponentUpdate() {
        return true
    }

    render () {
        console.log("render")
        return (
            <div>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}

