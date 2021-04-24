import React, { Component } from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

class PureAndMemoParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {name: 'Manu'},
      job: 'Web Developer'
    };
  }
  handle = null;

  componentDidMount() {
    this.handle = setInterval(() => {
      this.setState({
        person: {name: 'Max'},
        job: 'Analyst'
        // job: 'Analyst'+Math.random()
      });
    }, 2000);
  }

  componentWillUnmount(){
    clearInterval(this.handle)
    console.log(this.handle, 'clearInterval')
  }

  render() {
    console.log("********** Parent Component render **********");
    return (
      <div>
        <div>
          <h2>Using React.memo, PureComponents</h2>
          <ul>
            <li>Memo component and Pure component get rendered only once and is re-rendered only if the
          prop value changes. Whereas normal components get re-rendered each
          time a prop is passed to them regardless of whether there is change in the value of props.</li>
          <li>In a functional component using memo, we can control the behavior using <b>arePropsEqual()</b> function</li>
          <li>In a class based component using PureComponent, <b>shouldComponentUpdate()</b> is already implemented by default</li>
          <li>Alternatively, we can use shouldComponentUpdate() to make a normal component to decide if it should rerender on props change or not</li>
          <li>We can take control on how react compares the props values using these functions</li>
          </ul>
        </div><br/>
        <RegComp person={this.state.person} job={this.state.job} />
        <br />
        <PureComp person={this.state.person} job={this.state.job}/>
        {/* <PureComp  job={this.state.job}/> */}
        <br />
        <MemoComp person={this.state.person} job={this.state.job}/>
      </div>
    );
  }
}

export default PureAndMemoParent;
