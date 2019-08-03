import React, { useContext } from 'react';

import { Context } from '../../services/Context';
import { Wheel } from './Wheel';

import './WheelsSelector';

export default function WheelsSelector() {
  const [CONTEXT] = useContext(Context);
  const { isLoading } = CONTEXT;
  const wheelList = CONTEXT.api_fetch_result.wheels.items;
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
