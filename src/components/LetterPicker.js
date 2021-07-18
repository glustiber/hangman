import React from 'react';
import Letter from './Letter';

const LetterPicker = ({onLetterClick, correctPicks, incorrectPicks}) => {
    const keyboard = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    return (
        <div id='keyboard'>
			<p>Choose a letter.</p><br/>
            {
                keyboard.map((key, i) => {
                    return (
                        <Letter id={keyboard[i]} 
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