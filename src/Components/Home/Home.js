import React from 'react';
import Banner from '../Banner/Banner';
import Bar from '../Noname/Bar';
import Category from '../Category/Category';
import FlashSale from '../FlashSale/FlashSale';
import Trademark from '../Trademark/Trademark';
import MallHome from '../MallHome/MallHome';
import TrendSearch from '../TrendSearch/TrendSearch';
import ProductHome from './ProductHome';

const Home = () => {
    return (
        <div>
            <Banner />
            <Bar />
            <Category />
            <FlashSale />
            <Trademark />
            <MallHome />
            <TrendSearch />
            <ProductHome />
        </div>
    )
}

export default Home
