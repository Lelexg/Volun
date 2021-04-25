import React from 'react';
import Header from '../components/header/header.js';
import Footer from '../components/footer/footer.js';
import { Auth0Provider } from "@auth0/auth0-react";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ApolloProvider } from 'react-apollo';
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
      domain="volundev.us.auth0.com"
      clientId="sg0JHgdzEjQSC1HUvhFoGG1CAA7NG5W2"
      redirectUri="http://localhost:3000/profile"
      handleRedirectCallback
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
        <ApolloProvider client={apollo}>
          <Header/>
          <Component {...pageProps} />
          <Footer/>
        </ApolloProvider>
      </Auth0Provider>
    </ThemeProvider>
  )
};    