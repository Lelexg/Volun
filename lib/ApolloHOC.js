import withApollo from 'next-with-apollo';
import { ApolloClient, InMemoryCache } from '@apollo/client';


function createClient({ headers }) {
    return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? `http://localhost:4000` : `https://volun-api.vercel.app`,
    cache: new InMemoryCache(),
    request: operation => {
        operation.setContext({
        fetchOptions: {
            credentials: 'include',
        },
        headers,
        });
    },
    });
};

export default withApollo(createClient);