import React from "react";
import { Button } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = ({volunteer}) => {
  const { loginWithRedirect } = useAuth0();

  return (
    volunteer ?
    (
      <Button style={{fontSize: '1.1vw', marginRight: '5%', backgroundImage: 'linear-gradient(#6C63FF, #AD40F0)', color: "#fff"}}
      onClick={() => {localStorage.setItem('user', true); loginWithRedirect()}}>Quero ser voluntário</Button>
    )
    :
    (
      <Button color="primary" variant="outlined" style={{fontSize: '1.1vw'}}
      onClick={() => {localStorage.setItem('user', false); loginWithRedirect()}}>
        Preciso de voluntários
      </Button>
    )
  )
};

export default LoginButton;