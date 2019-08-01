import React, { useContext } from 'react';

import { Context } from '../../services/Context';

import './WheelsSelector.scss';

import wheel1 from '../../assets/img/png/wheel1.png';
import wheel2 from '../../assets/img/png/wheel2.png';
import wheel3 from '../../assets/img/png/wheel3.png';

export const Wheel = (props) => {
    const { id, hex, label, price } = props.wheel;
    const [MODELR, setMODELR] = useContext(Context);

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
        setMODELR(currentMODELR => ({
            ...currentMODELR, wheels_id: id
        }));
        setMODELR(currentMODELR => ({
            ...currentMODELR, wheels_price: price
        }));
        setMODELR(currentMODELR => ({
            ...currentMODELR, wheels_label: label
        }));
        console.log(MODELR);
    }

    return (
        <div className={MODELR.wheels_id === id ? 'wheel --selected' : 'wheel'}
            onClick={setWheelChoice}
            data-wheel_id={id}
            data-wheel_label={label}
            data-wheel_price={price}
        >
            <img src={selectedWheel()} alt="" />
            <p className={MODELR.wheels_id === id ? 'wheel--title --selected' : 'wheel--title'}>{label}</p>
            <p className={MODELR.wheels_id === id ? 'wheel--title --red --selected' : 'wheel--title --red'}>{price > 0 ? `+$${price}` : 'Included'}</p>
        </div>

    );
}
