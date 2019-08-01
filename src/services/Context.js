import React, { useState, createContext } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {


    const [MODELR, setMODELR] = useState(
        {
            isLoading: true,
            currentStage: 0,
            lastStage: 0,
            price: 0,
            engine_id: 0,
            engine_kwh: null,
            engine_type: null,
            engine_price: 0,
            color_id: 0,
            color_price: 0,
            color_label: null,
            color_description: null,
            wheels_id: 0,
            wheels_label: null,
            wheels_price: 0,
            engineList: [],
            colorList: [],
            wheelList: [],
            fetchResult: []
        }
    );




    return (
        <Context.Provider value={[MODELR, setMODELR]}>
            {children}
        </Context.Provider>
    );
}
