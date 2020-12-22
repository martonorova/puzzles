import React from 'react';
import { Layout } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import PuzzleState from './context/puzzle/PuzzleState';

import Home from './components/pages/Home';
import PuzzleDetails from './components/PuzzleDetails';

// console.log(content)

const App = () => {
  const { Header, Content, Footer } = Layout;

  return (
    <PuzzleState>
      <Layout className='App'>
        <Header
          style={{
            position: 'fixed',
            zIndex: 1,
            width: '100%',
            textAlign: 'start',
          }}
        >
          <h1 style={{ color: 'white' }}>Puzzles</h1>
        </Header>
        <Content style={{ padding: '50px 50px', marginTop: 64 }}>
          <Switch>
            <Route path='/details' component={PuzzleDetails} />
            <Route path='/' component={Home} />
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Puzzles 2020 made with <HeartOutlined />
        </Footer>
      </Layout>
    </PuzzleState>
  );
};

export default App;
