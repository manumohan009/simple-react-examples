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
        console.log('********** Regular Component render **********');
        return (
            <>
                Regular Component - { this.props.name}
            </>
        )
    }
}

export default RegComp;