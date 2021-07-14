import React from 'react'
import ClickCounter from './click-counter'
import Counter from './counter'
import HoverCounter from './hover-couter'
import UserName from './user-name'

export default function RenderPropsParent() {
    return (
        <div>
            <Counter render={(count, incrementCount)=>(
                <ClickCounter count={count} incrementCount={incrementCount}/>
            )}/>

            <Counter render={(count, incrementCount)=>(
                <HoverCounter count={count} incrementCount={incrementCount}/>
            )}/>
           <UserName name={(isLoggedIn)=> isLoggedIn ? 'Manu' : 'Guest'}/>
        </div>
    )
}

// The term 'render prop' refers to a technique for sharing code between React component using
// a prop whose value is a function 