import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import FAQ from '../FAQ/FAQ';
import Reviews from '../Reviews/Reviews';
import Working from '../Working/Working';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Working></Working>
            <Reviews></Reviews>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;