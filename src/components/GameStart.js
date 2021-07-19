import React from 'react';
import GameTitle from './GameTitle';
import DifficultySelector from './DifficultySelector';

const GameStart = ({onDifficultySelect, onNewGameClick, difficulty}) => {
    return (
        <div>
            <GameTitle />
            <p>Select a difficulty and click 'New Game' to start.</p>
            <DifficultySelector 
                onDifficultySelect={onDifficultySelect}
                onNewGameClick={onNewGameClick}
                difficulty={difficulty}
            />
        </div>
    );
}

export default GameStart;