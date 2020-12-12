import React from 'react';
import { Button } from 'antd';
import './App.css';

import { content } from './scraping/scraper';

console.log(content)

const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
);

export default App;
