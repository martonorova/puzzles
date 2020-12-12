import { PUZZLES_LOADED } from '../types';


// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case PUZZLES_LOADED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
