import React from 'react';
import Head from 'next/head';

export default ({children}) => (
  <div className="container">
    <Head>
      <title>Volun Users</title>
    </Head>
    {children}
  </div>
);