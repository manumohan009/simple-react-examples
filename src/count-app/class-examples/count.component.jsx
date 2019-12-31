import React, { Component } from 'react'

export default class CountUsingClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
    add = ()=>{
        this.setState({count: this.state.count + 1})
    }
    render(){
        return(
            <div>
            <p>Example Count app using Class component</p>
                <p>Count: {this.state.count } </p>
                <button onClick={this.add}>Add</button>
            </div>
        )
    }
}