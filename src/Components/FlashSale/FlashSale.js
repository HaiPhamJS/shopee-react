import React from 'react';
import DataProduct from '../../Data/DataProduct';
import ProductSale from '../Product/ProductSale';

import '../../Css/flashSale.css';

const FlashSale = () => {

    const listSale = DataProduct.map((sale, index) => {
        if(index < 6) {
            return (
                <ProductSale data={sale} key={index}/>
            )
        } else {
            return ''
        }
    })

    return (
        <div className="container part mt25 flashSale">
            <div className="part-title">
                <img src="https://i.ibb.co/TtKrDCc/fb1088de81e42c4e538967ec12cb5caa.png" alt="Err" />
            </div>
            <div className="row">
                {listSale}
            </div>
        </div>
    )
}

export default FlashSale
