import { PUZZLES_LOADED, PUZZLE_SELECT } from '../types';


// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case PUZZLES_LOADED:
      return {
        ...state,
        loading: false,
      };
    case PUZZLE_SELECT:
      return {
        ...state,
        selectedPuzzle: action.payload
      }
    default:
      return state;
  }
};
