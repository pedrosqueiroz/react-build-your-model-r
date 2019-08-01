import React, { useContext } from 'react';

import { Context } from '../services/Context';

import '../assets/scss/EngineStage.scss';

const ENGINES = []

const Engine = (props) => {
    const { id, type, kwh, range, price } = props.engine;
    const [MODELR, setMODELR] = useContext(Context);

    const setEngine = engineModel => {
        var id = parseInt(engineModel.currentTarget.dataset.engine_id);
        setMODELR(currentMODELR => ({
            ...currentMODELR, engine_id: id
        }));
        setMODELR(currentMODELR => ({
            ...currentMODELR, engine_type: type
        }));
        setMODELR(currentMODELR => ({
            ...currentMODELR, engine_kwh: kwh
        }));
        setMODELR(currentMODELR => ({
            ...currentMODELR, engine_range: range
        }));
        setMODELR(currentMODELR => ({
            ...currentMODELR, engine_price: price
        }));
        console.log(MODELR);
    }

    return (
        <div className={price > 0 ? 'EngineOption --mb-0' : 'EngineOption'}>
            <div
                className={MODELR.engine_id === id ? 'engineSelector --selected' : 'engineSelector'}
                onClick={setEngine}
                data-engine_id={id}
                data-engine_type={type}
                data-engine_kwh={kwh}
                data-engine_price={price}
            >
                <span className="engineSelector__engine --spanFlex">
                    {kwh}
                    <p className=" --redEngineSpan">
                        {type}
                    </p>
                </span>
                <span className="engineSelector__kwh --spanFlex">
                    {kwh}
                    <p className="--labelSpan">kwh</p>
                </span>
                <span className="engineSelector__miles --spanFlex">
                    {range}
                    <p className="--labelSpan">miles range</p>
                </span>
                <span
                    className={MODELR.engine_id === id ? 'engineSelector__check --selected' : 'engineSelector__check'}
                ></span>
            </div>
            <div className="EngineOption__Label">
                <span className={MODELR.engine_id === id ? 'engineSelector--priceLabel --selected' : 'engineSelector--priceLabel'}>
                    {!price == 0 ? '+$' : null}{!price == 0 ? (price).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") : null}
                </span>
            </div>
        </div>
    )

}
export { Engine, ENGINES };