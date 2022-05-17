import React from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_CHARACTERS_QUERY } from '../api';

import Hero from './Hero';
import { List, Skeleton, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';

import { IHero } from '../@types';

const HeroList: React.FC = () => {
  const { loading, data, fetchMore } = useQuery(FETCH_CHARACTERS_QUERY, { variables: { page: 1 } });
  const heroes: IHero[] = data?.characters?.results || [];
  const info = data?.characters.info;
  console.log(data);
  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <InfiniteScroll
          dataLength={heroes.length}
          next={() => fetchMore({ variables: { page: info.next } })}
          hasMore={info.next}
          loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
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
            dataSource={heroes}
            renderItem={(item) => (
              <List.Item>
                <Hero key={item.id} hero={item} />
              </List.Item>
            )}
          />
        </InfiniteScroll>
      )}
    </div>
  );
};

export default HeroList;
