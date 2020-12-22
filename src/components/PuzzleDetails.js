import React, { Fragment, useContext } from 'react';
import openNotification from '../utils/notification';
import { useHistory } from 'react-router-dom';
import { PageHeader } from 'antd';

import PuzzleContext from '../context/puzzle/puzzleContext';

const PuzzleDetails = () => {
  const puzzleContext = useContext(PuzzleContext);
  const { selectedPuzzle, clearSelectedPuzzle } = puzzleContext;
  const history = useHistory();

  if (selectedPuzzle === null) {
    openNotification('error', 'Error while loading selected puzzle');
    history.push('/');
  }

  const onBack = () => {
    history.goBack();
  };

  return (
    <div>
      <PageHeader onBack={onBack} title={selectedPuzzle.title} />

      <p>{selectedPuzzle.text}</p>
    </div>
  );
};

export default PuzzleDetails;
