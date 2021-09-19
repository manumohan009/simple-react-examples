import React, { Component } from 'react'

class MemoizeApp extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    // cache = {}
    // factorial(n){
    //     if (this.cache[n]){
    //         return this.cache[n];
    //     }
    //     let value;
    //     if (n===0){
    //         value =  1;
            
    //     } 
    //     else {
    //         value =  (this.factorial(n-1)*n);
    //     }
    //     this.cache[n] = value;
    //     return value;
    // }
    memoize = fn =>{
        const cache = {};
        console.log(fn, 'fn')
        return (...args)=>{
            console.log(args, 'args')
            const argsString = JSON.stringify(args);
            console.log(argsString, 'argsString')
            if(!cache[argsString]){
                cache[argsString] = fn(...args)
            }
            console.log(cache, 'cache')
            return cache[argsString];
        }
    }
    memoizedFactorial = this.memoize(n=>{
        if(n===0 ) return 1;
        else return (this.memoizedFactorial(n-1)*n)
    })
    componentDidMount(){
        console.log(this, 'this')
        const x = this.memoizedFactorial(20);
        console.log(`factorial of 20 is: ${x}`)
        const y = this.memoizedFactorial(10);
        console.log(`factorial of 10 is: ${y}`)

    }
    render() {
        return (
            <div>
                Memoize App
            </div>
        )
    }
}

export default MemoizeApp
