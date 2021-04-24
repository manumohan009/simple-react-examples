import React, { Component } from "react";

class ShowMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Is this a tough question ? ",
    };
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    console.log(this,'clicked')
    this.setState({message: 'Not at all'})
  }
  // clickHandler = ()=>{
  //   console.log(this,'clicked')
  //   this.setState({message: 'Not at all'})
  // }
  showMessage() {
    console.log(this,'show')
    return <div>{this.state.message}</div>;
  }

  render() {
    return (
      <div>
        {this.showMessage()}
        <button onClick={this.clickHandler}>Not at all</button><br/>
        <div>
          <ul>
            <li>showMessage() : Need not bind 'this' to normal functions that return only jsx</li>
            <li>clickHandler() : Need to bind 'this' to all event handlers; If not 'this' will be undefined in the event handler function</li>
            <li>using this.clickHandler = this.clickHandler.bind(this) in the constructor, we can bind this to the event handler  </li>
            <li>clickHandler = ()=> {} : Alternatively, we can use a arrow function to bind 'this' automatically  </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default ShowMessage;

// What is missing in this React Component ? What is the fix ?
// 1. this.clickHandler = this.clickHandler.bind(this)
// 2. this.showMessage = this.showMessage.bind(this)

// a. No fix required
// b. Add only 1 to contructor
// c. Add only 2 to contructor
// d. Add 1 & 2 to constructor

// Answer: b. Add only 1 to constructor
