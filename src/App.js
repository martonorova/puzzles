import React from 'react';
import { Layout } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { blue } from '@ant-design/colors';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

import PuzzleState from './context/puzzle/PuzzleState';

import Home from './components/pages/Home';
import PuzzleDetails from './components/PuzzleDetails';

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
          <Link to='/'>
            <h1 style={{ color: 'white' }}>Puzzles</h1>
          </Link>
        </Header>
        <Content
          style={{
            padding: '25px 25px',
            marginTop: 64,
            backgroundColor: blue[2],
            minHeight: `calc(100vh - 128px)`
          }}
        >
          <Switch>
            <Route path='/details' component={PuzzleDetails} />
            <Route path='/' component={Home} />
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center', height: '64px' }}>
          Puzzles 2020 made with <HeartOutlined />
        </Footer>
      </Layout>
    </PuzzleState>
  );
};

export default App;
