import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { ENDPOINTS } from '../config';

const httpLink = createHttpLink({
  uri: ENDPOINTS.base
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          characters: {
            keyArgs: false,
            merge(existing = { results: [], info: {} }, incoming) {
              return {
                results: [...existing.results, ...incoming.results],
                info: incoming.info
              };
            }
          }
        }
      }
    }
  })
});

export default client;
