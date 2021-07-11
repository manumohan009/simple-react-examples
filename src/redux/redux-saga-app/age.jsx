import React from "react";
import { connect } from "react-redux";

function Age(props) {
//   console.log(props, "age_props");
  return (
    <div>
      <div className="age-label">
        Your Age: <span>{props.age}</span>
      </div>
      <button onClick={props.onAgeUp}>Age Up</button>
      <button onClick={props.onAgeDown}>Age Down</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { age: state.age };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Age);
