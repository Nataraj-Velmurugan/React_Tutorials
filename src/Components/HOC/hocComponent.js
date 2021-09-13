let styles = {
    default: {
        'backgroundColor': 'coral',
        'color': 'black'
    },
    disable: {
        'backgroundColor': 'red',
        'color': 'black'
    }
}

const HocComponent = (props) => {
    let newStyle =  {...styles.default}
    if(props.disable) {
        newStyle = {...newStyle, ...styles.disable}
    }

    return (
        <div>
            <button style={newStyle}>Normal click me !!!</button>
        </div>
    )
}

export default HocComponent;