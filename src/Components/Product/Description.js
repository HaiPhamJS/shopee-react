import React from 'react';
import parse from 'html-react-parser';

import '../../Css/description.css';

const Description = (props) => {

    const data = props.data;
    const title = data.detail;
    const des = data.description;

    return (
        <div className="part container mt25">
            <br />
            <div className="product-price pl10">
                <span>CHI TIẾT SẢN PHẨM</span>
            </div>
            <div className="mt10">
                {parse(`${title}`)}
            </div>
            <div className="product-price pl10 mt25">
                <span>MÔ TẢ SẢN PHẨM</span>
            </div>
            <div className="mt10">
                {parse(`${des}`)}
            </div>
        </div>
    )
}

export default Description
