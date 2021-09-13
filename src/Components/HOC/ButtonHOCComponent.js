import WrapperComponent from './WrapperComponent'


const ButtonHocComponent = (props) => {
    return (
        <div>
            <button style={props.styles}> HOC click me !!!</button>
        </div>
    )
}

export default WrapperComponent(ButtonHocComponent);