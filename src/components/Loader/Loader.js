import React from 'react';

import './Loader.css';

import { ContextLoader } from '../../services/ContextLoader';

export default function Loader() {
    ContextLoader();
    return (
        /* Creditos ao loading.io pelo icone do loader. */
        <div className="lds-css ng-scope">
            <div style={{
                'width': '100%',
                'height': '100%'
            }}
                className="lds-double-ring">
                <div></div>
                <div></div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div>
                    </div></div>
            </div>
        </div>
    );
}
