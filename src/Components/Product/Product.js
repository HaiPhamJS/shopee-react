import React, { useRef } from 'react';

import catChuoi from '../../Function/catChuoi';

import { Link } from "react-router-dom";

const Product = (props) => {

    const product = props.data;

    const price = catChuoi(product.price)

    const s1 = useRef();
    const s2 = useRef();
    const hien = () => {
        s1.current.style.display = 'block';
        s2.current.style.border = '2px solid var(--primary-color)'
    }

    const an = () => {
        s1.current.style.display = 'none';
        s2.current.style.border = 'none'
    }

    return (
        <div 
            className="product flashSale-part product"
            onMouseOver={hien}
            onMouseOut={an}
            ref={s2}
            >
            <div className="flashSale-part-top">
                <img className="sale-img" src={product.image} alt="" />
                <div className="flashSale-part-back">
                    <Link to={`/product/${product.id}`}>
                        <img src={product.imageBanner} alt="Err" />
                    </Link>
                </div>
                {product.saleoff > 0 ? <div className="flashSale-part-saleoff">
                    <p>{product.saleoff}%</p>
                    <p>Giảm</p>
                </div> : ''}
            </div>
            <div className="flashSale-part-bottom flex">
                <div className="w60" style={{textAlign: 'left'}}>
                    <span>&#8363; </span><span> {price}</span>
                </div>
                <div className="w40" style={{textAlign: 'right', color: 'gray', fontSize: '13px', lineHeight: '30px'}}>
                    Đã bán {product.solded}
                </div>
            </div>
            <div className="timtuongtu" ref={s1}>
                <span>Tìm sản phẩm tương tự</span>
            </div>
        </div>
    )
}

export default Product
