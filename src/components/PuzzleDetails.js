import React, { useContext } from 'react'

import PuzzleContext from '../context/puzzle/puzzleContext';

const PuzzleDetails = () => {

    const puzzleContext = useContext(PuzzleContext);
    const { selectedPuzzle } = puzzleContext;


    return (
        <div>
            <h1>Puzzle Details</h1>
            <h1>
                {selectedPuzzle.title}
            </h1>
        </div>
    )
}

export default PuzzleDetails
