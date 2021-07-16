import React from 'react';
import DifficultySelector from './DifficultySelector';

const GameEnd = ({result, answer, onDifficultySelect, onNewGameClick}) => {
    return (
        <div>
            <h1>GAME OVER!!!</h1>
            <h2>YOU {result.toUpperCase()}</h2>
            <h2>ANSWER: {answer.toUpperCase()}</h2>
            <DifficultySelector 
                onDifficultySelect={onDifficultySelect}
                onNewGameClick={onNewGameClick}
            />
        </div>
    );
}

export default GameEnd;