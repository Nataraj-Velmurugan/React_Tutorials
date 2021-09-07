import React, { Component } from 'react';
import '../../App.css';
import Common from "./SimpleChildComponent"

export default class SimpleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            render: '',
            clicked: false,
            menu_items: [
                {
                    name: "chockers"
                },
                {
                    name: "bracelets"
                },
                {
                    name: "rings"
                },
                {
                    name: "rings1"
                },
                {
                    name: "alpha"
                },
                {
                    name: "alpha1"
                }
            ]
        };
    }

    handleClick(compName, e) {
        
        this.setState({ 
            render: compName,
            clicked: true
        });
    }
    _renderSubComp() {
        console.log(this.state.render)
        let a = `${this.state.render}`;
        switch (this.state.render) {
            case a : return <Common listValue= {a} />
            // case 'bracelets': return <Bracelets />
            // case 'rings': return <FRings />
            // case 'rings1': return <FRings1 />
            default: return this.state.clicked ? <Default /> : <Default1/>
        }
    }


    render() {
        var items = this.state.menu_items.map((item, index) => {
            return (
                // key={index}
                <li key={index} onClick={this.handleClick.bind(this, item.name)}>
                    <button className="button">{item.name}</button>
                </li>
            );
        });
        return (
            <div className="container">
                <ul style={{ display: 'inline' }}>{items}</ul>
                {this._renderSubComp()}
            </div>
        )
    }
}

class Chokers extends Component {

    render() {
        return <div>Inside Chockers</div>
    }
}
class FRings extends Component {
    render() {
        return <div>Inside FRings</div>
    }
}
class Bracelets extends Component {
    render() {
        return <div>Inside Bracelets</div>
    }
}
class FRings1 extends Component {
    render() {
        return <div>Inside FRings1</div>
    }
}

class Default extends Component {
    render() {
        return <div>I am default component</div>
    }
}

class Default1 extends Component {
    render() {
        return <div></div>
    }
}

