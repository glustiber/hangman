import React from 'react';
import Letter from './Letter';

const LetterPicker = ({onLetterClick, correctPicks, incorrectPicks}) => {
    const keyboard = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let lettersPicked = correctPicks.concat(incorrectPicks);
    let lettersLeft = keyboard.filter(key => !lettersPicked.includes(key));

    return (
        <div id='keyboard'>
			<p>Choose a letter.</p><br/>
            {
                lettersLeft.map((key, i) => {
                    return (
                        <Letter 
                            key={lettersLeft[i]} 
                            id={lettersLeft[i]} 
                            onLetterClick={onLetterClick}
                            correctPicks={correctPicks}
                            incorrectPicks={incorrectPicks}    
                        />
                    )
                })
            }
        </div>
    );
}

export default LetterPicker;