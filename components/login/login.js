import React from "react";
import { Button } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button style={{float: 'right', backgroundImage: 'linear-gradient(#6C63FF, #AD40F0)', color: "#fff"}} 
  onClick={() => loginWithRedirect()}>Sou voluntário</Button>;
};

export default LoginButton;