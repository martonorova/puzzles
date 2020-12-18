import React from 'react';
import { List, Card } from 'antd';

import puzzles from '../constants/kfki.json';

const PuzzleList = () => {
  const data = puzzles;

  const cutText = (text, length) => {
      if (text.length > length) {
          return text.substring(0, length) + '...'
      }
      return text;
  }

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 4,
        xxl: 4,
      }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card hoverable title={item.title} height='23vh' width='20vw'>
            {cutText(item.text, 40)}
          </Card>
        </List.Item>
      )}
    />
  );
};

export default PuzzleList;
