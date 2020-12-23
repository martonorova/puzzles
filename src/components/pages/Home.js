import React, { useContext, useEffect, Fragment } from 'react';
import { Divider } from 'antd';

import PuzzleContext from '../../context/puzzle/puzzleContext';

import PuzzleList from '../PuzzleList';
import PuzzleSelector from '../PuzzleSelector';

const Home = () => {
  const puzzleContext = useContext(PuzzleContext);

  const { loadPuzzles, clearSelectedPuzzle } = puzzleContext;

  useEffect(() => {
    clearSelectedPuzzle();
    loadPuzzles();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <PuzzleSelector />
      <Divider />
      <PuzzleList />
    </Fragment>
  );
};

export default Home;
