
import React, {Component} from 'react';
import ContextParent from '../Context/ContextParent';
import { globalContext } from './Context';


export default class ContextHome extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return(
            <div>
                <globalContext.Provider value={{ 
                    contextCount: this.state.count,
                    increment: this.increment,
                    decrement: this.decrement
                    }}>
                    <ContextParent />
                </globalContext.Provider>    
            </div>
        )
    }

}