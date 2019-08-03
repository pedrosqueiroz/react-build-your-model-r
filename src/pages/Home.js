import React from 'react';
import Header from '../components/Header/Header';
import HomeHero from '../components/HomeHero/HomeHero';
import HomeFooter from '../components/HomeFooter/HomeFooter';

export default function Home() {
    return (
        <div>
            <Header />
            <HomeHero />
            <HomeFooter />
        </div>
    );
}
