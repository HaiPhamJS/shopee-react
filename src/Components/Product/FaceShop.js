import React from 'react';

import '../../Css/faceshop.css';

const FaceShop = (props) => {

    const data = props.data;

    return (
        <div className="container mt25 part faceshop flex">
            <div className="w40 flex faceshop-left">
                <div className="w30 faceshop-left-left">
                    <img src={data.imgShop === ""
                        ? "https://developers.google.com/web/images/contributors/no-photo.jpg"
                        : data.imgShop} alt="Lỗi" />
                </div>
                <div className="faceshop-left-right">
                    <p>{data.author}</p>
                    <p>{data.onlined}</p>
                    <div className="flex">
                        <div className="btn-faceshop">
                            <i className="fa fa-wechat"></i>
                            <div style={{ marginTop: '-7px' }}>
                                Chat ngay
                            </div>
                        </div>
                        <div className="btn-faceshop ml10">
                            <i className='fas fa-store'></i>
                            <div style={{ marginTop: '-7px' }}>
                                Xem shop
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w60 faceshop-right">
                <div className="faceshop-right-part">
                    <span>Đánh Giá </span> <span> {data.rateShop}</span>
                </div>
                <div className="faceshop-right-part">
                    <span>Tỷ Lệ Phản Hồi </span> <span> {data.ResponseShop}</span>
                </div>
                <div className="faceshop-right-part">
                    <span>Tham Gia </span> <span> {data.joined}</span>
                </div>
                <div className="faceshop-right-part">
                    <span>Sản Phẩm </span> <span> {data.productShop}</span>
                </div>
                <div className="faceshop-right-part">
                    <span>Thời Gian Phản Hồi </span> <span> {data.timeResponseShop}</span>
                </div>
                <div className="faceshop-right-part">
                    <span>Người theo dõi </span> <span> {data.followShop}</span>
                </div>
            </div>
        </div>
    )
}

export default FaceShop
