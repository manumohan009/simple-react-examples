import React, { Component } from 'react'

class FocusInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        
    }

    focusInput(){
        this.inputRef.current.focus()
    }

    render() {
        return (
            <>
                <input type="text" ref={this.inputRef}/>
            </>
        )
    }
}

export default FocusInput;
