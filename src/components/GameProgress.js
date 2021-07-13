import React from 'react';
import Word from './Word';

let displayMisses = (incorrectPicks) => {
    return incorrectPicks.join(" ").toUpperCase();
}

const GameProgress = ({ answer, lastLetterClicked, correctPicks, incorrectPicks }) => {
    return (
        <div id='game-progress'>
            <p id='word'>Word:</p>
            <Word answer={answer} correctPicks={correctPicks} />
            <p id='guess'>Guess: {lastLetterClicked.toUpperCase()}</p><br/>
            <p id='miss'>Misses: {displayMisses(incorrectPicks)} ({6 - incorrectPicks.length} left)</p><br/>
        </div>
    );
}

export default GameProgress;