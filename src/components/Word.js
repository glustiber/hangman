import React from 'react';

const Word = ({ answer, correctPicks }) => {
    return (
        <div>
            {
                answer.split('').map((key, i) => {
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