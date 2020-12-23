import React, { useReducer } from 'react';
import kfkiPuzzles from '../../constants/kfki.json';

import openNotification from '../../utils/notification';

import {
  PUZZLES_LOADED,
  PUZZLE_SELECT,
  CLEAR_PUZZLES,
  ERROR,
  CLEAR_SELECTED_PUZZLE,
  CLEAR_FILTER,
  FILTER_PUZZLES,
} from '../types';
import PuzzleContext from './puzzleContext';
import PuzzleReducer from './puzzleReducer';

const PuzzleState = (props) => {
  const initialState = {
    puzzles: [],
    filteredPuzzles: [],
    selectedPuzzle: null,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(PuzzleReducer, initialState);

  const loadPuzzles = () => {
    setLoading();

    try {
      dispatch({
        type: PUZZLES_LOADED,
        payload: kfkiPuzzles,
      });
    } catch (err) {
      handleError(err);
    }
  };

  const filterPuzzles = (regex) => {
    dispatch({
      type: FILTER_PUZZLES,
      payload: regex,
    });
  };

  const selectPuzzle = (puzzle) => {
    dispatch({
      type: PUZZLE_SELECT,
      payload: puzzle,
    });
  };

  const clearSelectedPuzzle = () => {
    dispatch({
      type: CLEAR_SELECTED_PUZZLE,
    });
  };

  const clearPuzzles = () => {
    dispatch({
      type: CLEAR_PUZZLES,
    });
  };

  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER,
    });
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

  const setLoading = () => {
    state.loading = true;
  };

  return (
    <PuzzleContext.Provider
      value={{
        puzzles: state.puzzles,
        filteredPuzzles: state.filteredPuzzles,
        selectedPuzzle: state.selectedPuzzle,
        clearSelectedPuzzle,
        loading: state.loading,
        error: state.loading,
        loadPuzzles,
        filterPuzzles,
        selectPuzzle,
        clearPuzzles,
        clearFilter,
      }}
    >
      {props.children}
    </PuzzleContext.Provider>
  );
};

export default PuzzleState;
