import React, { useContext } from 'react';

import Loader from '../components/Loader/Loader';
import { Context } from '../services/Context';

import Header from '../components/Header/Header';
import { StatusBar } from '../components/StatusBar/StatusBar';
import { EngineSelector } from '../components/EngineSelector/EngineSelector';
import ColorSelector from '../components/ColorSelector/ColorSelector';
import WheelsSelector from '../components/WheelsSelector/WheelsSelector';
import Summary from '../components/Summary/Summary';

export const Order = () => {
    const [CONTEXT] = useContext(Context);

    const CurrentStage = () => {
        if (CONTEXT.current_stage === 1) {
            return <EngineSelector />
        } else if (CONTEXT.current_stage === 2) {
            return <ColorSelector />
        } else if (CONTEXT.current_stage === 3) {
            return <WheelsSelector />
        } else if (CONTEXT.current_stage === 4) {
            return <Summary />
        } else return (<div><h1>Reload the page or click in one of the car parts below :(</h1></div>)

    }
    return (
        <React.Fragment>
            {CONTEXT.isLoading === true ? <Loader/> : null}
            <Header/>
            {CurrentStage()}
            <StatusBar />
        </React.Fragment>
    );
}