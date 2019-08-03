import React, { useContext } from 'react';

import './EngineSelector.scss';

import { Engine  } from './Engine';
import { Context } from '../../services/Context';

import engine1 from '../../assets/img/png/engine1.png';
import engine2 from '../../assets/img/png/engine2.png';



export const EngineSelector = (props) => {
    const [CONTEXT, setCONTEXT] = useContext(Context);

    const { isLoading } = CONTEXT;
    const engineList = CONTEXT.api_fetch_result.engine.items;
    return (
        <div className="Stage">
            <div className="Stage__half">
                <div className="Stage__half --stagePreview">
                    <img
                        src={CONTEXT.modelr.engine_id >= 2 ? engine2 : engine1}
                        className="--imagePreview" alt=""
                    />
                </div>
            </div>
            <div className="Stage__half">
                <div className="Stage__half --stageSet">
                    <div className="--stageSet--title">
                        <h1>Engine</h1>
                    </div>
                    {
                        !isLoading ? (engineList.map((ENGINE) => {
                            return (
                                <Engine
                                    key={ENGINE.id}
                                    engine={ENGINE}
                                />
                            )
                        })) : <h5>Loading...</h5>
                    }
                </div>
            </div>
        </div>
    )
}
