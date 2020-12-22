import React, { useContext, useEffect } from 'react';
import { List, Card } from 'antd';
import { useHistory } from 'react-router-dom';
import PuzzleContext from '../context/puzzle/puzzleContext';

import puzzles from '../constants/kfki.json';

const PuzzleList = () => {
  const puzzleContext = useContext(PuzzleContext);

  const { puzzles, selectPuzzle, loading } = puzzleContext;
  const history = useHistory();

  const cutText = (text, length) => {
    if (text.length > length) {
      return text.substring(0, length) + '...';
    }
    return text;
  };

  const onPuzzleSelect = (puzzle) => {
    selectPuzzle(puzzle);
    history.push('/details');
  };

  return (
    <List
    loading={loading}
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 4,
        xxl: 4,
      }}
      dataSource={puzzles}
      renderItem={(item) => (
        <List.Item>
          <Card
            hoverable
            title={item.title}
            height='23vh'
            width='20vw'
            onClick={(e) => onPuzzleSelect(item)}
          >
            {cutText(item.text, 40)}
          </Card>
        </List.Item>
      )}
    />
  );
};

export default PuzzleList;
