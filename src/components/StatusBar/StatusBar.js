import React, { useContext } from 'react';

import { Context } from '../../services/Context';
import toUSD from '../../services/Utils';
import './StatusBar.scss';

import rightArrow from '../../assets/img/svg/right-arrow.svg';
import redDot from '../../assets/img/png/red-dot.png';
import blueDot from '../../assets/img/png/blue-dot.png';
import grayDot from '../../assets/img/png/gray-dot.png';
import wheel1 from '../../assets/img/png/wheel1.png';
import wheel2 from '../../assets/img/png/wheel2.png';
import wheel3 from '../../assets/img/png/wheel3.png';

export const StatusBar = () => {
  const [CONTEXT, setCONTEXT] = useContext(Context);

  const nextStage = () => {
    if (CONTEXT.current_stage > (CONTEXT.last_stage - 1)) {
      setCONTEXT(currentCONTEXT => ({
        ...currentCONTEXT, last_stage: (CONTEXT.last_stage + 1)
      }));
    }
    setCONTEXT(currentCONTEXT => ({
      ...currentCONTEXT, current_stage: (CONTEXT.current_stage + 1)
    }));
  }

  const setStageEngine = () => {
    setCONTEXT(currentCONTEXT => ({
      ...currentCONTEXT, current_stage: 1
    }));
  }

  const setStageColor = () => {
    setCONTEXT(currentCONTEXT => ({
      ...currentCONTEXT, current_stage: 2
    }));
  }

  const setStageWheels = () => {
    setCONTEXT(currentCONTEXT => ({
      ...currentCONTEXT, current_stage: 3
    }));
  }

  const selectedColor = () => {
    if (CONTEXT.modelr.color_id === 4) {
      return redDot;
    } else if (CONTEXT.modelr.color_id === 5) {
      return blueDot;
    } else if (CONTEXT.modelr.color_id === 6) {
      return grayDot;
    } else return console.log('Error loading selected color.');
  }

  const selectedWheels = () => {
    if (CONTEXT.modelr.wheels_id === 7) {
      return wheel1;
    } else if (CONTEXT.modelr.wheels_id === 8) {
      return wheel2;
    } else if (CONTEXT.modelr.wheels_id === 9) {
      return wheel3;
    } else return console.log('Error loading selected wheels.');
  }
  return (
    <div className="statusBar">
      <div className="statusBar__priceSlice">
        <span className="statusBar__item --currentPrice">
          ${toUSD(CONTEXT.modelr.price + CONTEXT.modelr.engine_price + CONTEXT.modelr.color_price + CONTEXT.modelr.wheels_price)}
        </span>
        <span className="statusBar__item --modelLabel">
          Model R
      </span>
      </div>
      <span className="statusBar__partsSlice">
        <span className="statusBar__item --selectedEngine --isClickable" onClick={setStageEngine}>
          {CONTEXT.modelr.engine_kwh}<span className="--red">{CONTEXT.modelr.engine_type}</span>
        </span>

        <span className="statusBar__item --selectedColor --isClickable" onClick={setStageColor}>
          {CONTEXT.last_stage > 1 ? <img src={selectedColor()} alt="Color selection." /> : null}
        </span>

        <span className="statusBar__item --selectedWheel --isClickable" onClick={setStageWheels}>
          {CONTEXT.last_stage > 2 ? <img src={selectedWheels()} alt="Wheels selection." /> : null}
        </span>
      </span>
      <div className="statusBar__nextSlice">
        <span className="statusBar__item --next" onClick={nextStage} >
          <div className="underline">Next<img src={rightArrow} alt="Next stage button." /></div>
        </span>
      </div>     
    </div>
  );
}
