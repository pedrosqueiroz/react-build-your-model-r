import React, { useContext } from 'react';

import { Context } from '../../services/Context';

import './EngineSelector.scss';

const Engine = (props) => {
    const { id, type, kwh, range, price } = props.engine;
    const [CONTEXT, setCONTEXT] = useContext(Context);

    const setEngine = engineModel => {
        var id = parseInt(engineModel.currentTarget.dataset.engine_id);
        setCONTEXT(currentCONTEXT => ({
            ...currentCONTEXT, modelr: {
                price: currentCONTEXT.modelr.price,
                engine_id: id,
                engine_type: type,
                engine_kwh: kwh,
                engine_range: range,
                engine_price: price,
                color_id: currentCONTEXT.modelr.color_id,
                color_label: currentCONTEXT.modelr.color_label,
                color_price: currentCONTEXT.modelr.color_price,
                wheels_id: currentCONTEXT.modelr.wheels_id,
                wheels_label: currentCONTEXT.modelr.wheels_label,
                wheels_price: currentCONTEXT.modelr.wheels_price,
            }
        }));
        console.log(CONTEXT);
    }
    return (
        <div className={price > 0 ? 'EngineOption --mb-0' : 'EngineOption'}>
            <div
                className={CONTEXT.modelr.engine_id === id ? 'engineSelector --selected' : 'engineSelector'}
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
                    className={CONTEXT.modelr.engine_id == id ? 'engineSelector__check --selected' : 'engineSelector__check'}
                ></span>
            </div>
            <div className="EngineOption__Label">
                <span className={CONTEXT.modelr.engine_id == id ? 'engineSelector--priceLabel --selected' : 'engineSelector--priceLabel'}>
                    {!price == 0 ? '+$' : null}{!price == 0 ? (price).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") : null}
                </span>
            </div>
        </div>
    )

}
export { Engine };