import React, { Component } from 'react'

class UserName extends Component {
    render() {
        return (
            <div>
                {this.props.name(true)}
            </div>
        )
    }
}

export default UserName
