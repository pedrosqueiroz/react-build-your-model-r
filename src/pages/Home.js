import React, { usecontext } from 'react';
import Loader from '../components/Loader/Loader';
import HomeHero from '../components/HomeHero/HomeHero';
import HomeFooter from '../components/HomeFooter/HomeFooter';

export default function Home() {
    return (
        <div>
            <HomeHero />
            <HomeFooter />
        </div>
    );
}
