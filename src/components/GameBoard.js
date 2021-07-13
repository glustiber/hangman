import React from 'react';
import DifficultySelector from './DifficultySelector';
import GameProgress from './GameProgress';
import LetterPicker from './LetterPicker';
import WelcomeScreen from './WelcomeScreen';
import GameResult from './GameResult';

const GameBoard = ({gameState, onNewGameClick, onDifficultySelect, answer, lastLetterClicked, correctPicks, incorrectPicks, onLetterClick, keyboard, gameResult}) => {
    let display;
    let displayGameBoard = () => {
        if (gameState === 'welcome') {
            return (
                <>
                    <WelcomeScreen />
                    <DifficultySelector 
                        onNewGameClick={onNewGameClick} 
                        onDifficultySelect={onDifficultySelect}
                        />
                </>
            ); 
        } else if (gameState === 'inProgress') {
            return (
                <>
                    <DifficultySelector 
                        onNewGameClick={onNewGameClick} 
                        onDifficultySelect={onDifficultySelect}
                        />
                    <GameProgress 
                        answer={answer}
                        lastLetterClicked={lastLetterClicked}
                        correctPicks={correctPicks}
                        incorrectPicks={incorrectPicks}
                        />
                    <LetterPicker 
                        onLetterClick={onLetterClick} 
                        keyboard={keyboard}
                        />;
                </>
            );
        } else if (gameState === 'end') {
            return (
                <>
                    <GameResult gameResult={gameResult}/>
                    <DifficultySelector 
                        onNewGameClick={onNewGameClick} 
                        onDifficultySelect={onDifficultySelect}
                        />
                </>
            );
        }
    }

    return (
        <div>
            {displayGameBoard()}
        </div>
    );
}

export default GameBoard;