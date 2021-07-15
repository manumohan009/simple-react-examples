import React, { Component } from 'react'
import Mouse from './mouse';
import Cat from './cat';
import CatWithMouse from './cat-with-mouse';

export default class MouseTracker extends Component {
    render() {
        return (
            <>
                <h1>Move the mouse around!</h1>
                <Mouse render={mouse=>(
                    <Cat mouse={mouse}/>
                )}/>
                {/* <h1>using HOC</h1> */}
                {/* <CatWithMouse/> */}
            </>
        )
    }
}
