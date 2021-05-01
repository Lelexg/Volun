import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, LogoutOptions } = useAuth0();

  return <a className="logout" onClick={() => logout({redirectTo: 'http://localhost:3000'})}>Sair</a>;
};

export default LogoutButton;