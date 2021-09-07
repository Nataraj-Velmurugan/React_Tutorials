import { globalContext } from "./Context"


export default (props) => {
    return (
        <globalContext.Consumer>
            {(globalChildContext) => {
                return (
                    <div>
                        <h1> {globalChildContext.contextCount}</h1>
                        <button onClick={globalChildContext.increment}>Increment</button>
                        <button onClick={globalChildContext.decrement}>Decrement</button>
                    </div>
                )
            }}
        </globalContext.Consumer>
    )
}