import React from "react";

const RefSubFunc = (props)  => {
    console.log(props)
        return (
        <input type="text" ref={props.inputRef} onKeyUp={props.submitFocusButton}/>
    )
}



const RefFunc = () => {

    let inputRefUsingCreateRef = React.createRef();

    let submitRef = null;

    let inputRef;

    let onClickSubmit = (event) => {
        console.log(event)
        console.log("enter button pressed")
        inputRef.focus();

        // inputRefUsingCreateRef.focus();
    }

    let submitFocus = (event) => {
        console.log(event.target.value)
        if(event.keyCode === 13) {
            console.log("I am clicked")
            submitRef.focus();
        }
    }

    console.log(inputRef)

    return (
        
        <div>
            <span>Input Field</span>
            <RefSubFunc 
            inputRef={(input) => {inputRef = input}} 
            submitFocusButton = {submitFocus}
            />
            {/* <RefSubFunc inputRef={inputRefUsingCreateRef} submitFocusButton = {submitFocus}/> */}
            <input type="submit"
            ref={(input) => {submitRef = input}}
            onKeyUp = {onClickSubmit}/>
        </div>
    )
}

export default RefFunc;
