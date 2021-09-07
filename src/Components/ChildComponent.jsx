import React, {Component} from "react";

export default class ChildComponent extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <h1>I am from Child Component - {this.props.customName}</h1>
            </div>
        )
    }
}