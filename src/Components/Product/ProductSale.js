import React from 'react';

import catChuoi from '../../Function/catChuoi';

import { Link } from "react-router-dom";

const ProductSale = (props) => {

    const product = props.data;

    const price = catChuoi(product.price)
    const progress = product.solded / product.counted * 100

    return (
        <div className="product flashSale-part">
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
            <div className="flashSale-part-bottom">
                <span>&#8363; </span><span> {price}</span>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: progress + '%' }}>
                        <span className="sr-onlya" style={{
                            color: 'white',
                            fontSize: '11px',
                            textTransform: 'uppercase'
                        }}>Đã bán {product.solded}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSale
