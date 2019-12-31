import React from "react";

import CountUsingClass from './class-examples/count.component';
import CountUsingFunction from './functional-examples/count.component';
import CountUsingReduxConnect from './redux-examples/count.component';

function index() {
  return (
    <>
      <CountUsingClass />
      <CountUsingFunction />
      <CountUsingReduxConnect />
    </>
  );
}

export default index;
