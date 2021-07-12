import React, {Component} from 'react';
import GameTitle from '../components/GameTitle';
import HangmanDisplay from '../components/HangmanDisplay';
import DifficultySelector from '../components/DifficultySelector';
import GameProgress from '../components/GameProgress';
import LetterPicker from '../components/LetterPicker';
// import ErrorBoundary from '../components/ErrorBoundary';
// import AddRobot from '../components/AddRobot';
import './App.css';

const easyWords = ["dog","art","bird","pig","paw","pint","poor","pain","fire","well"];
const hardWords = ["needle","diaper","pencil","doctor","paint","laptop","paper","liver","brain","table"];
let misses = 0;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastLetterClicked: '',
            answer: 'fire', 
            numMisses: 0,
            missesLeft: 6,
            turnNum: 0,
            correctPicks: []
        }
    }

    onLetterClick = (letter) => {
        const { answer } = this.state;
        let { numMisses, missesLeft, turnNum, correctPicks } = this.state;

        this.setState({lastLetterClicked: letter});

        if( answer.includes(letter.toLowerCase()) ) {
            //console.log('includes', letter);
            this.setState({correctPicks: [...correctPicks, ...letter.toLowerCase()] })

        } else {
            misses += 1;
            this.setState({numMisses: misses});
            this.setState({missesLeft: missesLeft - 1});
        }
        // is it ok to update this directly? or should make another variable?
        this.setState({turnNum: turnNum + 1})
        console.log(correctPicks[0]);
    }

    render() {
        // const {gameState} = this.state;
        // let gameDisplay;

        // // what if click new game in middle of game
        // if (gameState === 'start') {
        //     gameDisplay = <GameStart />;
        // } else if (gameState === 'inProgress') {
        //     gameDisplay = <GameBoard />;
        // } else if (gameState === 'end') {
        //     gameDisplay = <GameEnd />;
        // }

        return (
            // If gameState = start, display GameStart
            // If gameState = inProgress, display GameBoard
            // If gameState = end, display gameEnd
            // Conditional rendering - maybe do this in gameboard
            <div>
                <GameTitle />
                <HangmanDisplay />
                <DifficultySelector />
                <GameProgress 
                    answer={this.state.answer}
                    lastLetterClicked={this.state.lastLetterClicked}
                    missesLeft={this.state.missesLeft}
                    turnNum={this.state.turnNum}
                    correctPicks={this.state.correctPicks}
                />
                <LetterPicker 
                    onLetterClick={this.onLetterClick} 
                />
            </div>
        );    
                            
    }
}

export default App;