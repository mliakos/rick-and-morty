import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { ENDPOINTS } from '../config';

const httpLink = createHttpLink({
  uri: ENDPOINTS.base
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default client;
