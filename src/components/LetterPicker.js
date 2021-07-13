import React from 'react';
import Key from './Key';

const LetterPicker = ({onLetterClick, keyboard}) => {
    return (
        <div id='keyboard'>
			<p>Choose a letter.</p><br/>
            {
                keyboard.map((key, i) => {
                    return (
                        <Key id={keyboard[i]} onLetterClick={onLetterClick}/>
                    )
                })
            }
        </div>
    );
}

export default LetterPicker;