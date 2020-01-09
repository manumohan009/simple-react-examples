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
            </ul>
        </>

    )
}

export default AppIndexPage
