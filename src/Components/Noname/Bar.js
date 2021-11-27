import React from 'react';
import DataBar from '../../Data/DataBar';

import '../../Css/bar.css';

const Bar = () => {

    const listBar = DataBar.map((bar, index) => {
        return (
            <div className="home__bar-part" key={index}>
                <img src={bar.imageURL} alt="Err" /> <br />
                <span>
                    {bar.title}
                </span>
            </div>
        )
    })

    return (
        <div className="container mt10 part flex">
            {listBar}
        </div>
    )
}

export default Bar
