import React, { useContext } from 'react';

import { Color, COLORS } from './Color';
import { Context } from '../../services/Context';


import red from '../../assets/img/png/red.png';
import blue from '../../assets/img/png/blue.png';
import gray from '../../assets/img/png/gray.png';

export default function ColorSelector() {

  const [MODELR, setMODELR] = useContext(Context);

  const selectedColor = () => {
    if (MODELR.color_id === 4) {
      return red;
    } else if (MODELR.color_id === 5) {
      return blue;
    } else if (MODELR.color_id === 6) {
      return gray;
    } else return console.log('Error loading selected wheels.');

  }

  const { isLoading, colorList } = MODELR;
  return (
    <div className="Stage">
      <div className="Stage__half">
        <div className="Stage__half --stagePreview">
          <img
            src={selectedColor()}
            className="--imagePreview" alt=""
          />
          <div className="--paintSpecs">
            <h1>{MODELR.color_label === null ? 'Metalic Vermilion' : MODELR.color_label}</h1>
            <h1 className="--red">{MODELR.color_price > 0 ? `$${MODELR.color_price}` : 'Included'} </h1>
          </div>
        </div>
      </div>
      <div className="Stage__half">
        <div className="Stage__half --stageSet">
          <div className="stage-area-grid">
            <div className="stage-area-title">
              <div className="--stageSet--title">
                <h1>Color</h1>
                <p>{MODELR.color_description}</p>
              </div>
            </div>
            <div className="stage-area-body">
              <div className="--stageSet--content ColorRow">
                {
                  !isLoading ? (colorList.map((COLOR) => {
                    return (
                      <Color
                        key={COLOR.id}
                        color={COLOR}
                      />
                    )
                  })) : <h5>Loading...</h5>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
