import { gql } from '@apollo/client';
import { IHero } from '../@types';

export type FetchCharactersQueryVariables = {
  page: number;
  filterName: string;
};

export type FetchCharactersQueryData = {
  characters: {
    results: IHero[];
    info: {
      count: number;
      next: number | null;
      prev: number | null;
      pages: number;
    };
  };
};

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
