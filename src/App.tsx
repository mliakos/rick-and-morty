import React, { FC } from 'react';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;
import HeroList from './components/HeroList';
import './App.css';

const App: FC = () => {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 2, width: '100%' }}>Rick & Morty Heroes</Header>

      <Content
        style={{ padding: '0 50px', marginTop: 64, height: 900, overflow: 'auto' }}
        id="scrollable">
        <HeroList />
      </Content>

      <Footer>Crafted with ❤️ using React, Apollo, TypeScript & Ant Design</Footer>
    </Layout>
  );
};

export default App;
