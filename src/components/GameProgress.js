import React from 'react';

var wordOutput = [];

let fillSpaces = (answer, turnNum, correctPicks) => {
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

//blankSpaces to initialize, fillInBlanks on click???

const GameProgress = ({ answer, lastLetterClicked, missesLeft, turnNum, correctPicks }) => {
    return (
        <div id='game-progress'>
            <p id='word'>Word:  {fillSpaces(answer, turnNum, correctPicks)}</p><br/>
            <p id='guess'>Guess: {lastLetterClicked}</p><br/>
            <p id='miss'>Misses: ({missesLeft} left)</p><br/>
        </div>
    );
}

export default GameProgress;