import axios from "axios";
import Mail from "components/body/Mail";
import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from "react-redux";
import { addProduct, downCount, upCount } from "redux/actions/cart";
import { cartProductMenuState$ } from "redux/selectors";
import Offer from './Offer';
import Order from "./Order";
import ProductDesc from './ProductDesc';
import ProductSimilar from './ProductSimilar';
import SpecialFeature from './SpecialFeature';
import Specifications from './Specifications';
import Illutrator from './vote/Illutrator';
import Vote from "./vote/Vote";
import { cartCountMenuState$ } from 'redux/selectors';
import { numberFormat } from "contants/NumberFormat";
import SupAndAns from "./vote/SupAndAns";

const Product_detail = ({ match }) => {
    const [data, setData] = useState([]);
    const TITLE = 'Điện thoại ngon - bổ - rẻ';
    const dataProDetail = useSelector(cartProductMenuState$)
    const dispatch = useDispatch()
    console.log(dataProDetail)
    let number = useSelector(cartCountMenuState$)
    //tang so luong
    const handleUp = () => {
        dispatch(upCount())
    }
    //giam so luong
    const handleDown = () => {
        if (number > 1)
            dispatch(downCount())
    }


    data.length > 0 && dispatch(addProduct(data[0]))

    useEffect(() => {
        const { params } = match
        const fetchProduct = () => {
            axios.get(`https://y6896.sse.codesandbox.io/product_mobile/?id=${params.id}`)
                .then((res) => { setData(res.data); })
                .catch((err) => console.log(err));
        };
        !dataProDetail && fetchProduct();
    }, [dataProDetail, match]);
    // Call api


    return (
        <div className="main bg-light pt-3 pb-3">
            <Helmet> <title>{TITLE}</title></Helmet>
            <div className="container">
                <h6 className="mb-2">CHI TIẾT SẢN PHẨM</h6>
                <div className="bg-white pt-4 pb-4 p-3 m-0 text-center row">
                    <div className="col-md-3 p-0 text-left">
                        {(dataProDetail ? [dataProDetail] : data).map((item, key) => {
                            return (
                                <div key={item.id}>
                                    <img className="w-75" src={item.img} alt="loi" />
                                    <Illutrator />
                                </div>
                            );
                        })}
                        <SpecialFeature />
                    </div>

                    {(dataProDetail ? [dataProDetail] : data).map((prod, key) => {
                        return (
                            <div className="col-md-6 pl-4 pr-2 text-left" key={prod.id}>
                                <h5>{prod.name}</h5>
                                <Vote />
                                <div className="price bg-light p-2">
                                    <div className="row m-1 align-items-center">
                                        <h4>
                                            {numberFormat(prod.price)}
                                        </h4>
                                        <span className="badge badge-pill badge-danger ml-3 mr-4">-{prod.sale_off}%</span>
                                        <strike className="small">
                                            {new Intl.NumberFormat("GB-en", {
                                                currency: "VND", style: "currency", minimumFractionDigits: 0, maximumFractionDigits: 0
                                            }).format(prod.price_old)}
                                        </strike>
                                    </div>
                                </div>
                                <Order order={dataProDetail ? dataProDetail : data[0]}
                                    handleUp={handleUp}
                                    handleDown={handleDown}
                                    number={number}
                                />
                            </div>
                        );
                    })}
                    <Offer bonus={dataProDetail ? [dataProDetail] : data} />
                </div>
                <Specifications />
                <ProductDesc />
                <ProductSimilar />
                <Mail />
                <SupAndAns />
            </div>
        </div>
    );
}
export default Product_detail;

