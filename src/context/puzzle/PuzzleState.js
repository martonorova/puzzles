import React, { useReducer } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import html from '../../constants/kfki.html';

import openNotification from '../../utils/notification';

import {
  eltePuzzlesURL,
  kfkiPuzzlesURL,
} from '../../constants/scrapeConstants';

import { PUZZLES_LOADED, CLEAR_ERRORS, ERROR } from '../types';
import PuzzleContext from './puzzleContext';
import PuzzleReducer from './puzzleReducer';

const PuzzleState = (props) => {
  const initialState = {
    puzzles: [],
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(PuzzleReducer, initialState);

  const loadEltePuzzles = () => {};

  const loadKfkiPuzzles = () => {};

  const loadPuzzles = () => {
    try {
      // const headers = {
      //     'withCredentials': false,
      //     'Access-Control-Allow-Credentials': true
      // }

      // const kfkiPuzzles = axios.get(kfkiPuzzlesURL, headers);
      // console.log(kfkiPuzzles);

      const $ = cheerio.load(html);
      console.log($.html());
    } catch (err) {
      handleError(err);
    }
  };

  const handleError = (err) => {
    if (err.response) {
      dispatch({
        type: ERROR,
        payload: err.response.data.msg,
      });
      openNotification('error', err.response.data.msg);
    } else {
      dispatch({
        type: ERROR,
        payload: err.message,
      });
      openNotification('error', err.message);
    }
  };

  return (
    <PuzzleContext.Provider
      value={{
        puzzles: state.puzzles,
        loading: state.loading,
        error: state.loading,
        loadPuzzles,
      }}
    >
      {props.children}
    </PuzzleContext.Provider>
  );
};

export default PuzzleState;
