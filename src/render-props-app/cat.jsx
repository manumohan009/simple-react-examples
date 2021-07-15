import React, { Component } from 'react'
import CatImg from './cat.jpeg'

class Cat extends Component {
    render() {
        const mouse = this.props.mouse
        return (
            <img src={CatImg} style={{position: 'absolute', left: mouse.x, top: mouse.y}}/>
        )
    }
}
export default Cat
