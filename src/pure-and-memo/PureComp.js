import React, { PureComponent, Component } from 'react'

// class PureComp extends PureComponent {
class PureComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    componentDidMount() {
        
    }
    shouldComponentUpdate(nextProps, nextState){
        if(this.props.job === nextProps.job && this.props.person.name === nextProps.person.name){
            return false
        }
        return true
    }

    render() {
        console.log('********** Pure Component render **********', this.props)
        return (
            <>
                Pure Component - { this.props.person.name}
                <div>Job: {this.props.job}</div>
            </>
        )
    }
}

export default PureComp;
