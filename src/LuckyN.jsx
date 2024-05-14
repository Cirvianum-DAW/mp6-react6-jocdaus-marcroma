import React, { useState } from 'react';
import Dice from './Dice';
import { getTirades, sumNumbersInArray } from './utils';

function LuckyN({ numDaus, numPerEncertar }) {
  const [dice, setDice] = useState(getTirades(numDaus));

  // Variable que comprova si la suma dels daus és igual al número a encertar.
  const isWinner = sumNumbersInArray(dice) == numPerEncertar;

  return (
    <main>
      <h1 className='mt-3 text-center text-xl text-blue-500'>La suma ha de donar: {numPerEncertar}.</h1>

      <Dice dice={dice} />

      {isWinner ? (
        <h2 className='text-center text-2xl text-green-500'>HAS ENCERTAT!</h2>
      ) : (
        <button
          className='block mx-auto mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'
          onClick={() => setDice(getTirades(numDaus))}
        >
          Tira els daus
        </button>
      )        
      }
    </main>
    
  );
}

export default LuckyN;
