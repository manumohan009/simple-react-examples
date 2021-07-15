import React, { Component } from 'react'
import CatImg from './cat.jpeg'
import withMouse from './with-mouse'

class CatWithMouse extends Component {
    render() {
        const mouse = this.props.mouse
        return (
            <img src={CatImg} style={{position: 'absolute', left: mouse.x, top: mouse.y}}/>
        )
    }
}
export default withMouse(CatWithMouse)
