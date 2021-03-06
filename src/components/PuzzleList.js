import React, { useContext } from 'react';
import { List, Card } from 'antd';
import { useHistory } from 'react-router-dom';
import PuzzleContext from '../context/puzzle/puzzleContext';

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
        md: 2,
        lg: 3,
        xl: 4,
        xxl: 6,
      }}
      dataSource={filteredPuzzles.length !== 0 ? filteredPuzzles : puzzles}
      renderItem={(item) => (
        <List.Item>
          <Card
            hoverable
            title={item.title}
            onClick={(e) => onPuzzleSelect(item)}
            style={{
              borderRadius: '10px',
              maxWidth: 'none',
            }}
          >
            <p>{cutText(item.text, 40)}</p>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default PuzzleList;
