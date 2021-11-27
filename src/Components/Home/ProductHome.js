import React from 'react';

import DataProduct from '../../Data/DataProduct';
import Product from '../Product/Product';

import '../../Css/productHome.css';

const ProductHome = () => {

    const listSale = DataProduct.map((sale, index) => {
        return (
            <Product data={sale} key={index}/>
        )
    })

    return (
        <div className="container part mt25">
            <div className="part-title">
                <span>GỢI Ý HÔM NAY</span>
            </div>
            <div className="home__trendSeacrch row">
                {listSale}
            </div>
        </div>
    )
}

export default ProductHome
