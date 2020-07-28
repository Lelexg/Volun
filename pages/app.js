import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import withApollo from '../lib/ApolloHOC.js';
import Users from '../components/Users.js';

class MyApp extends App {
  static async getInitialProps(ctx) {

    return { };
  }

  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
        <ApolloProvider client={apollo}>
            <Users />
        </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);