import React from 'react';

const Letter = ({ id, onLetterClick }) => {
    
    return (
        <button 
            id={id} 
            className='alphabet' 
            onClick={ (e) => onLetterClick(e.target.id) }
        >{id.toUpperCase()}</button>
    );
}

export default Letter;