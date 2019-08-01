import React from 'react';

import './Loader.css';

export default function Loader() {
    return (
        /* Creditos ao loading.io pelo loader. */
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
