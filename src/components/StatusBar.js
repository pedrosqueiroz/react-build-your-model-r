import React, { useContext } from 'react';

import { Context } from '../services/Context';

import '../assets/scss/StatusBar.scss';

import rightArrow from '../assets/img/svg/right-arrow.svg';
import redDot from '../assets/img/png/red-dot.png';
import blueDot from '../assets/img/png/blue-dot.png';
import grayDot from '../assets/img/png/gray-dot.png';
import wheel1 from '../assets/img/png/wheel1.png';
import wheel2 from '../assets/img/png/wheel2.png';
import wheel3 from '../assets/img/png/wheel3.png';

export const StatusBar = () => {
  const [MODELR, setMODELR] = useContext(Context);

  const nextStage = () => {
    setMODELR(currentMODELR => ({
      ...currentMODELR, currentStage: (MODELR.currentStage + 1)
    }));
    setMODELR(currentMODELR => ({
      ...currentMODELR, lastStage: (MODELR.lastStage + 1)
    }));
    console.log(MODELR);
  }
  /** stage navigation **/
  const setStageEngine = () => {
    setMODELR(currentMODELR => ({
      ...currentMODELR, currentStage: 1
    }));
  }
  const setStageColor = () => {
    setMODELR(currentMODELR => ({
      ...currentMODELR, currentStage: 2
    }));
  }
  const setStageWheels = () => {
    setMODELR(currentMODELR => ({
      ...currentMODELR, currentStage: 3
    }));
  }
  /** selected color **/
  const selectedColor = () => {
    if (MODELR.color_id === 4) {
      return redDot;
    } else if (MODELR.color_id === 5) {
      return blueDot;
    } else if (MODELR.color_id === 6) {
      return grayDot;
    } else return console.log('Error loading selected color.');

  }
  /** selected wheels **/
  const selectedWheels = () => {
    if (MODELR.wheels_id === 7) {
      return wheel1;
    } else if (MODELR.wheels_id === 8) {
      return wheel2;
    } else if (MODELR.wheels_id === 9) {
      return wheel3;
    } else return console.log('Error loading selected wheels.');

  }
  return (
    <div className="statusBar">
      <div className="statusBar__priceSlice">
        <span className="statusBar__item --currentPrice">
          ${(MODELR.price + MODELR.engine_price + MODELR.color_price + MODELR.wheels_price).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
        </span>

        <span className="statusBar__item --modelLabel">
          Model R
      </span>
      </div>

      <span className="statusBar__partsSlice">

        <span className="statusBar__item --selectedEngine" onClick={setStageEngine}>
          {MODELR.engine_kwh}<span className="--red">{MODELR.engine_type}</span>
        </span>

        <span className="statusBar__item --selectedColor" onClick={setStageColor}>
          {MODELR.lastStage > 1 ? <img src={selectedColor()} alt="Color selection." /> : null}
        </span>

        <span className="statusBar__item --selectedWheel" onClick={setStageWheels}>
          {MODELR.lastStage > 2 ? <img src={selectedWheels()} alt="Wheels selection." /> : null}
        </span>

      </span>

      <div className="statusBar__nextSlice">
        <span className="statusBar__item --next" onClick={nextStage} >
          <div className="underline"> Next<img src={rightArrow} alt="Next stage button." /></div>
        </span>
      </div>

    </div>
  );
}
