import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Prod_info from './Prod_info';
import Prod_buy from './Prod_buy';
import Offer from './Offer';
import Specifications from './Specifications';
import Product_desc from './Product_desc';
import Product_similar from './Product_similar';
import Mail from '../../components/body/Mail';
class Product_detail extends Component {
    render() {
        return (
            <div className="main bg-light pt-3 pb-3">
                <div className="container">
                {/* Product--detail  */}
                <h6 className="mb-2">CHI TIẾT SẢN PHẨM</h6>
                <div className="bg-white pt-4 pb-4 p-3 m-0 text-center row">
                    <Prod_info />
                    <Prod_buy qty={3} />
                    <Offer /> 
                </div>
                {/* Thông số kỹ thuật */}
                <h6 className="mt-4 mb-2">THÔNG SỐ KỸ THUẬT</h6>
                <Specifications />

                {/* Mô tả sản phẩm */}
                <h6 className="mt-4 mb-2 m-0">MÔ TẢ SẢN PHẨM</h6>
                <Product_desc/>

                {/* Similar product  */}
                <h6 className="mt-4 mb-2 m-0">SẢN PHẨM TƯƠNG TỰ</h6>
                <Product_similar/>

                {/* Receive Mail   */}
                <Mail/>
                </div>
            </div>
        );
    }
}

export default Product_detail;