import React from 'react';
import { Button } from 'antd';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import PuzzleState from './context/puzzle/PuzzleState';

import Home from './components/pages/Home';

// console.log(content)

const App = () => (
  <PuzzleState>
    <div className='App'>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
      
    </div>
  </PuzzleState>
);

export default App;
