import React from 'react';

let fillSpaces = (answer, turnNum, correctPicks) => {
    let wordOutput = [];

    if (turnNum === 0) {
        for (let i in answer) {
            wordOutput[i] = "__  ";
        }
    } else {
        for (let i in answer) {
            for (let x in correctPicks) {
                if (correctPicks.includes(answer[i] )) {
                    wordOutput[i] = answer[i].toUpperCase() + " ";
                } else {
                    wordOutput[i] = "__  ";
                }  
            }
        }
    }
    
    return wordOutput.join("  ");
}

let displayMisses = (incorrectPicks) => {
    return incorrectPicks.join(" ");
}

const GameProgress = ({ answer, lastLetterClicked, missesLeft, turnNum, correctPicks, incorrectPicks }) => {
    return (
        <div id='game-progress'>
            <p id='word'>Word:  {fillSpaces(answer, turnNum, correctPicks)}</p><br/>
            <p id='guess'>Guess: {lastLetterClicked}</p><br/>
            <p id='miss'>Misses: {displayMisses(incorrectPicks)}({missesLeft} left)</p><br/>
        </div>
    );
}

export default GameProgress;