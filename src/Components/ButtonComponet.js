import Button from '@material-ui/core/Button';

const ButtonPrimaryComponent = (props) => {
    console.log(props)
    return (
        <div >
            <Button variant="contained" size="large" color={props.myValue} >
        {props.myValue}
    </Button>
        </div>
        
    )
}

export default ButtonPrimaryComponent;