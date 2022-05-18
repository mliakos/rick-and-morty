import React, { useCallback, useState } from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_CHARACTERS_QUERY } from '../api';

import Hero from './Hero';
import { List, Divider, notification, Alert } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';
import SearchHero from './SearchHero';

import { IHero } from '../@types';

notification.config({ maxCount: 3 });

const HeroList: React.FC = () => {
  const [filterName, setFilterName] = useState('');
  const { loading, data, fetchMore, refetch, error } = useQuery(FETCH_CHARACTERS_QUERY, {
    variables: { page: 1, filterName }
  });
  const heroes: IHero[] = data?.characters?.results || [];
  const info = data?.characters.info;

  const handleOnSearch = useCallback(
    (query: string) => {
      refetch({ page: 1, filterName });
    },
    [refetch, filterName]
  );

  return (
    <>
      <SearchHero
        loading={loading}
        handleOnSearch={handleOnSearch}
        handleOnChange={(query: string) => setFilterName(query)}
      />
      {error && (
        <Alert
          message="Error"
          description={error.message}
          type="error"
          closable
          style={{ marginTop: 20 }}
        />
      )}

      {loading ? (
        <Loader />
      ) : (
        <InfiniteScroll
          dataLength={heroes.length}
          next={() => fetchMore({ variables: { page: info.next, filterName } })}
          hasMore={info?.next}
          loader={<></>}
          endMessage={<Divider plain>{"That's all folks!"}</Divider>}
          scrollableTarget="scrollable">
          <List
            style={{ marginTop: 50 }}
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 5,
              xl: 5,
              xxl: 5
            }}
            dataSource={error ? [] : heroes}
            renderItem={(item) => (
              <List.Item>
                <Hero key={item.id} hero={item} />
              </List.Item>
            )}
          />
        </InfiniteScroll>
      )}
    </>
  );
};

export default HeroList;
