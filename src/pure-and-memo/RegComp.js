import React, { Component } from 'react'

class RegComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }

    }

    componentDidMount() {
        
    }

    render() {
        console.log('********** Regular Component render **********',this.props);
        return (
            <>
                Regular Component - {this.props.person.name}
                <div>Job: {this.props.job}</div>
            </>
        )
    }
}

export default RegComp;