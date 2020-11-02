import React, { Component } from 'react'
import FocusInput from './focus-input'

class RefAppParent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
        this.focusInputRef = React.createRef()

    }

    componentDidMount() {
        
    }
    
    handleButtonClick = ()=>{
        this.focusInputRef.current.focusInput()
    }

    render() {
        return (
            <>
                <FocusInput ref={this.focusInputRef}/>
                <button onClick={this.handleButtonClick}>Focus Input</button>
            </>
        )
    }
}

export default RefAppParent;
