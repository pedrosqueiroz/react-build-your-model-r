import React, { useContext } from 'react';

import { ContextLoader } from '../services/ContextLoader';

import { Context } from '../services/Context';
import { StatusBar } from '../components/StatusBar';
import { EngineSelector } from '../components/EngineSelector';
import ColorSelector from '../components/ColorSelector/ColorSelector';
import WheelsSelector from '../components/WheelsSelector/WheelsSelector';
import Summary from '../components/Summary/Summary';

export const Order = () => {
    ContextLoader();
    const [MODELR, setMODELR] = useContext(Context);

    const CurrentStage = () => {
        if (MODELR.currentStage === 1) {
            return <EngineSelector />
        } else if (MODELR.currentStage === 2) {
            return <ColorSelector />
        } else if (MODELR.currentStage === 3) {
            return <WheelsSelector />
        } else if (MODELR.currentStage === 4) {
            return <Summary />
        } else return (<div><h1>Reload the page or click in one of the car parts below :(</h1></div>)

    }
    return (
        <React.Fragment>
            {CurrentStage()}
            <StatusBar />
        </React.Fragment>
    );
}