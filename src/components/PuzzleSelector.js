import React, { Fragment, useContext } from 'react';
import { Button, Input, Space } from 'antd';
import { useHistory } from 'react-router-dom';
import PuzzleContext from '../context/puzzle/puzzleContext';

const { Search } = Input;

const PuzzleSelector = () => {
  const puzzleContext = useContext(PuzzleContext);
  const { puzzles, selectPuzzle, filterPuzzles, clearFilter } = puzzleContext;

  const history = useHistory();

  const onSearch = (regex) => {
    if (regex === '') {
      clearFilter();
      return;
    }
    filterPuzzles(regex);
  };

  const onGetRandom = () => {
    selectPuzzle(puzzles[Math.floor(Math.random() * puzzles.length)]);
    history.push('/details');
  };

  return (
    <Fragment>
      <Space>
        <Button type='primary' onClick={onGetRandom}>
          Random
        </Button>
        <Search
          enterButton
          allowClear
          placeholder='Search in puzzle titles and texts'
          style={{ width: '50vw' }}
          onSearch={onSearch}
        />
      </Space>
    </Fragment>
  );
};

export default PuzzleSelector;
