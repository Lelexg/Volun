import React from "react";
import Login from '../login/login';
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../../public/logo.svg'
import { Button, Grid } from "@material-ui/core";
import Link from 'next/link';

const Header = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated ? (
      <Grid container sx={12} spacing={3} className="header">
        <Grid item xs={5}>
        <img className="logo" src={logo} alt="logo" />
        </Grid>
        <Grid item xs={7} className="button-header">
          <Link href="/profile">
            <Button color="secondary" className="my-profile">
              Meu perfil
            </Button>
          </Link>
          <Link href="/profile">
            <Button color="primary" variant="outlined">
              Para parceiros
            </Button>
          </Link>
          <Link href="/profile/index">
            <Button>
              Projetos
            </Button>
          </Link>
        </Grid>
      </Grid>
    ) : (
      <Grid container sx={12} spacing={3} className="header">
        <Grid item xs={5}>
        <img className="logo" src={logo} alt="logo" />
        </Grid>
        <Grid item xs={7} className="button-header">
          <Login/>
          <Link href="/profile/profile">
            <Button color="primary" variant="outlined">
              Para parceiros
            </Button>
          </Link>
          <Link href="/profile/profile">
            <Button>
              Projetos
            </Button>
          </Link>
        </Grid>
      </Grid>
    )
  );
};

export default Header;