import React, {Component} from 'react';
import GameTitle from '../components/GameTitle';
import HangmanDisplay from '../components/HangmanDisplay';
import GameBoard from '../components/GameBoard';
import './App.css';

const easyWords = ["dog","art","bird","pig","paw","pint","poor","pain","fire","well"];
const mediumWords = ["needle","diaper","pencil","doctor","paint","laptop","paper","liver","brain","table"];
const hardWords = ["fizzled","grizzly","jacuzzi","biscuit","jacuzzi","pancake","blizzard","bathroom","birthday","attorney"];
const keyboard = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; 

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastLetterClicked: '',
            correctPicks: [],
            incorrectPicks: [],
            //newGame: true,
            answer: '',
            difficulty: '',
            gameState: 'welcome',
            gameResult: ''       
        }      
    }

    onLetterClick = (letter) => {
        let { answer, correctPicks, incorrectPicks } = this.state;

        //this.setState({newGame: false});
        this.setState({lastLetterClicked: letter});

        if( answer.includes(letter.toLowerCase()) ) {
            this.setState({correctPicks: [...correctPicks, ...letter.toLowerCase()] })

        } else {
            this.setState({incorrectPicks: [...incorrectPicks, ...letter] })
        }

        // if incorrectPicks.length === 6 GAME OVER
        // if correctPicks - checkForWinner function that compares arrays
        // if( this.checkForWinner() || this.checkForLoser() ) {
        //     this.setState({gameState: 'end'});
        // }
        if(this.checkForWinner()) {
            this.setState({gameResult: 'win'});
            this.setState({gameState: 'end'});
        }
        if(this.checkForLoser()) {
            this.setState({gameResult: 'loss'});
            this.setState({gameState: 'end'});
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
        //console.log(answerArray);
        
        if(answerArray.every(i => correctPicks.includes(i))) {
            this.setState({gameResult: 'win'});
            return true;
        } else {
            return false;
        }
    }

    onDifficultySelect = (e) => {
        this.setState({difficulty: e.target.value});
    }

    // this should reset everything.. clear arrays, last click, etc
    onNewGameClick = () => {
        //this.setState({newGame: true});
        this.setState({answer: this.getRandomWord() });
        this.setState({gameState: 'inProgress'});
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
        return (
            <div>
                <GameTitle />
                <HangmanDisplay incorrectPicks={this.state.incorrectPicks} />
                <GameBoard 
                    gameState={this.state.gameState} 
                    answer={this.state.answer}
                    lastLetterClicked={this.state.lastLetterClicked}
                    correctPicks={this.state.correctPicks}
                    incorrectPicks={this.state.incorrectPicks}
                    onLetterClick={this.onLetterClick} 
                    keyboard={keyboard}
                    onNewGameClick={this.onNewGameClick} 
                    onDifficultySelect={this.onDifficultySelect}
                    gameResult={this.gameResult}
                />
            </div>
        );    
                            
    }
}

export default App;