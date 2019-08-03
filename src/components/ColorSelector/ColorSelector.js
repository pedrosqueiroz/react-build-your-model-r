import React, { useContext } from 'react';

import { Color } from './Color';
import { Context } from '../../services/Context';
import toUSD from '../../services/Utils';

import red from '../../assets/img/png/red.png';
import blue from '../../assets/img/png/blue.png';
import gray from '../../assets/img/png/gray.png';

export default function ColorSelector() {

  const [CONTEXT] = useContext(Context);

  const selectedColor = () => {
    if (CONTEXT.modelr.color_id === 4) {
      return red;
    } else if (CONTEXT.modelr.color_id === 5) {
      return blue;
    } else if (CONTEXT.modelr.color_id === 6) {
      return gray;
    } else return console.log('Error loading selected wheels.');

  }

  const { isLoading } = CONTEXT;
  const colorList = CONTEXT.api_fetch_result.color.items;
  return (
    <div className="Stage">
      <div className="Stage__half">
        <div className="Stage__half --stagePreview">
          <img
            src={selectedColor()}
            className="--imagePreview" alt=""
          />
          <div className="--paintSpecs">
            <h1>{CONTEXT.modelr.color_label === null ? 'Metalic Vermilion' : CONTEXT.modelr.color_label}</h1>
            <h1 className="--red">{CONTEXT.modelr.color_price > 0 ? `$${toUSD(CONTEXT.modelr.color_price)}` : 'Included'} </h1>
          </div>
        </div>
      </div>
      <div className="Stage__half">
        <div className="Stage__half --stageSet">
          <div className="stage-area-grid">
            <div className="stage-area-title">
              <div className="--stageSet--title">
                <h1>Color</h1>
                <p>{CONTEXT.api_fetch_result.color.description}</p>
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
