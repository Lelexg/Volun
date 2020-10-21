import React from "react";
import Login from '../../components/login/login';
import Logout from '../../components/login/logout';
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  console.log(user)

  return (
    isAuthenticated ? (
      <div>
        <img style={{height: '60px'}} src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      <Logout></Logout>
      </div>
    ) : <Login></Login>
  );
};

export default Profile;