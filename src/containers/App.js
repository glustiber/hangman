import React, {Component} from 'react';
import GameTitle from '../components/GameTitle';
import HangmanDisplay from '../components/HangmanDisplay';
import DifficultySelector from '../components/DifficultySelector';
import GameProgress from '../components/GameProgress';
import LetterPicker from '../components/LetterPicker';
import './App.css';

const easyWords = ["dog","art","bird","pig","paw","pint","poor","pain","fire","well"];
const hardWords = ["needle","diaper","pencil","doctor","paint","laptop","paper","liver","brain","table"];
let misses = 0;
const answer = 'fire';
const keyboard = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; 

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastLetterClicked: '',      
            numMisses: 0,               
            turnNum: 0,         // change to bool firstTurn or gameStart or something?
            correctPicks: [],
            incorrectPicks: []        
        }      
    }

    onLetterClick = (letter) => {
        let { turnNum, correctPicks, incorrectPicks } = this.state;

        this.setState({lastLetterClicked: letter});

        if( answer.includes(letter.toLowerCase()) ) {
            this.setState({correctPicks: [...correctPicks, ...letter.toLowerCase()] })

        } else {
            misses += 1;
            this.setState({numMisses: misses});
            this.setState({incorrectPicks: [...incorrectPicks, ...letter] })
        }
        this.setState({turnNum: turnNum + 1})

    }

    render() {
        return (
            <div>
                <GameTitle />
                <HangmanDisplay />
                <DifficultySelector />
                <GameProgress 
                    answer={answer}
                    lastLetterClicked={this.state.lastLetterClicked}
                    numMisses={this.state.numMisses}
                    turnNum={this.state.turnNum}
                    correctPicks={this.state.correctPicks}
                    incorrectPicks={this.state.incorrectPicks}
                />
                <LetterPicker 
                    onLetterClick={this.onLetterClick} 
                    keyboard={keyboard}
                />
            </div>
        );    
                            
    }
}

export default App;