import React from 'react';
import { useDispatch } from "react-redux";
import { addToCart, countProduct } from "redux/actions/cart";

function Order(props) {
    const { order, number, handleDown, handleUp } = props
    // Option number product
    const dispatch = useDispatch()

    // Add to cart
    const addCart = () => {
        if (number > 0) {
            order.count = number
            dispatch(addToCart(order))
            dispatch(countProduct(1))
        }
    }

    return (
        <div>
            <div className="option">
                <small>Số lượng:</small>
                <div className="input-group col-md-3 pt-2 col-6 p-0">
                    <div onClick={handleDown} className="input-group-prepend">
                        <button className="btn btn-success btn-sm"><i className="fas fa-minus small" /></button>
                    </div>

                    <input type="text" min="1" value={number} className="form-control text-center" style={{ height: '31px' }} />

                    <div onClick={handleUp} className="input-group-append" >
                        <button className="btn btn-success btn-sm"><i className="fas fa-plus small" /></button>
                    </div>
                </div>

                <button onClick={addCart} type="button" className="btn btn-success btn-md btn-block mt-5">Thêm vào giỏ hàng</button>
            </div>
        </div>
    );
}

export default Order;