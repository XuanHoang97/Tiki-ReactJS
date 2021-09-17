import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addLaptop } from "redux/actions/cart";
import { laptopState$ } from "redux/selectors";
import * as actions from '../../../redux/actions';
import Rate from "../Rate";

function LaptopProduct() {
    const dispatch = useDispatch()
    const LaptopList = useSelector(laptopState$)

    const handleLaptop = (e) => {
        dispatch(addLaptop(e))
    }

    useEffect(() => {
        dispatch(actions.getDataLaptop.getDataLaptopRequest())
    }, []);

    return (
        <div className="product mt-3 mb-3 ml-0 mr-0 p-3 bg-white text-center">
            <h6 className="text-left">
                <i className="fas fa-mobile-alt mr-1 text-danger mr-3" />
                <span className="text-danger ">LAPTOP NỔI BẬT</span>
            </h6>

            <div className="product__detail mt-3 pb-2">
                <div className="d-flex">
                    {
                        LaptopList.map((laptop) => {
                            return (
                                <div className="product--item col-md-3 col-6 pt-3 p-0" key={laptop._id}>
                                    <div onClick={() => handleLaptop(laptop)}>
                                        <Link to={`/laptop/` + laptop.name + "." + laptop.id + ".html"}>
                                            <div className="item--laptop">
                                                <img src={laptop.img} alt="laptop" className="rounded" style={{ height: '150px' }} />
                                                <h6 className="mt-3 mb-2 text-dark">{laptop.name}</h6>
                                            </div>
                                        </Link>
                                    </div>
                                    <Rate />

                                    <div className="price__prod row align-items-center justify-content-center">
                                        <span className="font-weight-bold" style={{ color: 'red', fontSize: '14px' }}>
                                            {new Intl.NumberFormat("GB-en", {
                                                currency: "VND",
                                                style: "currency",
                                                minimumFractionDigits: 0,
                                                maximumFractionDigits: 0
                                            }).format(laptop.price)}

                                        </span>
                                        <span className="badge badge-pill badge-warning p-1 ml-3 mr-2">-{laptop.sale_off} %</span>
                                        <strike className="small" style={{ color: '#8a8a8a' }}>
                                            {new Intl.NumberFormat("GB-en", {
                                                currency: "VND",
                                                style: "currency",
                                                minimumFractionDigits: 0,
                                                maximumFractionDigits: 0
                                            }).format(laptop.price_old)}
                                        </strike>
                                    </div>

                                    <button type="button" name="" id="" className="AddCart btn btn-success btn-sm btn-block mt-4">
                                        <img src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png" alt="" className="mr-2" style={{ width: '8%' }} />
                                        Mua ngay
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}
export default LaptopProduct;