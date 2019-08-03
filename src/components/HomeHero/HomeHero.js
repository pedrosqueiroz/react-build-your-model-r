import React from 'react';
import { Link } from 'react-router-dom'

import './HomeHero.scss';

import hero_modelr from '../../assets/img/png/hero_modelr.png';
import right_arrow from '../../assets/img/svg/right-arrow.svg';

export default function HomeHero() {
    //Inicia o Context Loader, onde o fetch da API é feito
    //e os dados carregados no Context.
    return (
        <div className="container__hero">
            <div className="hero">
                <p className="hero__call--small">Build your</p>
                <h1 className="hero__call">
                    <span className="hero__call--model">
                        MODEL<span className="hero__call--r">R</span>
                    </span>
                </h1>
                <img className="hero_modelr" src={hero_modelr} alt="" />

            </div>
            <Link to="/order">
            <span className="hero_begin underline">
                BEGIN<img src={right_arrow} alt="Order now."/>
            </span>
            </Link>
        </div>
    );
}
