import RefFunc from "./RefFunc";

const { Component } = require("react");

export default class RefDOMComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.handleClick = this.handleClick.bind(this);
        // this.clickEnterButton = this.clickEnterButton.bind(this)
    }


    handleClick() {
        console.log(this)
    }

    clickEnterButton(target, event) {
        if (event.keyCode === 13) {
            switch (target) {
                case 'firstName':
                    this.lastName.focus();
                    break;
                case 'lastName':
                    this.age.focus();
                    break;
                case 'age':
                    this.submit.focus();
                    break;
                default:
                    this.firstName.focus();
            }
        }
    }

    render() {
        return (
            <div>
                <RefFunc/>
                <div>
                    <span>First Name</span>
                    <input
                        ref={(input) => { this.firstName = input }}
                        onKeyUp={this.clickEnterButton.bind(this, 'firstName')}
                        type="text" />
                </div>
                <div>
                    <span>Last Name</span>
                    <input
                        ref={(input) => { this.lastName = input }}
                        onKeyUp={this.clickEnterButton.bind(this, 'lastName')}
                        type="text" />
                </div>
                <div>
                    <span>Age</span>
                    <input
                        ref={(input) => { this.age = input }}
                        onKeyUp={this.clickEnterButton.bind(this, 'age')}
                        type="text" />
                </div>
                <div>
                    <input ref={(input) => { this.submit = input }}
                        type="submit"
                        onClick={this.handleClick} />
                </div>
            </div>
        )
    }
}