import React, { useState, createContext } from 'react';
import { ContextLoader } from './ContextLoader';

export const Context = createContext();

export const ContextProvider = ({ children }) => {


    const [CONTEXT, setCONTEXT] = useState(
        {
            modelr: {
                engine_id: 1
            },
            api_fetch_result: {},
            isLoading: true,
            current_stage: 0,
            last_stage: 0,
           }
    );

    return (
        <Context.Provider value={[CONTEXT, setCONTEXT]}>
            {children}
        </Context.Provider>
    );
}
