import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

Prod_Related.propTypes = {
    prod: PropTypes.array,
};

Prod_Related.defaultProps = {
    prod: [],
};

function Prod_Related(props) {
    const { prod } = props;

    return (

        <div className="product--item col-md-3 col-6">
            <Link to="/chi-tiet-san-pham">
                <img src="https://phoneaqua.com/products/apple-iphone-12.jpg" alt="" />
                <h6 className="mt-4 mb-1 text-darkgrey">Apple Iphone 12 price </h6>
            </Link>

            <div className="rate mb-3">
                <span className="fa fa-star checked text-warning small" />
                <span className="fa fa-star checked text-warning small" />
                <span className="fa fa-star checked text-warning small" />
                <span className="fa fa-star text-secondary small" />
                <span className="fa fa-star text-secondary small" />
            </div>

            {/* {
                prod.map((p)=>(
                    <React.Fragment key={p.id}> */}
            <span className="badge badge-pill badge-danger pt-2 pb-2 pl-3 pr-3">21.499.000 <u>đ</u></span>
            <span className="badge badge-pill badge-warning p-2 ml-2 mr-2">-20%</span>
            <strike className="small" style={{ color: '#8a8a8a' }}>24.999.999 <u>đ</u></strike>
            <div className="config bg-light rounded mt-3 ml-1 mr-1 mb-3 pt-2 pb-2 pl-2 pr-2 row">
                <div className="chip border border-default mb-1 mr-1 rounded col-md-8">
                    <small> Snapdragon 720G</small>
                </div>
                <div className="chip border border-default rounded col-md-3">
                    <small>6.7"</small>
                </div>
                <div className="chip border border-default rounded col-md-3">
                    <small>8G</small>
                </div>
                <div className="chip border border-default rounded col-md-3">
                    <small>256G</small>
                </div>
            </div>

            {/* </React.Fragment>
                    
                ))
            } */}
        </div>
    );
}

export default Prod_Related;