import { useContext } from 'react';

import { api } from '../services/API';
import { Context } from './Context';

export async function ContextLoader() {
    const [MODELR, setMODELR] = useContext(Context);

    async function loadContext() {//chamada no fim desde componente
        if (MODELR.currentStage === 0) {

            fetchResult();

            await setMODELR(currentMODELR => ({
                ...currentMODELR, currentStage: 1
            }));
            await setMODELR(currentMODELR => ({
                ...currentMODELR, lastStage: 1
            }));

            await setMODELR(currentMODELR => ({
                ...currentMODELR, isLoading: false
            }));

            await setMODELR(currentMODELR => ({
                ...currentMODELR, engine_id: 1
            }));
            await setMODELR(currentMODELR => ({
                ...currentMODELR, engine_type: 'P'
            }));
            await setMODELR(currentMODELR => ({
                ...currentMODELR, engine_kwh: 75
            }));
            await setMODELR(currentMODELR => ({
                ...currentMODELR, engine_range: 275
            }));
            await setMODELR(currentMODELR => ({
                ...currentMODELR, color_id: 4
            }));
            await setMODELR(currentMODELR => ({
                ...currentMODELR, color_label: 'Thunderbolt Blue'
            }));
            await setMODELR(currentMODELR => ({
                ...currentMODELR, wheels_label: '20" Silver Metallic'
            }));
            await setMODELR(currentMODELR => ({
                ...currentMODELR, wheels_id: 7
            }));

            console.log(MODELR);
            loadEngineType();
        }

    }


    async function fetchResult() {
        // await api()
        //     .then(response => {
        //         setMODELR(currentMODELR => ({
        //             ...currentMODELR, fetchResult: response
        //         }))
        //     })
        loadPrice();
        loadDescription();
        loadEngines();
        loadColors();
        loadWheels();
        return;

    }
    async function loadEngineType() {
        for (let i = 0; i < MODELR.engineList.length; i++) {
            if (MODELR.engine_id === null) {
                return (
                    await setMODELR(currentMODELR => ({
                        ...currentMODELR,
                        engine_type: MODELR.engineList[i].type,
                        engine_kwh: MODELR.engineList[i].kwh
                    }))
                )
            }
        }
    }

    async function loadPrice() {
        await api()
            .then(response => {
                setMODELR(currentMODELR => ({
                    ...currentMODELR, price: response.price
                }));
            })
        return;
    }
    async function loadDescription() {
        await api()
            .then(response => {
                setMODELR(currentMODELR => ({
                    ...currentMODELR, color_description: response.color.description
                }));
            })
        return;
    }

    // async function loadPrice() {
    //     await setMODELR(currentMODELR => ({
    //         ...currentMODELR, price: MODELR.fetchResult.price
    //     }))
    // }

    async function loadEngines() {
        await api()
            .then(response => response)
            .then(response => {
                setMODELR(currentMODELR => ({
                    ...currentMODELR, engineList: response.engine.items
                }));
            })
        return;
    }

    function loadColors() {
        api()
            .then(response => response)
            .then(response => {
                setMODELR(currentMODELR => ({
                    ...currentMODELR, colorList: response.color.items
                }));
            })
        return;
    }

    function loadWheels() {
        api()
            .then(response => response)
            .then(response => {
                setMODELR(currentMODELR => ({
                    ...currentMODELR, wheelList: response.wheels.items
                }));
                setMODELR(currentMODELR => ({
                    ...currentMODELR, wheels_id: 7
                }));
            })
        return;
    }

    loadContext();
}
