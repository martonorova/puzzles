import React, { useContext, useEffect } from 'react';
import { Space } from 'antd';

import PuzzleContext from '../../context/puzzle/puzzleContext';

import PuzzleList from '../PuzzleList';
import PuzzleSelector from '../PuzzleSelector';

const Home = () => {
  const puzzleContext = useContext(PuzzleContext);

  const { loadPuzzles, clearSelectedPuzzle } = puzzleContext;

  useEffect(() => {
    clearSelectedPuzzle();
    loadPuzzles();
  }, []);

  return (
    <Space direction='vertical' size='large'>
      <PuzzleSelector />
      <PuzzleList />
    </Space>
  );
};

export default Home;
