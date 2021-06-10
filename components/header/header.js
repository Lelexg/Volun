import React from "react";
import Login from '../login/login';
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../../public/images/logo-volun-long.png'
import { Button, Grid } from "@material-ui/core";
import Link from 'next/link';
import Head from 'next/head';

const Header = () => {
  const { user, isAuthenticated } = useAuth0();

  if(typeof document !== 'undefined'){
    var header = document.getElementById("myHeader");

    if(header != null){
      var sticky = header ? header.offsetTop : "";

      window.onscroll = function() {
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
          document.body.style.marginTop = "11%"
        } else {
          header.classList.remove("sticky");
          document.body.style.marginTop = "0"
        }
      }
    }
  }

  return (
    <div class="header" id="myHeader">
      <Head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://volun-portal.vercel.app/" />
        <meta property="og:title" content="Volun" />
        <meta property="og:site_name" content="Volun" />
        <meta property="og:description" content="Um novo jeito de fazer voluntariado" />
        <meta property="og:image" content="https://volun-portal.vercel.app/images/icons/favicon-maskable-512x512.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta name="author" content="Volun" />
        <meta name="description" content="Um novo jeito de fazer voluntariado" />
        <meta name="keywords" content="volun, voluntários, voluntariado, serviço voluntário" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Volun" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-title" content="Volun" />
        <link rel="apple-touch-icon" sizes="57x57" href="/images/icons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/images/icons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/images/icons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/images/icons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/images/icons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/images/icons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/images/icons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/icons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/images/icons/favicon-512x512.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/icons/favicon-192x192.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/icons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/images/icons/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/icons/favicon-16x16.png" />
        <link rel="Shortcut Icon" href="/images/icons/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#6C63FF" />
        <script type="text/javascript">
          if ("serviceWorker" in navigator)
          navigator.serviceWorker.register("/sw.js");
        </script>
      </Head>
    {isAuthenticated ? (
      <Grid container sx={12} className="header">
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
      <Grid container sx={12} className="header">
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
    </div>
  );
};

export default Header;