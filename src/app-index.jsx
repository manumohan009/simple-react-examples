import React from 'react';
import {Link} from 'react-router-dom';

function AppIndexPage() {
    return (
        <>
            <h2>App Index</h2>
            <ul>
                <li><Link to='/cake'>Load Cake App</Link></li>
                <li><Link to='/count'>Load Count App</Link></li>
                <li><Link to='/user'>Load User-API App</Link></li>
                <li><Link to='/user-thunk'>Load User-API-Thunk App</Link></li>
                <li><Link to='/pure-and-memo'>Load Pure and Memo App</Link></li>
                <li><Link to='/ref-demo'>Load Ref App</Link></li>
                <li><Link to='/regular-expressions'>Load Regular Expressions App</Link></li>
                <li><Link to='/binding-this'>Binding this</Link></li>
                <li><Link to='/graphql'>GraphQL App</Link></li>
                <li><Link to='/redux-saga'>Redux Saga App</Link></li>
                <li><Link to='/render-props'>Render Props App</Link></li>
                <li><Link to='/hof'>Higher Order Function App</Link></li>
                <li><Link to='/memoize-app'>Memoize App</Link></li>


                <li><Link to='/loadable'>Load React Loadable App</Link></li>
            </ul>
        </>

    )
}

export default AppIndexPage
