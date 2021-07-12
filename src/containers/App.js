import React, {Component} from 'react';
import GameTitle from '../components/GameTitle';
import HangmanDisplay from '../components/HangmanDisplay';
import DifficultySelector from '../components/DifficultySelector';
import GameProgress from '../components/GameProgress';
import LetterPicker from '../components/LetterPicker';
// import ErrorBoundary from '../components/ErrorBoundary';
// import AddRobot from '../components/AddRobot';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastLetterClicked: ''
        }
    }

    onLetterClick = (letter) => {
        this.setState({lastLetterClicked: letter}, () => {
            console.log(this.state.lastLetterClicked);
        });
        
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
                <GameProgress />
                <LetterPicker onLetterClick={this.onLetterClick} />
            </div>
        );    
                            
    }
}

export default App;