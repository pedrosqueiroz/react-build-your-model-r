import { useContext } from 'react';

import { api } from '../services/API';
import { Context } from './Context';

//funcao principal de carregamento de dados (api fetch) e carregamento do model r default.
export async function ContextLoader() {
    const [CONTEXT, setCONTEXT] = useContext(Context);

    console.log('API fetch & load iniciado...');

    const promiseFetchData = new Promise(
        function (resolve, reject) {
            if (CONTEXT.isLoading) {
                resolve(
                    setTimeout(() => { //Loader exibido na pagina Order vai ficar por pelo menos 1 segundo.
                        api() // arquivo API na pasta services.
                            .then(response => {
                                setCONTEXT(currentCONTEXT => ({
                                    ...currentCONTEXT = {
                                        api_fetch_result: response,
                                        isLoading: false,
                                        current_stage: 1,
                                        last_stage: 1,
                                        modelr: { //dados default do carro
                                            price: response.price,
                                            engine_id: response.engine.items[0].id,
                                            engine_type: response.engine.items[0].type,
                                            engine_kwh: response.engine.items[0].kwh,
                                            engine_range: response.engine.items[0].range,
                                            engine_price: response.engine.items[0].price,
                                            color_id: response.color.items[0].id,
                                            color_label: response.color.items[0].label,
                                            color_price: response.color.items[0].price,
                                            wheels_id: response.wheels.items[0].id,
                                            wheels_label: response.wheels.items[0].label,
                                            wheels_price: response.wheels.items[0].price,
                                        }
                                    }
                                }));
                            })
                    }, 1000)
                )
            } else {
                reject(
                    console.log('Error on promise_fetchData!')
                )
            }
        }
    );

    function fetchApiData() {
        promiseFetchData.then(
            function (sucesso) {
                //fetch concluido e resultado salvo no context.
                console.info('API fetch bem-sucedido.');
            }
        )
            .catch(function (falha) {
                //fetch nao concluido.
                console.error('Erro de fetch.', falha);
            });
    };
    //call da funcao de fetch.
    fetchApiData();
}