import React, { useRef } from 'react';

import '../../Css/headerTop.css';

const HeaderTop = () => {

    const s1 = useRef();

    const hideQrCode = () => {
        s1.current.style.display = 'none';
    }

    const unhideQrCode = () => {
        s1.current.style.display = 'block';
    }

    return (
        <div className="row header__top col-0">
            <div className="header__top-left flex">
                Kênh Người Bán<span> | </span>
                Trở Thành Người Bán Shopee<span> | </span>
                <div 
                    onMouseOver={unhideQrCode}
                    onMouseOut={hideQrCode}
                    className="installApp"
                    >
                        Tải Ứng Dụng
                        <div className="qrapp" ref={s1}>
                            <img src="https://i.ibb.co/Yff4Pgq/qr-code.png" alt="Lỗi" />
                        </div>
                </div>
                <span> | </span>
                Kết Nối
                <i className='fab fa-facebook'></i>
                <i className='fab fa-instagram'></i>
            </div>
            <div className="header__top-right">
                <i className="material-icons">notifications_none</i>Thông Báo
                <i className='far fa-question-circle'></i>Hỗ Trợ
                <span>Đăng Ký</span>
                <span>Đăng Nhập</span>
            </div>
        </div>
    )
}

export default HeaderTop
