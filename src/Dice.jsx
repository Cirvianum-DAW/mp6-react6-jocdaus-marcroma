import React from 'react';
import './Dice.css';
import Dau from './Dau';

const Dice = ({ diceNumbers }) => {
    return (
        <div className='Dice'>
            {
                diceNumbers.map((e, i) => {
                    return <Dau key={i} value={e}/>
                })
            }
        </div>
    )
};

export default Dice;
