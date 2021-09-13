import styles from "./styles";

let transformStyles = (props) => {
    let newStyle =  {...styles.default}
    if(props.enable) {
        newStyle = {...newStyle, ...styles.disable}
    }
    else if(props.afterClick) {
        newStyle = {...newStyle, ...styles.green}
    } else {
        newStyle = {...newStyle, ...styles.default}
    }

    const newProps = {...props, styles:newStyle}

    return newProps
}


const WrapperComponent = (inputComponent) => {                   // 1st
        return function (args) {                                // 2nd
            return inputComponent(transformStyles(args))        // 3rd
        }
}

export default WrapperComponent;