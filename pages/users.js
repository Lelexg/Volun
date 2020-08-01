import React from 'react';

import App from '../components/app';
import Users from '../components/users';
import withData from '../lib/withData'

export default withData(() => (
  <App>
    <Users/>
  </App>
));