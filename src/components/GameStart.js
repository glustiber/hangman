import React from 'react';
import GameTitle from './GameTitle';
import DifficultySelector from './DifficultySelector';

const GameStart = ({onDifficultySelect, onNewGameClick}) => {
    return (
        <div>
            <GameTitle />
            <p>Select a difficulty and click 'New Game' to start.</p>
            <DifficultySelector 
                onDifficultySelect={onDifficultySelect}
                onNewGameClick={onNewGameClick}
            />
        </div>
    );
}

export default GameStart;