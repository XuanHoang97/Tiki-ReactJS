import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addLaptop } from "redux/actions/cart";
import { laptopState$ } from "redux/selectors";
import * as actions from '../../../redux/actions';

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

            <div className="product__detail mt-4">
                <div className="d-flex">
                    {
                        LaptopList.map((laptop, key)=>{
                            return (
                                <div className="product--item col-md-3 col-6 pt-3" key={laptop.id}>
                                    <div onClick={() => handleLaptop(laptop)}>
                                        <Link to={`/laptop/` + laptop.name + "." + laptop.id + ".html"}>
                                            <div className="item--laptop">
                                                <img src={laptop.img} alt="laptop" />
                                                <h6 className="mt-4 mb-1 text-danger">{laptop.name}</h6>
                                            </div>
                                        </Link>
                                    </div>
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