import { LoadingOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

const Loader: React.FC = () => {
  return (
    <Row justify="center" style={{ marginTop: 50 }}>
      <Col span={1}>
        <LoadingOutlined style={{ fontSize: '50px' }} />
      </Col>
    </Row>
  );
};

export default Loader;
