import axios from "axios";
import React, { useEffect, useState } from "react";
import UserItem from "./UserItem/UserItem";

const ListUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch(console.error);
  }, []);

  if (users.length > 0) {
    return (
      <>
        <p className="display-4 text-center">List of Users</p>
        <div className="row">
          {users.map((u) => (
            <UserItem key={u.id} user={u} />
          ))}
        </div>
      </>
    );
  } else {
    return <p>Loading users ...</p>;
  }
};

export default ListUsers;
