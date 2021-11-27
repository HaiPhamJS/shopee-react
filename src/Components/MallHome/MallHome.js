import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { DataMallHome, CateMallHome } from '../../Data/DataMallHome';

import '../../Css/mallHome.css';

const MallHome = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    };

    const listMall = DataMallHome.map((mall, index) => {
        return <img src={mall.imageURL} alt="Lỗi" key={index} />
    })

    const listCate = CateMallHome.map((mall, index) => {
        return (
            <div className="home__mall-main-right-part" key={index}>
                <img src={mall.imageURL} alt="Lỗi" /><br />
                <span>{mall.title}</span>
            </div>
        )
    })

    return (
        <div className="container part mt25">
            <div className="part-title home__mall-title">
                <span>SHOPEE MALL&nbsp;&nbsp;|</span>
                <img src="https://i.ibb.co/BZST0YW/6c502a2641457578b0d5f5153b53dd5d.png" alt="Err" />
                <span>7 Ngày Miễn Phí Trả Hàng</span>
                <img src="https://i.ibb.co/d0hHQdT/16ead7e0a68c3cff9f32910e4be08122.png" alt="Err" />
                <span>Hàng Chính Hãng 100%</span>
                <img src="https://i.ibb.co/QvChnVB/511aca04cc3ba9234ab0e4fcf20768a2.png" alt="Err" />
                <span>Miễn Phí Vận Chuyển</span>
            </div>
            <div className="home__mall-main flex">
                <div className="home__mall-main-left">
                    <Slider {...settings}>
                        {listMall}
                    </Slider>
                </div>
                <div className="home__mall-main-right">
                    {listCate}
                </div>
            </div>
        </div>
    )
}

export default MallHome
