import React, { useEffect, useState } from "react";

import { userService, authenticationService } from "../../services";

const Home = () => {
  const [currentUser, setCurrentUser] = useState(
    authenticationService.currentUserValue
  );
  const [users, setUsers] = useState(null);

  useEffect(() => {
    console.log(currentUser);
    userService.getAll().then((users) => setUsers(users));
  }, []);

  return (
    <div>
      <h1>Hi {currentUser.username}!</h1>
      <p>You're logged in with React & JWT!!</p>
      <h3>Users from secure api end point:</h3>
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
