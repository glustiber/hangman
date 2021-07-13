import React from 'react';

const Word = ({ answer, turnNum, correctPicks }) => {
    return (
        <div>
            {
                answer.split('').map((key, i) => {
                    console.log('i', i);
                    if (correctPicks.includes(answer[i])) {
                        return answer[i].toUpperCase() + " ";
                    } else {
                        return "__  ";
                    }
                })
            }
        </div>
    );
}

export default Word;