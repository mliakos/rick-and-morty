import React from 'react';
import { Typography } from 'antd';

import { IHero } from '../../@types';

type Props = {
  name: IHero['name'];
  location: IHero['location'];
};

const HeroContent: React.FC<Props> = ({ name, location }) => {
  return (
    <>
      <Typography.Title level={5} style={{ margin: 0 }}>
        Name
      </Typography.Title>
      {name}
      <Typography.Title level={5} style={{ margin: '5px 0 0 0' }}>
        Last known location
      </Typography.Title>
      {location.name}
    </>
  );
};

export default HeroContent;
