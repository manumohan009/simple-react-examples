import React, { Component} from 'react';
import axios from 'axios'

class LoadableChild extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    componentDidMount() {
        console.log(this.props)
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                console.log(response.data)
            })
    }

    render() {
        return (
            <>
                <div>
                    Dynamic Child - {this.props.loadLibrary.toString()}
                </div>
            </>
        )
    }
}

export default LoadableChild;
