import React, { useState, useEffect } from "react";
import axios from "axios";

function UserApi() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userUrl = "https://jsonplaceholder.typicode.com/users/";
    fetchUsers(userUrl);
  }, []);

  const fetchUsers = async userUrl => {
    try {
      const responseData = await axios.get(userUrl).then(res => res.data);
      console.log(responseData, "responseData");
      setUser(responseData[0]);
    } catch (err) {
      console.log(err, "error");
    }
  };

  return (
    <div>
      { user? <h3>{user.name}</h3>: null }
    </div>
  );
}

export default UserApi;
