import React, { FC } from 'react';
import { Layout } from 'antd';
import { useQuery } from '@apollo/client';
import { FETCH_CHARACTERS_QUERY } from './api';

const { Header, Footer, Content } = Layout;
import HeroList from './components/HeroList';
import './App.css';

const App: FC = () => {
  const { data } = useQuery(FETCH_CHARACTERS_QUERY);

  return (
    data && (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 2, width: '100%' }}>Rick & Morty Heroes</Header>

        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <HeroList heroes={data.characters.results} />
        </Content>

        <Footer>Crafted with ❤️ using React, Apollo, TypeScript & Ant Design</Footer>
      </Layout>
    )
  );
};

export default App;
