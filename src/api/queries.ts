import { gql } from '@apollo/client';

export const FETCH_CHARACTERS_QUERY = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      results {
        name
        id
        image
        status
        location {
          name
        }
      }
      info {
        count
        next
        prev
        pages
      }
    }
  }
`;
