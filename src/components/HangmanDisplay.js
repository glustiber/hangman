import React from 'react';
import images from '../images/index.js';

// for loop cleaner...
let displayHangman2 = (incorrectPicks) => {
    const imageNames = Object.keys(images);

    if (incorrectPicks.length != 0) {
        return <img src={images[ imageNames[incorrectPicks.length] ]} alt='hangman'/>;
    } else {
        return <img src={images.miss0} alt='hangman'/>;
    }
}

// let displayHangman = (incorrectPicks) => {
//     switch(incorrectPicks.length) {
//         case 1:
//             return <img src={images.miss1} alt='hangman'/>;
//             break;
//         case 2:
//             return <img src={images.miss2} alt='hangman'/>;
//             break;
//         case 3:
//             return <img src={images.miss3} alt='hangman'/>;
//             break;
//         case 4:
//             return <img src={images.miss4} alt='hangman'/>;
//             break;
//         case 5:
//             return <img src={images.miss5} alt='hangman'/>;
//             break;
//         case 6:
//             return <img src={images.miss6} alt='hangman'/>;
//             break;
//         default:
//             return <img src={images.miss0} alt='hangman'/>;
//     }
// }

const HangmanDisplay = ({incorrectPicks}) => {
    return ( displayHangman2(incorrectPicks) );
}

export default HangmanDisplay;