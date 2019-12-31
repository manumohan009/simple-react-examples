import React from 'react'
import {connect} from 'react-redux';
import { addCount } from '../../redux/count-app/count.actions';

const CountUsingReduxConnect = ({ count, addCount }) => {
    return (
      <main>
        <p>Example Count app using redux and connect</p>
        <div>Count: {count}</div>
        <button onClick={addCount}>Add to count</button>
      </main>
    );
  };

const mapStateToProps = (state)=>({
    count: state.count.count
})

const mapDispatchToProps = {
    addCount
}

export default connect(mapStateToProps,mapDispatchToProps)(CountUsingReduxConnect);