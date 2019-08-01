import React, { useContext } from 'react';

import '../assets/scss/EngineStage.scss';

import { Engine  } from './Engine';
import { Context } from '../services/Context';

import engine1 from '../assets/img/png/engine1.png';
import engine2 from '../assets/img/png/engine2.png';



export const EngineSelector = (props) => {
    const [MODELR, setMODELR] = useContext(Context);

    const { isLoading, engineList } = MODELR;

    return (
        <div className="Stage">
            <div className="Stage__half">
                <div className="Stage__half --stagePreview">
                    <img
                        src={MODELR.engine_id >= 2 ? engine2 : engine1}
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
