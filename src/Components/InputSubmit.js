import React, { Component } from "react";
import Button from '@material-ui/core/Button';

// event handling

export default class InputSubmit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            showName: false
        };

        // This binding is necessary to make `this` work in the callback
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    displayNameHandler = (e) => {
        // console.log(e)
        // console.log(e.target.value);
        let updatedName = e.target.value;
        this.setState({ firstName: updatedName });
        //console.log(updatedName);  
    }

    handleSubmit = (e) => {
        console.log(e)
        e.preventDefault();
        console.log("handleSubmit")
        
        this.setState({
            showName: true
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter the Name</label>
                    <input type="text" name="firstName" onChange={this.displayNameHandler.bind(this)} value={this.state.firstName} />
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                    {this.state.showName && <div><p>"Your Name: " {this.state.firstName} </p> </div>}
                </form>
            </div>
        );
    }
}