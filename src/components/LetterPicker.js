import React from 'react';

const LetterPicker = ({onLetterClick}) => {
    return (
        <div id='keyboard'>
			<p>Choose a letter.</p><br/>
            <button id='a' className='alphabet' onClick={ () => onLetterClick('A') }>A</button>
            <button id='b' className='alphabet' onClick={ () => onLetterClick('B') }>B</button>
            <button id='c' className='alphabet' onClick={ () => onLetterClick('C') }>C</button>
            <button id='d' className='alphabet' onClick={ () => onLetterClick('D') }>D</button>
            <button id='e' className='alphabet' onClick={ () => onLetterClick('E') }>E</button>
            <button id='f' className='alphabet' onClick={ () => onLetterClick('F') }>F</button>
            <button id='g' className='alphabet' onClick={ () => onLetterClick('G') }>G</button>
            <button id='h' className='alphabet' onClick={ () => onLetterClick('H') }>H</button>
            <button id='i' className='alphabet' onClick={ () => onLetterClick('I') }>I</button>
            <button id='j' className='alphabet' onClick={ () => onLetterClick('J') }>J</button>
            <button id='k' className='alphabet' onClick={ () => onLetterClick('K') }>K</button>
            <button id='l' className='alphabet' onClick={ () => onLetterClick('L') }>L</button>
            <button id='m' className='alphabet' onClick={ () => onLetterClick('M') }>M</button>
            <button id='n' className='alphabet' onClick={ () => onLetterClick('N') }>N</button>
            <button id='o' className='alphabet' onClick={ () => onLetterClick('O') }>O</button>
            <button id='p' className='alphabet' onClick={ () => onLetterClick('P') }>P</button>
            <button id='q' className='alphabet' onClick={ () => onLetterClick('Q') }>Q</button>
            <button id='r' className='alphabet' onClick={ () => onLetterClick('R') }>R</button>
            <button id='s' className='alphabet' onClick={ () => onLetterClick('S') }>S</button>
            <button id='t' className='alphabet' onClick={ () => onLetterClick('T') }>T</button>
            <button id='u' className='alphabet' onClick={ () => onLetterClick('U') }>U</button>
            <button id='v' className='alphabet' onClick={ () => onLetterClick('V') }>V</button>
            <button id='w' className='alphabet' onClick={ () => onLetterClick('W') }>W</button>
            <button id='x' className='alphabet' onClick={ () => onLetterClick('X') }>X</button>
            <button id='y' className='alphabet' onClick={ () => onLetterClick('Y') }>Y</button>
            <button id='z' className='alphabet' onClick={ () => onLetterClick('Z') }>Z</button>
		</div>
    );
}

export default LetterPicker;