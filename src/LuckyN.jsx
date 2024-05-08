import React, { useState } from 'react';
import Dice from './Dice';
import { getTirades, sumNumbersInArray } from './utils';

function LuckyN({ numDaus, numPerEncertar }) {
  const [dice, setDice] = useState(getTirades(numDaus));

  // Variable que comprova si la suma dels daus és igual al número a encertar.
  const isWinner = sumNumbersInArray(dice) == numPerEncertar;

  return (
    <div>
      <Dice />
    </div>
  );
}

export default LuckyN;
