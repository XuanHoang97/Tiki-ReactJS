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
                <div className="row p-3 mt-3 align-items-center ">
                    <div className="col-md-6 row ">
                        <div className="col-md-3 ">
                            <img className="w-100 " src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/newsletter.png " alt=" " />
                        </div>
                        <div className="info--mail col-md-9 ">
                            <h6>Đăng ký nhận bản tin Tiki</h6>
                            <p className="small ">Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn</p>
                        </div>
                    </div>
                    <div className="input-group col-md-6 ">
                        <input type="text " className="form-control " placeholder="Địa chỉ Email của bạn " />
                        <button className="btn btn-success " type="submit " style={{ height: '38px', borderRadius: 0 }}>Đăng ký</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;