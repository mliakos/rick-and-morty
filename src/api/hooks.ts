import { useQuery } from '@apollo/client';
import {
  FETCH_CHARACTERS_QUERY,
  FetchCharactersQueryData,
  FetchCharactersQueryVariables
} from '../api';

export const useFetchAllCharacters = (filterName: string) => {
  return useQuery<FetchCharactersQueryData, FetchCharactersQueryVariables>(FETCH_CHARACTERS_QUERY, {
    variables: { page: 1, filterName }
  });
};
