import React, {useState} from 'react'

const CountUsingFunction = ()=>{
    const [count, setCount] = useState(0);
    const add = ()=>{
        setCount(count+1)
    }

    return(
        <div>
            <p>Example Count app using Functional component</p>
            <p>Count: {count}</p>
            <button onClick={add}>Add</button>
        </div>
    )

}

export default CountUsingFunction