import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    return (
        <div>
            {this.props.render(this.state.count, this.incrementCount)}
        </div>
    )
  }
}

// Counter component handles only the counter logic
// It just contains the state and the function to change the state
// What to render is upto the component that uses Counter Component

