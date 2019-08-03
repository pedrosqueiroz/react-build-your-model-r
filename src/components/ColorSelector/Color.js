import React, { useContext } from 'react';

import { Context } from '../../services/Context';

import './Color.scss';

import redDot from '../../assets/img/png/red-dot.png';
import blueDot from '../../assets/img/png/blue-dot.png';
import grayDot from '../../assets/img/png/gray-dot.png';

const Color = (props) => {
    const { id, hex, label, price } = props.color;
    const [CONTEXT, setCONTEXT] = useContext(Context);

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
        setCONTEXT(currentCONTEXT => ({
            ...currentCONTEXT, modelr: {  
                price: currentCONTEXT.modelr.price,             
                color_id: id,
                color_label: label,
                color_price: price,
                wheels_id: currentCONTEXT.modelr.wheels_id,
                wheels_label: currentCONTEXT.modelr.wheels_label,
                wheels_price: currentCONTEXT.modelr.wheels_price,
                engine_id: currentCONTEXT.modelr.engine_id,
                engine_type: currentCONTEXT.modelr.engine_type,
                engine_kwh: currentCONTEXT.modelr.engine_kwh,
                engine_range: currentCONTEXT.modelr.engine_range,
                engine_price: currentCONTEXT.modelr.engine_price
            }
        }));
        console.log(CONTEXT);
    }

    return (
        <div className="ColorOption"
            onClick={setColorChoice}
            data-color_id={id}
            data-color_price={price}
            data-color_label={label}
            data-color_hex={hex}
        >
            <div className={CONTEXT.modelr.color_id === id ? 'ColorIsSelected --selected' : 'ColorIsSelected'}>
                <img src={selectedColorDot()} alt="" />
            </div>
        </div>
    )

}
export { Color };