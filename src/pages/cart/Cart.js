import Mail from 'components/body/Mail';
import React from 'react';
import { Link } from 'react-router-dom';

function Cart() {
    return (
        <div className="main bg-light pt-3 pb-3">
            <div className="container">
                {/* Cart  */}
                <h6>GIỎ HÀNG</h6>
                <div className="bg-white p-5 m-1 text-center">
                    <img className="col-md-2" src="https://salt.tikicdn.com/desktop/img/mascot@2x.png" alt="" />
                    <p className="small mt-2 mb-4">Không có sản phẩm nào trong giỏ hàng của bạn.</p>
                    <Link to='/'>
                        <button type=" button " className="btn btn-warning pl-5 pr-5 ">Tiếp tục mua sắm</button>
                    </Link>
                </div>
                
                {/* Receive Mail   */}
                <Mail />
            </div>
        </div>
    );
}

export default Cart;