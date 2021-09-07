import React, { Component } from "react";
import ChildLifeCycle from "./ChildLifeCycle";

export default class ParentLifeCycle extends Component {
  constructor(props) {
    // default invocation due to class functionalities
    super(props);
    console.log("Parent constructor")
    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }


  componentDidMount() {
    // mehtod will be called after the render function only once whenever class compoent is called
    console.log("parent componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    // this method will monitor the changes which happens in the state and props
    console.log("parent componentDidUpdate");
    console.log("parent prevState");
    console.log(prevState)
    console.log("parent prevProps");
    console.log(prevProps)
  }

  // 2. componentDidCatch

  shouldComponentUpdate() {
    // make decisions to re - render a changed state or props value
    console.log("parent shouldComponentUpdate")
    console.log(this.state.count)
    if(this.state.count >= 0) {
      console.log("shouldComponentUpdate - true")
      return true
    } else {
      console.log("shouldComponentUpdate - false")
      return false
    }
  }

  componentWillUnmount() {
    // for performance removing the component from DOM
    console.log("Parent componentWillUnmount");
  }

  // custom methods

  increment() {
    this.setState({ count: this.state.count += 1 });
  }

  decrement() {

    this.setState({ count: this.state.count -= 1 });
  }

  resetCounter() {
    this.setState({
      count: 0
    })
  }

  render() {
    // immediately invoked after the constructor
    // always invoked automatically when the state or props are changed
    console.log("Parent render")
    return (
      <div>
        <h1>Counter Example</h1>
        <h1>Value: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.resetCounter}>Reset</button>
        <ChildLifeCycle/>
      </div>
    );
  }
}




