import React from 'react';
import DataTrendSearch from '../../Data/DataTrendSearch';

import '../../Css/trendSearch.css';

const TrendSearch = () => {

    const list = DataTrendSearch.map((trend, index) => {
        return (<div className="home__trendSearch-part flex" key={index}>
            <div className="home__trendSearch-part-left">
                <p>{trend.title}</p>
                <p>{trend.count}</p>
            </div>
            <div className="home__trendSearch-part-right">
                <img src={trend.imageURL} alt="Lỗi" />
            </div>
        </div>)
    })

    return (
        <div className="container part mt25">
            <div className="part-title">
                XU HƯỚNG TÌM KIẾM
            </div>
            <div className="home__trendSeacrch row">
                {list}
            </div>
        </div>
    )
}

export default TrendSearch
