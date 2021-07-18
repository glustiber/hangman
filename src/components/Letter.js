import React from 'react';

const Letter = ({ id, onLetterClick, correctPicks, incorrectPicks }) => {
    const letterClicked = (e) => {
        e.target.disabled = 'true';
    }

    let isDisabled;

    if (correctPicks.length === 0 && incorrectPicks.length === 0) {
        isDisabled = false;
    }
    
    return (
        <button 
            id={id} 
            className='alphabet' 
            onClick={ (e) => {
                onLetterClick(e.target.id);
                letterClicked(e);
            }}
            disabled={isDisabled}
        >{id.toUpperCase()}</button>
    );
}

export default Letter;