import React from 'react';

const letterClicked = (e) => {
    console.log(e.target.id);
    //onLetterClick('A')
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