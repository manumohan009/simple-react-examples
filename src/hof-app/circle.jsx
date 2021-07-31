import React, { Component } from 'react'

class Circle extends Component {
    constructor(props){
        super(props)
        this.state = {
            radius: [10,2,5,25],
            area: [],
            diameter: [],
            circumference: []
        }
    }

    // calculateArea(){
    //     const {radius} = this.state;
    //     let temp = []
    //     for(let r of radius){
    //         let result = Math.floor(Math.PI * r * r);
    //         temp.push(result)
    //     }
    //     this.setState({area: temp})
    // }

    // calculateDiameter(){
    //     const {radius} = this.state;
    //     let temp = []
    //     for(let r of radius){
    //         let result = Math.floor( r * 2);
    //         temp.push(result)
    //     }
    //     this.setState({diameter: temp})
    // }

    // calculateCircumference(){
    //     const {radius} = this.state;
    //     let temp = []
    //     for(let r of radius){
    //         let result = Math.floor( 2 * Math.PI * r);
    //         temp.push(result)
    //     }
    //     this.setState({circumference: temp})
    // }

    calculate = (radius, logic)=>{
        let output = []
        for(let r of radius){
            let result = logic(r)
            output.push(result)
        }
        return output;
    }

    area = (radius)=>{
        return Math.floor(Math.PI * radius * radius);
    }

    diameter = (radius)=>{
        return Math.floor( radius * 2);
    }

    circumference = (radius)=>{
        return Math.floor( 2 * Math.PI * radius);
    }

    componentDidMount(){
        const {radius} = this.state;

        /* Using normal function */
        // this.calculateArea();
        // this.calculateDiameter();
        // this.calculateCircumference();

        /* Using custom hof */
        const area = this.calculate(radius, this.area);
        this.setState({area: area});
        const diameter = this.calculate(radius, this.diameter);
        this.setState({diameter: diameter});
        const circumference = this.calculate(radius, this.circumference);
        this.setState({circumference: circumference})

        /* Using map */
        // const area = radius.map(this.area)
        // this.setState({area: area});
        // const diameter = radius.map(this.diameter);
        // this.setState({diameter: diameter});
        // const circumference = radius.map(this.circumference);
        // this.setState({circumference: circumference})

    }
    render() {
        const {radius, area, diameter, circumference} = this.state
        return (
            <div>
                <div><span>Radius: </span><span>{radius.join(', ')}</span></div>
                <div><span>Area: </span><span>{area.join(', ')}</span></div>
                <div><span>Diameter: </span><span>{diameter.join(', ')}</span></div>
                <div><span>Circumference: </span><span>{circumference.join(', ')}</span></div>
            </div>
        )
    }
}

export default Circle;
