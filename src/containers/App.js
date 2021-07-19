import React, {Component} from 'react';
import GameStart from '../components/GameStart';
import GameBoard from '../components/GameBoard';
import GameEnd from '../components/GameEnd';
import './App.css';

const words = {
    easy: ["dog","art","bird","pig","paw","pint","poor","pain","fire","well"],
    medium: ["needle","diaper","pencil","doctor","paint","laptop","paper","liver","brain","table"],
    hard: ["fizzled","grizzly","jacuzzi","biscuit","jacuzzi","pancake","blizzard","bathroom","birthday","attorney"]
}

// Make it so cant have same answer twice in a row?
// Clean up render method?
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            incorrectPicks: [],
            correctPicks: [],
            lastLetterPicked: '',
            difficulty: 'easy',
            answer: '',       
        }      
    }
    
    onLetterClick = (letter) => {
        let {answer} = this.state;

        this.setState({lastLetterClicked: letter});
        
        answer.includes(letter.toLowerCase()) ? this.addCorrectPick(letter) : this.addIncorrectPick(letter);
    }

    checkForLoser = () => this.state.incorrectPicks.length >= 6 ? true : false;

    checkForWinner = () => {
        let {answer, correctPicks} = this.state;
        let answerArray = answer.split('');
        return answerArray.every(i => correctPicks.includes(i)) ? true : false;
    }

    addCorrectPick = (letter) => {
        this.setState(prevState => ({
            correctPicks: [...prevState.correctPicks, letter]
        }))
    }

    addIncorrectPick = (letter) => {
        this.setState(prevState => ({
            incorrectPicks: [...prevState.incorrectPicks, letter]
        }))
    }

    onDifficultySelect = (e) => {
        this.setState({difficulty: e.target.value});
    }

    onNewGameClick = () => {
        this.setState({answer: this.getRandomWord() });
        this.setState({lastLetterClicked: ''});
        this.setState({correctPicks: []});
        this.setState({incorrectPicks: []});
    }

    getRandomWord = () => {
        let wordsArray = words[this.state.difficulty];
        return wordsArray[Math.floor(Math.random() * wordsArray.length)];
    }

    render() {
        let {answer, correctPicks, incorrectPicks} = this.state;
        let lettersPicked = correctPicks.concat(incorrectPicks);

        if (lettersPicked.length === 0 && answer.length === 0) {
            return (
                <GameStart 
                    onDifficultySelect={this.onDifficultySelect} 
                    onNewGameClick={this.onNewGameClick} 
                    difficulty={this.state.difficulty}
                />
            );
        }
        else if (this.checkForWinner()) {
            return (
                <GameEnd 
                    result="win" 
                    answer={answer}
                    onDifficultySelect={this.onDifficultySelect}
                    onNewGameClick={this.onNewGameClick} 
                    difficulty={this.state.difficulty}   
                />
            );
        } else if (this.checkForLoser()) {
            return (
                <GameEnd 
                    result="lose" 
                    answer={answer}
                    onDifficultySelect={this.onDifficultySelect}
                    onNewGameClick={this.onNewGameClick}  
                    difficulty={this.state.difficulty}
                />
            );
        } else {
            return (
                <GameBoard 
                    answer={answer}
                    lastLetterPicked={this.state.lastLetterPicked}
                    correctPicks={this.state.correctPicks}
                    incorrectPicks={this.state.incorrectPicks}
                    onLetterClick={this.onLetterClick}
                    onDifficultySelect={this.onDifficultySelect}
                    onNewGameClick={this.onNewGameClick}
                    difficulty={this.state.difficulty}
                />
            ); 
        }                    
    }
}

export default App;