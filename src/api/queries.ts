import { gql } from '@apollo/client';

export const FETCH_CHARACTERS_QUERY = gql`
  {
    characters {
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
