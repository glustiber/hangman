import React from 'react';
import Word from './Word';

// let displayMisses = (incorrectPicks) => {
//     return incorrectPicks.join(" ").toUpperCase();
// }

// //let displayMisses = incorrectPicks => incorrectPicks.join(" ").toUpperCase();

const GameProgress = ({ answer, lastLetterPicked, correctPicks, incorrectPicks }) => {
    let displayMisses = incorrectPicks => incorrectPicks.join(" ").toUpperCase();

    // const lastLetterClicked = lettersPicked.pop();
    return (
        <div id='game-progress'>
            <Word answer={answer} correctPicks={correctPicks} />
            <p id='guess'>Guess: {lastLetterPicked}</p><br/>
            <p id='miss'>Misses: {displayMisses(incorrectPicks)} ({6 - incorrectPicks.length} left)</p><br/>
        </div>
    );
}

export default GameProgress;