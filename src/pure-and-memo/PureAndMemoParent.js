import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

class PureAndMemoParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
             name: 'Manu'    
        }
    }

    componentDidMount() {
        setInterval(()=>{
            this.setState({name: 'Manu'})
        },2000)
    }

    render() {
        console.log('********** Parent Component render **********');
        return (
            <div>
                <RegComp name={this.state.name}/><br/>
                <PureComp name={this.state.name}/><br/>
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default PureAndMemoParent;
