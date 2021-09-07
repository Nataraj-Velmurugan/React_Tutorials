import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import OnComponent from "./OnComponent";
import OffComponent from "./OffComponent";
import ButtonPrimaryComponent from "./ButtonComponet";


// conditional rendering
export default class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeText: true,
            buttonColor: true,
            buttonColorPrimary: "primary",
            buttonColorSecondary: "secondary"
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => {
            console.log(prevState)
            return {
                changeText: !prevState.changeText,
                buttonColor: !prevState.buttonColor
            }
        });
    }


    render() {
        let btn_class = this.state.buttonColor ?  this.state.buttonColorPrimary: this.state.buttonColorSecondary;
        console.log(btn_class)
        return (
            <div>
                <h1>Click the button to change the color - Event Handling - Conditional Rendering</h1>
                <Button variant="contained" size="large" color={btn_class} onClick={this.handleClick} >
                    {this.state.changeText ? 'ON Button' : 'OFF Button '}
                </Button>
                {this.state.changeText ? <OnComponent/> : <OffComponent/>}
                <ButtonPrimaryComponent myValue={btn_class}/>
                <ButtonPrimaryComponent myValue={this.state.buttonColorSecondary}/>
            </div>

        );
    }
}