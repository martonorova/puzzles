import React, { useRecucer } from 'react';

import { PUZZLES_LOADED } from '../types'
import PuzzleContext from './puzzleContext';
import puzzleReducer from './puzzleReducer';

const PuzzleState = (props) => {
    const initialState = {
        puzzles: [],
        loading: false,
        error: null
    }

    const [state, dispatch] =  useRecucer(puzzleReducer, initialState);



    return <PuzzleContext.Provider
        value={{
            puzzles: state.puzzles,
            loading: state.loading,
            error: state.loading
        }}
        >
            {props.children}
        </PuzzleContext.Provider>
}

export default PuzzleState;