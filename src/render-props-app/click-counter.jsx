import React from "react";

const ClickCounter = ({count, incrementCount})=> {
    return (
      <div>
        <button onClick={incrementCount}>{count}</button>
      </div>
    );
}

export default ClickCounter;
