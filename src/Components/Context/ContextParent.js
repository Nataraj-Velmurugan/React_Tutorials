import React, {Component} from 'react';
import ContextChildClass from '../Context/ContectChildClass'
import ContextChildFunc from '../Context/ContextChildFunc'

export default class ContextParent extends Component {

    constructor(props) {
        super(props);
        
    }

    render() {
        return(
            <div>
                <ContextChildFunc />
            </div>
        )
    }

}