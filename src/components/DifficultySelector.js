import React from 'react';

const DifficultySelector = ({onNewGameClick, onDifficultySelect}) => {
    return (
        <div>
            <p>Difficulty:</p>
            <select name='difficulty' id='difficulty' onChange={onDifficultySelect} >
                <option value='easy'>Easy (3-4 letters)</option>
                <option value='medium'>Medium (5-6 letters)</option>
                <option value='hard'>Hard (7-8 letters)</option>
            </select>
            <button type='submit' id="new-game" onClick={onNewGameClick}>New Game</button>
        </div>
    );
}

export default DifficultySelector;