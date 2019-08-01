import React from 'react';

import './HomeFooter.scss';
 
export default function HomeFooter() {
    return (
        <div className="home__footer">
            <div className="footer__stat">
                <span className="footer__stat__value">
                    <h1 className="footer__stat__number">2.5</h1><p className="footer__stat__unit">s</p>
                </span>
                <span className="footer__stat__desc">
                    From 0 to 100
                </span>
            </div>
            <div className="footer__stat">
                <span className="footer__stat__value">
                    <h1 className="footer__stat__number">420</h1><p className="footer__stat__unit">mi</p>
                </span>
                <span className="footer__stat__desc">
                    Miles range
                </span>
            </div>
            <div className="footer__stat">
                <span className="footer__stat__value">
                    <h1 className="footer__stat__number">250</h1><p className="footer__stat__unit">mp/h</p>
                </span>
                <span className="footer__stat__desc">
                    Max speed
                </span>
            </div>
        </div>
    );
}
