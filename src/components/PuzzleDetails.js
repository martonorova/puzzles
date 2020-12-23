import React, { useContext } from 'react';
import openNotification from '../utils/notification';
import { useHistory } from 'react-router-dom';
import {
  PageHeader,
  Button,
  Popconfirm,
  Modal,
  Card,
  Row,
  Col,
  Space,
} from 'antd';
import { SolutionOutlined, CloseCircleOutlined } from '@ant-design/icons';

import PuzzleContext from '../context/puzzle/puzzleContext';

const PuzzleDetails = () => {
  const puzzleContext = useContext(PuzzleContext);
  const { selectedPuzzle } = puzzleContext;
  const history = useHistory();
  if (selectedPuzzle === null) {
    openNotification('error', 'Error while loading selected puzzle');
  }

  const onBack = () => {
    history.goBack();
  };

  const showModal = () => {
    Modal.info({
      title: selectedPuzzle.title,
      content: <p>{selectedPuzzle.solution}</p>,
      onOk: () => {},
      okButtonProps: {
        icon: <CloseCircleOutlined />,
      },
    });
  };

  return selectedPuzzle !== null ? (
    <Row justify>
      <Col
        sm={{ span: 16, offset: 4 }}
        md={{ span: 12, offset: 6 }}
        lg={{ span: 8, offset: 8 }}
      >
        <PageHeader onBack={onBack} title={selectedPuzzle.title} />
        <Space direction='vertical' size='large'>
          <Card
            style={{
              borderRadius: '10px',
              textAlign: 'justify',
            }}
          >
            {selectedPuzzle.text}
          </Card>
          <Popconfirm
            title='Are you sure to reveal the mystery?'
            onConfirm={showModal}
            okText='Yes'
            cancelText='No'
          >
            <Button type='primary'>Show solution {<SolutionOutlined />}</Button>
          </Popconfirm>
        </Space>
      </Col>
    </Row>
  ) : (
    <PageHeader onBack={onBack} title='No puzzle to display, please go back' />
  );
};

export default PuzzleDetails;
