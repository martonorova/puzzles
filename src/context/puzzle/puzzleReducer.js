import { act } from 'react-dom/test-utils';
import {
  PUZZLES_LOADED,
  FILTER_PUZZLES,
  PUZZLE_SELECT,
  CLEAR_SELECTED_PUZZLE,
  CLEAR_PUZZLES,
  CLEAR_FILTER
} from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case PUZZLES_LOADED:
      return {
        ...state,
        loading: false,
        puzzles: action.payload,
      };
    case FILTER_PUZZLES:
      return {
        ...state,
        filteredPuzzles: action.payload,
      };
    case PUZZLE_SELECT:
      return {
        ...state,
        selectedPuzzle: action.payload,
      };
    case CLEAR_SELECTED_PUZZLE:
      return {
        ...state,
        selectedPuzzle: null
      }
    case CLEAR_PUZZLES:
      return {
        ...state,
        puzzles: [],
        filteredPuzzles: [],
        selectedPuzzle: null,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filteredPuzzles: []
      }
    default:
      return state;
  }
};
