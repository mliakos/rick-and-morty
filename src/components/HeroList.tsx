import React from 'react';
import Hero from './Hero';
import { Row } from 'antd';

import { IHero } from '../@types';

type Props = {
  heroes: IHero[];
};

const HeroList: React.FC<Props> = ({ heroes }: Props) => {
  return (
    <Row gutter={[16, 24]} justify="space-around" align="middle" style={{ marginTop: 50 }}>
      {heroes.map((hero) => (
        <Hero key={hero.id} hero={hero} />
      ))}
    </Row>
  );
};

export default HeroList;
