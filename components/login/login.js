import React from "react";
import { Button } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import ColorButton from '../buttons/colorButton';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <ColorButton style={{float: 'right'}} onClick={() => loginWithRedirect()}>Log In</ColorButton>;
};

export default LoginButton;