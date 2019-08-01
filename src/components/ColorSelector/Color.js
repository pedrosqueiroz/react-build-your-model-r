import React, { useContext } from 'react';

import { Context } from '../../services/Context';

import './Color.scss';

import redDot from '../../assets/img/png/red-dot.png';
import blueDot from '../../assets/img/png/blue-dot.png';
import grayDot from '../../assets/img/png/gray-dot.png';

const COLORS = [];

const Color = (props) => {
    const { id, hex, label, price } = props.color;
    const [MODELR, setMODELR] = useContext(Context);

    const selectedColorDot = colorChoice => {
        var color_id = id;
        if (color_id === 4) {
            return redDot;
        } else if (color_id === 5) {
            return blueDot;
        } else if (color_id === 6) {
            return grayDot;
        } else return console.log('Error loading selected color.');

    }
    const setColorChoice = colorChoice => {
        var id = parseInt(colorChoice.currentTarget.dataset.color_id);
        setMODELR(currentMODELR => ({
            ...currentMODELR, color_id: id
        }));
        setMODELR(currentMODELR => ({
            ...currentMODELR, color_price: price
        }));
        setMODELR(currentMODELR => ({
            ...currentMODELR, color_label: label
        }));
        console.log(MODELR);
    }

    return (
        <div className="ColorOption"
            onClick={setColorChoice}
            data-color_id={id}
            data-color_price={price}
            data-color_label={label}
            data-color_hex={hex}
        >
            <div className={MODELR.color_id === id ? 'ColorIsSelected --selected' : 'ColorIsSelected'}>
                <img src={selectedColorDot()} alt="" />
            </div>
        </div>
    )

}
export { Color, COLORS };