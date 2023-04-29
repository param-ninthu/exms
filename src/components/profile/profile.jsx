import React from "react";

import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.users.value);

  return (
    <div>
      {user.map((user) => (
        <>
          <h1>{user.firstName}</h1>
          <h1>{user.email}</h1>
        </>
      ))}
    </div>
  );
};

export default Profile;
