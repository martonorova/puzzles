import React, { useContext } from 'react';
import { List, Card } from 'antd';
import { useHistory } from 'react-router-dom';
import PuzzleContext from '../context/puzzle/puzzleContext';

import { orange } from '@ant-design/colors';

const PuzzleList = () => {
  const puzzleContext = useContext(PuzzleContext);

  const { puzzles, filteredPuzzles, selectPuzzle, loading } = puzzleContext;
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
      dataSource={filteredPuzzles.length !== 0 ? filteredPuzzles : puzzles}
      renderItem={(item) => (
        <List.Item>
          <Card
            hoverable
            title={item.title}
            height='23vh'
            width='20vw'
            onClick={(e) => onPuzzleSelect(item)}
            style={{
              borderRadius: '10px',
              backgroundColor:
                orange[Math.floor(Math.random() * (orange.length - 4))],
            }}
          >
            {cutText(item.text, 40)}
          </Card>
        </List.Item>
      )}
    />
  );
};

export default PuzzleList;
