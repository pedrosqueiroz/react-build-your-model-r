import React, { useContext } from 'react';

import { Context } from '../../services/Context';

import './Summary.scss'

import finalRed from '../../assets/img/png/final-red.png';
import finalBlue from '../../assets/img/png/final-blue.png';
import finalGray from '../../assets/img/png/final-gray.png';


export default function Summary() {
    const [MODELR, setMODELR] = useContext(Context);
    var finalPrice = (MODELR.price + MODELR.engine_price + MODELR.color_price + MODELR.wheels_price)

    const finalCar = () => {
        if (MODELR.color_id === 4) {
          return finalRed;
        } else if (MODELR.color_id === 5) {
          return finalBlue;
        } else if (MODELR.color_id === 6) {
          return finalGray;
        } else return console.log('Error loading selected wheels.');
    
      }
    return (
        <div className="Stage">
            <div className="Stage__half --stagePreview">
                <img src={finalCar()} className="--imagePreview" alt=""/>
            </div>
            <div className="Stage__half --stageSet">
                <div className="Summary">
                    <h1 className="summaryTitle">Your Model R</h1>
                    <span className="listItem">
                        <p>Starting price</p><p className="itemPrice">${MODELR.price}</p>
                    </span>
                    <hr className="lightHr" />
                    <span className="listItem">
                        <p>
                            {MODELR.engine_type}
                            {` - `}
                            {MODELR.engine_kwh}
                            {` - `}
                            {MODELR.engine_range} miles range
                        </p>
                        <p className="itemPrice">{MODELR.engine_price > 0 ? `+$${MODELR.engine_price}` : 'Included'}</p>
                    </span>
                    <span className="listItem">
                        <p>{MODELR.color_label} Paint</p><p className="itemPrice">{MODELR.color_price > 0 ? `+$${MODELR.color_price}` : 'Included'}</p>
                    </span>
                    <span className="listItem">
                        <p>{MODELR.wheels_label}</p><p className="itemPrice">{MODELR.wheels_price > 0 ? `+$${MODELR.wheels_price}` : 'Included'}</p>
                    </span>
                    <hr className="lightHr" />
                    <span className="listItem --lg">
                        <p>Final price</p><p className="itemPrice">${finalPrice}</p>
                    </span>
                </div>
            </div>
        </div>
    );
}
