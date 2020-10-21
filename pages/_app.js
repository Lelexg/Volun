import React from 'react';
import Header from '../components/header/header.js';
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
  });

 const apollo = initApollo();
  
  return (
    <ApolloProvider client={apollo}>
      <Auth0Provider
      domain="volun-dev.us.auth0.com"
      clientId="oBQOnMccTWb5WqyGVXg6ceGk2JZDlke1"
      redirectUri="http://localhost:3000/users"
      >
        <ThemeProvider theme={theme}>
          <Header/>
          <Component {...pageProps} />
        </ThemeProvider>
      </Auth0Provider>
    </ApolloProvider>
  )
};    