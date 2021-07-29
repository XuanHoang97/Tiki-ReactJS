import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";
class Cart1 extends Component {
    render() {
        return (
            <div className="main bg-light pt-3 pb-3">
                <div className="container">
                    {/* Header  */}
                    <div className="mb-2 m-1">
                        <bold>GIỎ HÀNG</bold>
                        <small>( 1 sản phẩm )</small>
                    </div>
                    <div className="row m-1 justify-content-between">
                        <div className="col-md-9 pl-0 ">
                            <div className="bg-white p-3 row">
                                <img className="col-md-2 w-100" src="https://salt.tikicdn.com/cache/200x200/ts/product/4f/fd/d5/c6e393dd248cdaa21c7c4104fe0f08c1.jpg" alt="" />
                                <div className="col-md-5 small">
                                    <h6>Samsung galaxy ZFold2</h6>
                                    <p>- Tác giả: <a href>Jack Canfield</a> <br />
                                        <span className="text-warning">Sách không hỗ trợ Bookcare </span> <br />
                                    </p>
                                    <a className="mr-4 text-danger" href>Xóa</a>
                                    <a className="text-primary">Để dành mua sau</a>
                                </div>

                                <div className="input-group col-md-2 col-6" style={{ height: '31px' }}>
                                    <div className="input-group-prepend">
                                        <button className="btn btn-light btn-sm" type="submit"><i className="fas fa-minus small" /></button>
                                    </div>
                                    <input type="text" className="form-control text-center" defaultValue={1} style={{ height: '31px' }} />
                                    <div className="input-group-append">
                                        <button className="btn btn-light btn-sm" type="submit"><i className="fas fa-plus small" /></button>
                                    </div>
                                </div>

                                <div className="price col-md-3 text-right">
                                    <h6 className="text-danger">49.000.000 <u>đ</u> </h6>
                                    <strike className="small mr-2">
                                        50.000.000 <u>đ</u>
                                    </strike>
                                    <span className="text-danger small">-2%</span>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3 pr-0">
                            <div className="bg-white p-3">
                                <div className="row pb-0 justify-content-around">
                                    <span>Tiki khuyến mãi</span>
                                    <small className="text-secondary">Có thể chọn 2
                                        <i className="fas fa-info-circle" />
                                    </small>
                                </div>
                                <div className="text-primary">
                                    <i className="fas fa-money-check-alt mr-3" />
                                    <a href className="small">Chọn hoặc nhập mã khuyến mãi</a>
                                </div>
                            </div>
                            <div className="bg-white mt-3 p-2">
                                <div className="row  pl-3 pr-3 p-2 justify-content-between">
                                    <span>Tạm tính</span>
                                    <small className="text-secondary">55.000 <u>đ</u>
                                    </small>
                                </div>
                                <div className="row  pl-3 pr-3 p-2 justify-content-between">
                                    <span>Giảm giá</span>
                                    <small className="text-secondary">0 <u>đ</u>
                                    </small>
                                </div>
                                <div className="row  pl-3 pr-3 p-2 justify-content-between">
                                    <span>Tổng cộng</span>
                                    <bold className="text-secondary">55.000 <u>đ</u>
                                    </bold>
                                    <small className="col-md-12 p-0 text-right">(Đã bao gồm VAT nếu có)</small>
                                </div>
                            </div>

                            <Link to="/thanh-toan">
                                <button type="button" name id className="btn btn-danger btn-md btn-block mt-3 mb-3">Tiến hành đặt hàng</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart1;