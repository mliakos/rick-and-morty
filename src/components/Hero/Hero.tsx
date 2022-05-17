import { Card, Tag } from 'antd';
import React from 'react';
import { IHero, TagColor } from '../../@types';
import HeroContent from './HeroContent';

type Props = {
  hero: IHero;
};

const Hero: React.FC<Props> = ({ hero }) => {
  const { name, image = '', status, location } = hero;

  return (
    <Card
      size="default"
      bordered={false}
      cover={
        <>
          <div
            style={{
              position: 'absolute',
              left: '10px',
              top: '10px',
              zIndex: 1
            }}>
            <Tag color={TagColor[status]}>{status}</Tag>
          </div>

          <img alt="example" src={image} />
        </>
      }>
      <HeroContent name={name} location={location} />
    </Card>
  );
};

export default Hero;
