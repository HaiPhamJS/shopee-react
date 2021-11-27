import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import data from '../../Data/DataBanner';

import '../../Css/banner.css';

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    };

    const listBanner = data.map((banner, index) => {
        return <img src={banner.imageURL} alt="Lỗi" key={index} />
    })

    return (
        <div className="home__banner container mt25">
            <div className="row">
                <div className="home__banner-left">
                    <Slider {...settings}>
                        {listBanner}
                    </Slider>
                </div>
                <div className="home__banner-right col-0">
                    <img src="https://i.ibb.co/6PCWhkn/1.png" alt="Error" />
                    <img src="https://i.ibb.co/f8Lm02y/2.png" alt="Error" />
                </div>
            </div>
        </div>
    )
}

export default Banner
