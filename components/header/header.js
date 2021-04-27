import React from "react";
import Login from '../login/login';
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../../public/images/logo-volun-long.png'
import { Button, Grid } from "@material-ui/core";
import Link from 'next/link';

const Header = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated ? (
      <Grid container sx={12} spacing={3} className="header">
        <Grid item xs={5}>
        <Link href="/volunteer"><img className="logo" src={logo} alt="logo" /></Link>
        </Grid>
        <Grid item xs={7} className="button-header">
          <Link href="/profile">
            <Button color="secondary" className="my-profile">
              Meu perfil
            </Button>
          </Link>
          <Link href="/volunteer/projects">
            <Button>
              Projetos
            </Button>
          </Link>
          <Link href="/volunteer">
            <Button>
              Home
            </Button>
          </Link>
        </Grid>
      </Grid>
    ) : (
      <Grid container sx={12} spacing={3} className="header">
        <Grid item xs={5}>
          <Link href="/"><img className="logo" src={logo} alt="logo" /></Link>
        </Grid>
        <Grid item xs={7} className="button-header">
          <Login volunteer={true}/>
          <Login volunteer={false}/>
          <Link href="/volunteer/projects">
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