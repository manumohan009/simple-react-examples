import React from 'react';
import { connect } from 'react-redux'

import { buyCake } from '../redux/cake-app/cake.actions'

function CakeContainer(props) {
    console.log(props)
    const numberOfCakes = props.numberOfCakes;
    return (
        <div>
            <h2>Number of cakes: {numberOfCakes}</h2>
            <button onClick={props.handleBuyCake}>Buy cake</button>
        </div>
    )
}

const MapStateToProps = state =>{
    return state.cake
}

const MapDispatchToProps = dispatch => ({
    handleBuyCake: ()=> dispatch(buyCake())
})



export default connect(MapStateToProps, MapDispatchToProps)(CakeContainer);
