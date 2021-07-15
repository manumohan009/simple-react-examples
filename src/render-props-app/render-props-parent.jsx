import React from 'react'
import ClickCounter from './click-counter'
import Counter from './counter'
import HoverCounter from './hover-couter'
import MouseTracker from './mouse-tracker'
import RandomUser from './random-user'
import UserName from './user-name'
import Wrapper from './wrapper'

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
           <MouseTracker/>
           <Wrapper link="https://jsonplaceholder.typicode.com/users" render={({list, isLoading, error})=>(
               <RandomUser list={list} isLoading={isLoading} error={error}/>
           )}/>
        </div>
    )
}

// The term 'render prop' refers to a technique for sharing code between React component using
// a prop whose value is a function 