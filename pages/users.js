import React from 'react';

import App from '../components/app';
import Users from '../components/users';
import Profile from '../components/profile';
import withData from '../lib/withData'

import { Auth0Provider } from "@auth0/auth0-react";

export default withData(() => (
  
  <Auth0Provider
    domain="volun-dev.us.auth0.com"
    clientId="oBQOnMccTWb5WqyGVXg6ceGk2JZDlke1"
    redirectUri="http://localhost:3000/users"
  >
    <App >
      <Profile/>
      <div>---------------------------------------------------------------------------------------</div>
      <Users/>
    </App>
  </Auth0Provider>
));