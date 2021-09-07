import React, { Component } from 'react';
import { globalContext } from './Context';

export default class ContextChildClass extends Component {

    static contextType = globalContext;

    constructor(props) {
    }

    render() {
        console.log(this.context)
        return (
            <div>
                <h1> {this.context.contextCount}</h1>
                <button onClick={this.context.increment}>Increment</button>
                <button onClick={this.context.decrement}>Decrement</button>
            </div>
        )
    }

}