import React, { useContext, useEffect } from 'react'

import PuzzleContext from '../../context/puzzle/puzzleContext';

const Home = () => {

    const puzzleContext = useContext(PuzzleContext);

    const { loadPuzzles } = puzzleContext;

    useEffect(() => {
        loadPuzzles();
    })




    return (
        <div>
            <h1>HOME</h1>
        </div>
    )
}

export default Home
