import axios from 'axios'
import React, { Component } from 'react'

export default class Wrapper extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading: true,
            error: null,
            list: []
        }
    }

    fetchData(){
        axios.get(this.props.link).then((response)=>{
            this.setState({
                list: response.data,
                isLoading: false
            })
        }).catch(error => this.setState({error, isLoading: false}))
    }

    componentDidMount(){
        this.setState({isLoading: true}, this.fetchData)
    }
    render() {
        return this.props.render(this.state)
    }
}
