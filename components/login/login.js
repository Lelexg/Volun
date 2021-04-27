import React from "react";
import { Button } from "@material-ui/core";
import { useAuth0,  } from "@auth0/auth0-react";

const LoginButton = ({volunteer}) => {
  const { loginWithRedirect } = useAuth0();

  return (
    volunteer ?
    (
      <Button style={{float: 'right', backgroundImage: 'linear-gradient(#6C63FF, #AD40F0)', color: "#fff"}} 
      onClick={() => loginWithRedirect([{display: 'popup', redirect_uri: 'http://localhost:3000/profile'}])}>Sou voluntário</Button>
    )
    :
    (
      <Button color="primary" variant="outlined" 
      onClick={() => loginWithRedirect([{display: 'popup', redirect_uri: 'http://localhost:3000/ong/profile'}])}>
        Sou parceiro
      </Button>
    )
  )
};

export default LoginButton;