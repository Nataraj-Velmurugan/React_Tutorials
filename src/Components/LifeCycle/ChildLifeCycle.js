import React, {Component} from "react";

export default class ChildLifeCycle extends Component {
    constructor(props) {
        console.log("child constructor")
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        console.log("child componentDidMount")
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        console.log("child componentWillUnmount")
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        console.log("child render")
        return (
            <div>
                <h1>Timer Example using React Life Cycle methods!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <button onClick={this.componentWillUnmount.bind(this)}>stop timer</button>
            </div>
        );
    }
}