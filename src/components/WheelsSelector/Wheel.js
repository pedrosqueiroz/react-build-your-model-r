import React, { useContext } from 'react';

import { Context } from '../../services/Context';
import toUSD from '../../services/Utils';
import './WheelsSelector.scss';

import wheel1 from '../../assets/img/png/wheel1.png';
import wheel2 from '../../assets/img/png/wheel2.png';
import wheel3 from '../../assets/img/png/wheel3.png';

export const Wheel = (props) => {
    const { id, label, price } = props.wheel;
    const [CONTEXT, setCONTEXT] = useContext(Context);

    const selectedWheel = wheelChoice => {
        var wheels_id = id;
        if (wheels_id === 7) {
            return wheel1;
        } else if (wheels_id === 8) {
            return wheel2;
        } else if (wheels_id === 9) {
            return wheel3;
        } else return console.log('Error loading wheels.');

    }

    const setWheelChoice = WheelChoice => {
        var id = parseInt(WheelChoice.currentTarget.dataset.wheel_id);
        setCONTEXT(currentCONTEXT => ({
            ...currentCONTEXT, modelr: {
                price: currentCONTEXT.modelr.price,
                engine_id: currentCONTEXT.modelr.engine_id,
                engine_type: currentCONTEXT.modelr.engine_type,
                engine_kwh: currentCONTEXT.modelr.engine_kwh,
                engine_range: currentCONTEXT.modelr.engine_range,
                engine_price: currentCONTEXT.modelr.engine_price,
                color_id: currentCONTEXT.modelr.color_id,
                color_label: currentCONTEXT.modelr.color_label,
                color_price: currentCONTEXT.modelr.color_price,
                wheels_id: id,
                wheels_label: label,
                wheels_price: price
            }
        }));
    }

    return (
        <div className={CONTEXT.modelr.wheels_id === id ? 'wheel --selected' : 'wheel'}
            onClick={setWheelChoice}
            data-wheel_id={id}
            data-wheel_label={label}
            data-wheel_price={price}
        >
            <img src={selectedWheel()} className="--isClickable" alt="" />
            <p className={CONTEXT.modelr.wheels_id === id ? 'wheel--title --selected' : 'wheel--title'}>{label}</p>
            <p className={CONTEXT.modelr.wheels_id === id ? 'wheel--title --red --selected' : 'wheel--title --red'}>{price > 0 ? `+$${toUSD(price)}` : 'Included'}</p>
        </div>

    );
}
