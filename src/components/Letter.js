import React from 'react';

const Letter = ({ id, onLetterClick }) => {
    const letterClicked = (e) => {
        e.target.disabled = 'true';
    }
    
    return (
        <button 
            id={id} 
            className='alphabet' 
            onClick={ (e) => {
                onLetterClick(e.target.id);
                letterClicked(e);
            }} 
        >{id.toUpperCase()}</button>
    );
}

export default Letter;