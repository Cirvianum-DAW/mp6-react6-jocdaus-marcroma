import React from 'react';
import './Dau.css';
import Dice from './Dice';
import LuckyN from './LuckyN';

const App = () => {
  return (
    <div>
      <LuckyN numDaus={3} numPerEncertar={7} />
    </div>
  );
};

export default App;
