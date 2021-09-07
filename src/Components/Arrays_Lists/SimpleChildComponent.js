import React, { Component } from 'react';
import '../../App.css';

export default class Common extends Component {
    constructor(props) {
        super(props)
        // console.log("props")
        // console.log(props)
        this.state = {
            rendering : props.listValue
        }
    }
    
    render() {
        console.log("i am comon comp render function")
        console.log(this.state.rendering);
        console.log(this.props.listValue)
        return <div>{this.props.listValue}</div>
    }
}