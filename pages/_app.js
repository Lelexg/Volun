import React from 'react';
import Header from '../components/header/header.js';
import Footer from '../components/footer/footer.js';
import { Auth0Provider } from "@auth0/auth0-react";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ApolloProvider } from '@apollo/client';
import initApollo from '../lib/initApollo';
import '../public/css/style.css';

export default function MyApp({ Component, pageProps }) {
  
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#6C63FF',
      },
      secondary: {
        main: '#AD40F0',
      },
    },
    overrides: {
      MuiButton: {
        root: {
          padding: '2%',
        },
      },
      typography: {
        fontFamily: [
          'Nunito',
        ].join(','),
        h1: {
          fontFamily: [
            'PT Serif'
          ].join(','),
        }
      },
    },
  });

  const apollo = initApollo();
  
  return (
    <ThemeProvider theme={theme}>
      <Auth0Provider
      domain="volun-dev.us.auth0.com"
      clientId="oBQOnMccTWb5WqyGVXg6ceGk2JZDlke1"
      redirectUri="https://volun-portal.vercel.app/profile"
      setSession
      silentAuth
      >
        <link
          rel="preload"
          href="/fonts/Nunito/Nunito-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Nunito/Nunito-Medium.ttf"
          as="font"
          crossOrigin=""
        />
        <Header/>
          <ApolloProvider client={apollo}>
            <Component {...pageProps} />
          </ApolloProvider>
        <Footer/>
      </Auth0Provider>
    </ThemeProvider>
  )
};    