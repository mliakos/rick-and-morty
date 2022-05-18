import { Row, Col, Input } from 'antd';
const { Search } = Input;

import React from 'react';

type Props = {
  loading: boolean;
  handleOnSearch: (query: string) => void;
  handleOnChange: any;
};

const SearchHero: React.FC<Props> = ({ loading, handleOnSearch, handleOnChange }) => {
  return (
    <Row justify="center">
      <Col xs={24} sm={12} md={8}>
        <Search
          loading={loading}
          style={{ marginTop: 50 }}
          placeholder="Search hero by name"
          onSearch={handleOnSearch}
          onChange={(e) => handleOnChange(e.target.value)}
          enterButton
        />
      </Col>
    </Row>
  );
};

export default SearchHero;
