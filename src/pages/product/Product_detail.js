import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import Offer from './Offer';
import Specifications from './Specifications';
import ProductDesc from './ProductDesc';
import ProductSimilar from './ProductSimilar';
import axios from "axios";
import Mail from "components/body/Mail";
import Vote from "./vote/Vote";
import Order from "./Order";
import SpecialFeature from './SpecialFeature';
import Illutrator from './vote/Illutrator';

const Product_detail = ({ match }) => {
    const [product, setProduct] = useState([]);
    const [offerBonus, setOffer] = useState([]);
    const [data, setData] = useState([]);
    const TITLE = 'Điện thoại ngon - bổ - rẻ';

    useEffect(() => {
        fetchProduct();
        fetchOptionProd();
        fetchOffer();
    }, []);

    // Call api
    const fetchProduct = () => {    
        axios.get(`https://y6896.sse.codesandbox.io/product_mobile/?id=${match.params.id}`)
            .then((res) => { setData(res.data);})
            .catch((err) => console.log(err));
    };
    const fetchOptionProd = () => {
        axios.get(`https://y6896.sse.codesandbox.io/product_mobile/?id=${match.params.id}`)
            .then((res) => { setProduct(res.data); })
            .catch((err) => console.log(err));
    };
    const fetchOffer = () => {
        axios.get(`https://y6896.sse.codesandbox.io/product_mobile/?id=${match.params.id}`)
            .then((res) => { setOffer(res.data); })
            .catch((err) => console.log(err));
    };

    return (
        <div className="main bg-light pt-3 pb-3">
            <Helmet> <title>{TITLE}</title></Helmet>
            <div className="container">
                <h6 className="mb-2">CHI TIẾT SẢN PHẨM</h6>
                <div className="bg-white pt-4 pb-4 p-3 m-0 text-center row">
                    <div className="col-md-3 p-0 text-left">
                        {data.map((item, key) => {
                            return (
                                <div key={item.id}>
                                    <img className="w-75" src={item.img} alt="loi" />
                                    <Illutrator/>
                                </div>
                            );
                        })}
                        <SpecialFeature />
                    </div>

                    {product.map((prod, key) => {
                        return (
                            <div className="col-md-6 pl-4 pr-2 text-left" key={prod.id}>
                                <h5>{prod.name}</h5>
                                <Vote />
                                <div className="price bg-light p-2">
                                    <div className="row m-1 align-items-center">
                                        <h4>
                                            {new Intl.NumberFormat("GB-en", { currency: "VND",  style: "currency", minimumFractionDigits: 0, maximumFractionDigits: 0
                                            }).format(prod.price)}
                                        </h4>
                                        <span className="badge badge-pill badge-danger ml-3 mr-4">-{prod.sale_off}%</span>
                                        <strike className="small">
                                            {new Intl.NumberFormat("GB-en", { currency: "VND", style: "currency", minimumFractionDigits: 0, maximumFractionDigits: 0
                                            }).format(prod.price_old)}
                                        </strike>
                                    </div>
                                </div>
                                <Order/>
                            </div>
                        );
                    })}
                    <Offer bonus={offerBonus} />
                </div>
                <Specifications />
                <ProductDesc />
                <ProductSimilar />
                <Mail />
            </div>
        </div>
    );
}
export default Product_detail;

