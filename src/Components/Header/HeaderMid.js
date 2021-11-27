import React, { useRef } from 'react';
// import Logo from './Logo';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import { catChuoichu } from '../../Function/test';
import catChuoi from '../../Function/catChuoi';

import '../../Css/headerMid.css';

const HeaderMid = () => {

    const productList = useSelector(productCartReducer => productCartReducer.productCartReducer);

    const s1 = useRef();

    const hideQrCode = () => {
        s1.current.style.display = 'none';
    }

    const unhideQrCode = () => {
        s1.current.style.display = 'block';
    }

    const count = productList.length;

    const listPro = productList.map((pro, index) => {
        if (index > count - 6) {
            return (
                <div className="cart-part-icon" key={index}>
                    <div className="w20 p5">
                        <img src={pro.img} alt="Lỗi" style={{ width: '70%' }} />
                    </div>
                    <div className="w60">
                        <span>{catChuoichu(pro.name)}</span>
                    </div>
                    <div className="w20 center">
                        <span style={{ color: 'red' }}>{catChuoi(pro.price)}đ</span>
                    </div>
                </div>
            )
        } else {
            return ''
        }
    })

    return (
        <div className="row header__mid">
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <Link to="/home">
                    <img src="https://event.shopee.vn/khoi-dau-moi/img/img_logo-shopee.png" alt="Logo" />
                </Link>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <div className="header__search flex">
                    <input type="text" placeholder="CHÍNH HÃNG GIẢM SÂU" />
                    <div className="header__button">
                        <i className='fas fa-search'></i>
                    </div>
                </div>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 header__cart">
                <i
                    className="fas fa-shopping-cart notifi"
                    onMouseOver={unhideQrCode}
                    onMouseOut={hideQrCode}
                >
                    <div className="notifi-content" ref={s1}>
                        <h4 style={{ color: 'gray' }}>Sản phẩm mới thêm</h4>
                        {listPro}
                        <span style={{
                            fontSize: '15px'
                        }}>
                            {listPro.length > 0
                                ? <div className="notifi-bottom">
                                    {listPro.length} sản phẩm được thêm vào giỏ hàng <button>Xem giỏ hàng</button>
                                </div>
                                : 'Chưa có sản phẩm trong giỏ hàng'
                            }
                        </span>
                    </div>
                </i>
                <div className="header__cart-count">
                    <span className="badge badge-light">{productList.length}</span>
                </div>
            </div>
        </div>
    )
}

export default HeaderMid
