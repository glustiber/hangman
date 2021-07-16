import React, {Component} from 'react';
import GameStart from '../components/GameStart';
import GameBoard from '../components/GameBoard';
import GameEnd from '../components/GameEnd';
import './App.css';

// MOVE INSIDE COMPONENT
const easyWords = ["dog","art","bird","pig","paw","pint","poor","pain","fire","well"];
const mediumWords = ["needle","diaper","pencil","doctor","paint","laptop","paper","liver","brain","table"];
const hardWords = ["fizzled","grizzly","jacuzzi","biscuit","jacuzzi","pancake","blizzard","bathroom","birthday","attorney"]; 
//const answer = 'fire';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lettersPicked: [],
            incorrectPicks: [],
            correctPicks: [],
            lastLetterPicked: '',
            difficulty: '',
            answer: '',       
        }      
    }
    
    onLetterClick = (letter) => {
        let {answer, correctPicks, incorrectPicks} = this.state;

        this.setState({lastLetterClicked: letter});

        this.setState(prevState => ({
            lettersPicked: [...prevState.lettersPicked, letter]
        }))
        
        if( answer.includes(letter.toLowerCase())) {
            //this.setState({correctPicks: [...correctPicks, ...letter.toLowerCase()]})
            this.addCorrectPick(correctPicks, letter);
        } else {
            //this.setState({incorrectPicks: [...incorrectPicks, ...letter] })
            this.addIncorrectPick(incorrectPicks, letter);
        }
    }

    checkForLoser = () => {
        let {incorrectPicks} = this.state;
        if(incorrectPicks.length >= 6) {
            //this.setState({gameResult: 'loss'});
            return true;
        } else {
            return false;
        }
    }

    checkForWinner = () => {
        let {answer, correctPicks} = this.state;
        let answerArray = answer.split('');
        
        if(answerArray.every(i => correctPicks.includes(i))) {
            //this.setState({gameResult: 'win'});
            return true;
        } else {
            return false;
        }
    }

    addCorrectPick = (correctPicks, letter) => {
        this.setState(prevState => ({
            correctPicks: [...prevState.correctPicks, letter]
        }))
    }

    addIncorrectPick = (incorrectPicks, letter) => {
        this.setState(prevState => ({
            incorrectPicks: [...prevState.incorrectPicks, letter]
        }))
    }

    onDifficultySelect = (e) => {
        this.setState({difficulty: e.target.value});
    }

    // this should reset everything.. clear arrays, last click, etc
    onNewGameClick = () => {
        //this.setState({newGame: true});
        this.setState({answer: this.getRandomWord() });
        this.setState({lastLetterClicked: ''});
        this.setState({lettersPicked: []});
        this.setState({correctPicks: []});
        this.setState({incorrectPicks: []});
    }

    getRandomWord = () => {
        let {difficulty} = this.state;
        switch (difficulty) {
            case 'hard':
                return hardWords[Math.floor(Math.random() * hardWords.length)];
                break;
            case 'medium':
                return mediumWords[Math.floor(Math.random() * mediumWords.length)];
                break;
            default:
                return easyWords[Math.floor(Math.random() * easyWords.length)];
        }
    }

    render() {
        let {answer} = this.state;

        if (this.state.lettersPicked.length === 0 && answer.length === 0) {
            return (
                <GameStart 
                    onDifficultySelect={this.onDifficultySelect} 
                    onNewGameClick={this.onNewGameClick} 
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
                />
            );
        } else if (this.checkForLoser()) {
            return (
                <GameEnd 
                    result="lose" 
                    answer={answer}
                    onDifficultySelect={this.onDifficultySelect}
                    onNewGameClick={this.onNewGameClick}  
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
                />
            ); 
        }                    
    }
}

export default App;