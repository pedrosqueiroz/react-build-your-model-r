import React, { useContext } from 'react';

import { Context } from '../../services/Context';
import { Wheel } from './Wheel';

import './WheelsSelector';

export default function WheelsSelector() {
  const [MODELR, setMODELR] = useContext(Context);
  const { isLoading, wheelList } = MODELR;
  return (
    <div className="Stage --WheelSelection">
      {
        !isLoading ? (wheelList.map((WHEEL) => {
          return (
            <Wheel
              key={WHEEL.id}
              wheel={WHEEL}
            />
          )
        })) : <h5>Loading...</h5>
      }
    </div>
  );
}
