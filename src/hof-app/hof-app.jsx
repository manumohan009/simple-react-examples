import React, { Component } from 'react'
import Circle from './circle';

 class HofApp extends Component {
    render() {
        return (
            <div className="hof-parent">
                HOF
                <Circle/>
            </div>
        )
    }
}

export default HofApp;
