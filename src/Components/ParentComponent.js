import React, {Component} from "react";
import ChildComponent from './ChildComponent';
import IndependentComponent from "./IndependentComponent";

export default class ParentComponent extends Component {
    constructor(props) {
        console.log("Parent Component - COnstructor")
        super(props);
        this.state = {
            name: 'This is parent property'
        }
    }
    
    render() {
        return (
        <div>
            <h1>I am from Parent Compoent</h1>
            <ChildComponent customName = {this.state.name}/>
            <IndependentComponent />
        </div>
        )
    }
}

 
