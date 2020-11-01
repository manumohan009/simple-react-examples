import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    componentDidMount() {
        
    }

    render() {
        console.log('********** Pure Component render **********')
        return (
            <>
                Pure Component - { this.props.name}
            </>
        )
    }
}

export default PureComp;
