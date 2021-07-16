import React from 'react';
import images from '../images/index.js';

const HangmanDisplay = ({incorrectPicks}) => {
    let displayHangman = (incorrectPicks) => {
        const imageNames = Object.keys(images);
    
        if (incorrectPicks.length !== 0) {
            return <img src={images[ imageNames[incorrectPicks.length] ]} alt='hangman'/>;
        } else {
            return <img src={images.miss0} alt='hangman'/>;
        }
    }

    return ( displayHangman(incorrectPicks) );
}

export default HangmanDisplay;