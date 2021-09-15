import React, { useState } from 'react';
import Status from './components/Status';
import Condition from './components/Condition';
import FuelCost from './components/FuelCost';
import Buttons from './components/Buttons';
import './App.css';

export default function App() {
  const [active, setActive] = useState('status');

  const changeActive = (param) => {
    setActive(param);
  }

  return (
    <>
      <Buttons changeActive={changeActive} />
      <div className='divApp'>
        {active == 'status' &&
          <Status />
        }
        {active == 'condition' &&
          <Condition />
        }
        {active == 'cost' &&
          <FuelCost />
        }
      </div>
    </>

  )
}
