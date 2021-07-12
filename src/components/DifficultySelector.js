import React from 'react';

const DifficultySelector = () => {
    return (
        <div>
            <p>Difficulty:</p>
            <select name='difficulty' id='difficulty'>
                <option value='easy'>Easy</option>
                <option value='hard'>Hard</option>
            </select>
            <button type='submit' id="new-game">New Game</button>
        </div>
    );
}

export default DifficultySelector;