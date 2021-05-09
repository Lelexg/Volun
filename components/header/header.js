import React from "react";
import Login from '../login/login';
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../../public/images/logo-volun-long.png'
import { Button, Grid } from "@material-ui/core";
import Link from 'next/link';
import Head from 'next/head';

const Header = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <nav>
      <Head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>
        <meta name="description" content="Description"/>
        <meta name="keywords" content="Keywords"/>
        <meta name="theme-color" content="red"/>
        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-title" content="Application Title"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
        <meta name="msapplication-navbutton-color" content="red"/>
        <meta name="msapplication-TileColor" content="red"/>
        <meta name="msapplication-TileImage" content="ms-icon-144x144.png"/>
        <meta name="msapplication-config" content="browserconfig.xml"/>
        <meta name="application-name" content="Application Name"/>
        <meta name="msapplication-tooltip" content="Tooltip Text"/>
        <meta name="msapplication-starturl" content="/"/>
        <meta name="msapplication-tap-highlight" content="no"/>
        <meta name="full-screen" content="yes"/>
        <meta name="browsermode" content="application"/>
        <meta name="nightmode" content="enable/disable"/>
        <meta name="viewport" content="uc-fitscreen=yes"/>
        <meta name="layoutmode" content="fitscreen/standard"/>
        <meta name="imagemode" content="force"/>
        <meta name="screen-orientation" content="portrait"/>

        <link href="favicon-16.png" rel="icon" type="image/png" sizes="16x16"/>
        <link href="favicon-32.png" rel="icon" type="image/png" sizes="32x32"/>
        <link href="favicon-48.png" rel="icon" type="image/png" sizes="48x48"/>
        <link href="touch-icon-iphone.png" rel="apple-touch-icon"/>
        <link href="touch-icon-ipad.png" rel="apple-touch-icon" sizes="76x76"/>
        <link href="touch-icon-iphone-retina.png" rel="apple-touch-icon" sizes="120x120"/>
        <link href="touch-icon-ipad-retina.png" rel="apple-touch-icon" sizes="152x152"/>
        <link href="touch-icon-start-up-320x480.png" rel="apple-touch-startup-image"/>
        <link href="path/to/icon.svg" rel="mask-icon" size="any" color="red"/>
        <link href="icon-192x192.png" rel="icon" sizes="192x192"/>
        <link href="icon-128x128.png" rel="icon" sizes="128x128"/>
        <link href="favicon.icon" rel="shortcut icon" type="image/x-icon"/>
        <link href="images/icon-52x52.png" rel="apple-touch-icon-precomposed" sizes="57x57"/>
        <link href="images/icon-72x72.png" rel="apple-touch-icon" sizes="72x72"/>
        <link href="/manifest.json" rel="manifest"/>
      </Head>
    {isAuthenticated ? (
      <Grid container sx={12} spacing={3} className="header">
        <Grid item xs={4}>
        {localStorage.getItem('user') == 'false' ?
          <Link href="/ong"><img className="logo" src={logo} alt="logo" /></Link>
          :
          <Link href="/volunteer"><img className="logo" src={logo} alt="logo" /></Link>
        }
        </Grid>
        <Grid item xs={8} className="button-header">
          {localStorage.getItem('user') == 'false' ?
            <Link href="/ong/profile">
              <Button color="secondary" className="my-profile">
                Meu perfil
              </Button>
            </Link>
            :
            <Link href="/profile">
              <Button color="secondary" className="my-profile">
                Meu perfil
              </Button>
            </Link>
          }
          <Link href="/volunteer/projects">
            <Button>
              Projetos
            </Button>
          </Link>
          {localStorage.getItem('user') == 'false' ?
            <Link href="/ong">
              <Button>
                Home
              </Button>
            </Link>
            :
            <Link href="/volunteer">
              <Button>
                Home
              </Button>
            </Link>
          }
        </Grid>
      </Grid>
    ) : (
      <Grid container sx={12} spacing={3} className="header">
        <Grid item xs={4}>
          <Link href="/"><img className="logo" src={logo} alt="logo" /></Link>
        </Grid>
        <Grid item xs={8} className="button-header">
          <Login volunteer={true}/>
          <Login volunteer={false}/>
          <Link href="/volunteer/projects">
            <Button>
              Projetos
            </Button>
          </Link>
        </Grid>
      </Grid>
    )}
    </nav>
  );
};

export default Header;