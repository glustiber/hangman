import React from 'react';

const GameProgress = () => {
    return (
        <div id='game-progress'>
            <p id="word">Word:  </p><br/>
            <p id="guess">Guess: </p><br/>
            <p id="miss">Misses: </p><br/>
        </div>
    );
}

export default GameProgress;