import React, { Component } from 'react'
import FocusInput from './focus-input'
import FrFocusInput from './fr-focus-input'

class RefAppParent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
        this.focusInputRef = React.createRef()
        this.inputRef = React.createRef()

    }

    componentDidMount() {
        
    }
    
    handleButtonClick = ()=>{
        this.focusInputRef.current.focusInput()
    }

    handleForwardRefButtonClick = () =>{
        this.inputRef.current.focus()
    }

    render() {
        return (
            <>
                <FocusInput ref={this.focusInputRef}/>
                <button onClick={this.handleButtonClick}>Focus Input</button><span> // this.focusInputRef.current.focusInput()</span><br/>
                <FrFocusInput ref={this.inputRef}/>
                <button onClick={this.handleForwardRefButtonClick}>Focus Input using forward ref</button><span> // this.inputRef.current.focus()</span>
            </>
        )
    }
}

export default RefAppParent;
