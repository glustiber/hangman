import React from 'react';
import GameTitle from './GameTitle';
import HangmanDisplay from './HangmanDisplay';
import DifficultySelector from './DifficultySelector';
import GameProgress from './GameProgress';
import LetterPicker from './LetterPicker';

const GameBoard = ({answer, lastLetterPicked, correctPicks, incorrectPicks, onLetterClick, onDifficultySelect, onNewGameClick, difficulty}) => {
    // const answerArray = answer.split('');

    // const incorrectPicks = () => {
    //     return lettersPicked.filter(letter => !answerArray.includes(letter));
    // }

    // const correctPicks = () => {
    //     return answerArray.filter(letter => lettersPicked.includes(letter));
    // }

    return (
        <div>
            <GameTitle />
            <HangmanDisplay incorrectPicks={incorrectPicks}/>
            <DifficultySelector 
                onDifficultySelect={onDifficultySelect}
                onNewGameClick={onNewGameClick}
                difficulty={difficulty}
            />
            <GameProgress 
                answer={answer}
                lastLetterPicked={lastLetterPicked}
                correctPicks={correctPicks}
                incorrectPicks={incorrectPicks}
            /> 
            <LetterPicker 
                onLetterClick={onLetterClick} 
                correctPicks={correctPicks}
                incorrectPicks={incorrectPicks}
            />
        </div>
    );
}

export default GameBoard;