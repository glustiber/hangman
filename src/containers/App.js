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
            correctPicks: [],
            incorrectPicks: [],
            keyboard: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        }
    }

    onLetterClick = (letter) => {
        const { answer } = this.state;
        let { numMisses, missesLeft, turnNum, correctPicks, incorrectPicks } = this.state;

        this.setState({lastLetterClicked: letter});

        if( answer.includes(letter.toLowerCase()) ) {
            //console.log('includes', letter);
            this.setState({correctPicks: [...correctPicks, ...letter.toLowerCase()] })

        } else {
            misses += 1;
            this.setState({numMisses: misses});
            this.setState({missesLeft: missesLeft - 1});
            this.setState({incorrectPicks: [...incorrectPicks, ...letter] })
        }

        this.setState({turnNum: turnNum + 1})
        console.log('letter id', letter);
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
                    incorrectPicks={this.state.incorrectPicks}
                />
                <LetterPicker 
                    onLetterClick={this.onLetterClick} 
                    keyboard={this.state.keyboard}
                />
            </div>
        );    
                            
    }
}

export default App;