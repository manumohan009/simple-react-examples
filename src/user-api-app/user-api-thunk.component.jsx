import React from "react";
import { connect } from "react-redux";

import { fetchUsersStartAsync } from "../redux/user-api-app/user.actions";

function UserApiThunk({ fetchUsers, userData, isFetching }) {
  // console.log(userData);
  // console.log(isLoading);

  return (
    <div>
      <div>
        Is Fetching value: {isFetching? <div>Fetching</div>: null}
      </div>
      <div>
        <button onClick={fetchUsers}>Load user data</button>
      </div>
      {userData? userData.map(user=> {
        return <h1 key={user.id}>{user.name}</h1>
      })
      : null}
    </div>
  );
}

const MapStateToProps = state => ({
  userData: state.users.userData,
  isFetching: state.users.isFetching
});

const MapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsersStartAsync())
});

export default connect(MapStateToProps, MapDispatchToProps)(UserApiThunk);
