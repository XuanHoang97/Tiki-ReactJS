import React from 'react';
import { Link } from 'react-router-dom';
import Rate from './Rate';
function SearchProduct(props) {
    return (
        <div className="list__prod">
            <Link to={ props.content + "." + props.id + ".html"}>
                <img src={props.img1} alt="" />
                <p className="text-secondary mt-3 mb-1">{props.content}</p>
                <Rate/>
                <div className="price">
                    <span className="price_prod">185.000 đ</span>
                    <span className="badge badge-danger">-6%</span>
                </div>
            </Link>
        </div>
    );
}

export default SearchProduct;