import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, countProduct } from 'redux/actions/cart';
import OptionProd from './OptionProd';
import OrderInstallment from './OrderInstallment';

function Order(props) {
    const { order, number, handleDown, handleUp } = props
    const dispatch = useDispatch()
    const handleChangeNumber = (e) => {
    }

    const addCart = () => {
        if (number > 0) {
            order.count = number
            dispatch(addToCart(order))
            dispatch(countProduct(1))
        }
    }
    
    return (
        <div>
            <div className="text-danger">
                <img className="w-25" src="http://techshop-ecommerce.surge.sh/static/media/policy-image.62c1167a.png" alt="" />
            </div>

            <div className="option">
                <OptionProd />
                <small>Số lượng:</small>
                <div className="input-group col-md-3 pt-2 col-6 p-0">
                    <div className="input-group-prepend" onClick={handleDown}>
                        <button className="btn btn-success btn-sm" disabled={number < 2 ? true : ""}><i className="fas fa-minus small" /></button>
                    </div>

                    <input type="text" min="1" value={number} onChange={(e) => handleChangeNumber(e)} className="form-control text-center" style={{ height: '31px' }} />
                    
                    <div className="input-group-append">
                        <button className="btn btn-success btn-sm" onClick={handleUp}><i className="fas fa-plus small" /></button>
                    </div>
                </div>

                <button type="button" className="btn btn-success btn-md btn-block mt-5" onClick={addCart}>
                    Thêm vào giỏ hàng
                </button>                
               
                <OrderInstallment  />
            </div>
        </div>
    );
}

export default Order;