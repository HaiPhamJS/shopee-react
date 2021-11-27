import React from 'react';
import DataCategory from '../../Data/DataCategory';

import '../../Css/category.css';

const Category = () => {

    const listCate = DataCategory.map((cate, index) => {
        return (
            <div className="home__category-part" key={index}>
                <img src={cate.imageURL} alt="Err"/> <br />
                <span>{cate.title}</span>
            </div>
        )
    })

    return (
        <div className="container part mt25">
            <div className="part-title">
                <span>DANH MỤC</span>
            </div>
            <div className="row">
                {listCate}
            </div>
        </div>
    )
}

export default Category
