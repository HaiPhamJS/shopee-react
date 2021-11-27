import React, { useState, useRef } from 'react';
import DataProduct from '../../Data/DataProduct';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Rating from '@mui/material/Rating';
import { withRouter } from "react-router-dom";
import { addProductToCart } from '../../Store/actions/addProductToCart';
import { useDispatch } from 'react-redux';

import FaceShop from './FaceShop';
import Description from './Description';

import catChuoi from '../../Function/catChuoi';

import '../../Css/productPage.css';


const ProductPage = (props) => {
    let totalCount = 0;

    const data = DataProduct[props.match.params.id]
    const [image, setimage] = useState(data.arrImg[0])
    const [select, setselect] = useState('')
    const [input, setinput] = useState(1)
    const dispatch = useDispatch();
    const s2 = useRef();

    data.type.forEach((pro) => {
        totalCount += pro.count
        return totalCount
    })

    const [count, setcount] = useState(totalCount)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    const handleImage = (img) => {
        setimage(img)
    }

    const listImage = data.arrImg.map((img, index) => {
        return <img
            src={img}
            alt="Err"
            key={index}
            className={image === img ? 'borderImg' : ''}
            onMouseOver={() => handleImage(img)}
        />
    })

    const total = data.price / (1 - data.saleoff / 100)

    const colors = data.type.map((color, index) => {
        return <div
            className={select === color.name ? 'color-part activeColor' : 'color-part'}
            key={index}
            onClick={() => { setimage(color.image); setselect(color.name); setcount(color.count); setinput(1) }}
            onMouseOver={() => { setimage(color.image); setselect(color.name); setcount(color.count); setinput(1) }}
        >{color.name}</div>
    })

    const subInput = () => {
        if (input - 1 >= 0) {
            setinput(input => input - 1);
        }
    }

    const handleInput = (e) => {
        if (e.target.value < count) {
            setinput(e.target.value)
        } else {
            setinput(count)
        }
    }

    const addInput = () => {
        if (input + 1 <= count) {
            setinput(input => input + 1);
        }
    }

    const addToCart = (product) => {
        if (select !== "" && count > 0) {
            const addProduct = {
                id: product.id,
                type: select,
                count: input,
                price: product.price,
                name: product.name,
                img: image
            }
            dispatch(addProductToCart(addProduct));
        } else {
            s2.current.innerHTML = `<span class="warn">Vui lòng chọn Phân loại hàng</span>`
        }
    }

    return (
        <div>
            <div className="container mt25 part">
                <div className="row">
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 product-left">
                        <div className="product-left-top">
                            <img src={image} alt="Lỗi" />
                        </div>
                        <div className="product-left-bot mt10">
                            <Slider {...settings}>
                                {listImage}
                            </Slider>
                            <div className="product-share flex">
                                <span style={{ paddingRight: '20px' }}>Chia sẻ</span>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Messenger_logo_2018.svg/2048px-Facebook_Messenger_logo_2018.svg.png" alt="Err" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="Err" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="Err" />
                                <img src="https://thuviendohoa.vn/upload/images/items/logo-twitter-bieu-tuong-twitter-png-390.jpg" alt="Err" />
                                <div className="flex">
                                    <i className='far fa-heart'></i> Đã thích ({data.likeShop})
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 product-right mt25">
                        <p>{data.name}</p>
                        <div className="flex">
                            <span className="fs20 pri underline">{data.rateStar}</span>
                            <div
                                className="pl10"
                                style={{
                                    paddingTop: '5px',
                                }}>
                                <Rating
                                    name="read-only"
                                    value={data.rateStar}
                                    precision={0.1}
                                    style={{
                                        color: 'var(--primary-color)'
                                    }}
                                    readOnly />
                            </div>
                            <span
                                className="gray fs20 pl15">
                                |
                            </span>
                            <span className="fs20 underline pl15">{data.rate}</span>
                            <span
                                className="fs16 gray pl10"
                                style={{
                                    paddingTop: '4px'
                                }}
                            >Đánh Giá</span>
                            <span
                                className="gray fs20 pl15">
                                |
                            </span>
                            <span className="fs20 pl15">{data.sold}</span>
                        </div>
                        <div className="product-price mt10 flex">
                            {data.saleoff > 0
                                ? <span className="fs20 gray linethrough pl15"><small>&#8363;</small>{catChuoi(total)}</span>
                                : ''}
                            <span className="fs25 pri pl30">
                                <small>&#8363;</small>
                                {catChuoi(data.price)}
                            </span>
                            <div>
                                {data.saleoff > 0 ? <span
                                    className="badge"
                                    style={{
                                        backgroundColor: 'var(--primary-color)',
                                        color: 'white',
                                        marginLeft: '20px',
                                    }}
                                >{data.saleoff}% Giảm</span> : ''}
                            </div>
                        </div>
                        <div className="line mt10 flex fs16">
                            Deal Sốc
                            <div>
                                <span className="pri">Mua Kèm Deal Sốc</span>
                            </div>
                        </div>
                        <div className="flex trasport mt10">
                            <div className="product-content-left">
                                <span>Vận Chuyển</span>
                            </div>
                            <div className="product-content-right">
                                <img src="https://i.ibb.co/WxrZtFb/1cdd37339544d858f4d0ade5723cd477.png" alt="Lỗi" />
                                <span className="pl10">Miễn phí vận chuyển</span> <br />
                                <span
                                    style={{
                                        color: 'gray',
                                        paddingLeft: '35px'
                                    }}
                                >
                                    Miễn phí vận chuyển cho đơn hàng trên 99k</span> <br />
                                <span
                                    className="fs16"
                                    style={{
                                        color: 'gray',
                                        paddingLeft: '35px',
                                        fontSize: '14px'
                                    }}
                                >Vận chuyển tới <span style={{ color: 'black' }}>Xã Di Trạch, Huyện Hoài Đức</span></span><br />
                                <span
                                    className="fs16"
                                    style={{
                                        color: 'gray',
                                        paddingLeft: '35px',
                                        fontSize: '14px'
                                    }}
                                >Phí Vận Chuyển <span style={{ color: 'black' }}>22.000</span></span>
                            </div>
                        </div>
                        <div className="flex product-color mt25">
                            <div className="product-content-left">
                                Màu sắc
                            </div>
                            <div className="product-content-right flex">
                                {colors}
                            </div>
                        </div>
                        <div className="flex product-color mt25">
                            <div className="product-content-left">
                                Số Lượng
                            </div>
                            <div className="product-content-right flex count">
                                <button
                                    onClick={subInput}
                                >-</button>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => handleInput(e)}
                                />
                                <button
                                    onClick={addInput}
                                >+</button>
                                <span style={{
                                    color: 'gray',
                                    paddingLeft: '30px',
                                    paddingTop: '5px'
                                }}>{count} sản phẩm có sẵn</span>
                            </div>
                        </div>
                        <div ref={s2}></div>
                        <div className="flex product-color mt25 btnPro">
                            <button onClick={() => addToCart(data)}><i className='fas fa-cart-plus pr8'></i> Thêm vào giỏ hàng</button>
                            <button>Mua ngay</button>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
            <FaceShop data={data} />
            <Description data={data} />
        </div>
    )
}

export default withRouter(ProductPage)
