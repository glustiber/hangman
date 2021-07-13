import React from 'react';

const letterClicked = (e) => {
    e.target.disabled = 'true';
}

const Key = ({ id, onLetterClick }) => {
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

export default Key;