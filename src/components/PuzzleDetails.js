import React, { Fragment, useContext } from 'react';
import openNotification from '../utils/notification';
import { useHistory } from 'react-router-dom';
import { PageHeader, Button, Popconfirm, Modal } from 'antd';

import PuzzleContext from '../context/puzzle/puzzleContext';

const PuzzleDetails = () => {
  const puzzleContext = useContext(PuzzleContext);
  const { selectedPuzzle } = puzzleContext;
  const history = useHistory();
  if (selectedPuzzle === null) {
    openNotification('error', 'Error while loading selected puzzle');
    history.push('/');
  }

  const onBack = () => {
    history.goBack();
  };

  const showModal = () => {
      Modal.info({
          title: selectedPuzzle.title,
          content: (
          <p>{selectedPuzzle.solution}</p>
          ),
          onOk: () => {}
      });
  }

  return (
    <Fragment>
      <PageHeader onBack={onBack} title={selectedPuzzle.title} />

      <p>{selectedPuzzle.text}</p>
      <Popconfirm
        title='Are you sure to reveal the mystery?'
        onConfirm={showModal}
        okText='Yes'
        cancelText='No'
      >
        <Button type='primary'>Show solution</Button>
      </Popconfirm>
    </Fragment>
  );
};

export default PuzzleDetails;
