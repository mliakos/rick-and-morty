import { gql } from '@apollo/client';

export const FETCH_CHARACTERS_QUERY = gql`
  query Characters($page: Int, $filterName: String) {
    characters(page: $page, filter: { name: $filterName }) {
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
