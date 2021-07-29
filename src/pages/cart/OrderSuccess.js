import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class OrderSuccess extends Component {
    render() {
        return (
            <div className="order_success bg-light ">
                <div className="pt-3 pb-3 container">
                    <div className="row bg-white p-0 pt-3 pb-3">
                        <div className="col-md-3">

                            <img className="mb-2 w-100" src="http://shopeeplus.com//upload/images/1tiki.jpg" style={{ width: '12%' }} alt="" />

                        </div>

                        <div className="col-md-9">
                            <div className="mb-5">
                                <h5 className="text-warning">Cảm ơn bạn đã mua hàng tại Tiki.vn !</h5>
                                <h6 className="small text-secondary">Mã số đơn hàng của bạn: </h6>
                                <p class="badge badge-success  w-25 p-2">27101997</p>

                                <h6 class="mt-3 small">Bạn có thể xem
                                    <a className="text-primary"> Đơn hàng của tôi</a>
                                </h6>

                                <div style={{ fontSize: '13px' }}>
                                    <img className="" style={{ width: '10%' }} src="https://www.clipartmax.com/png/middle/468-4680080_traffic-transport-lead-time-icon-png.png" alt="" />
                                    <span>Thời gian giao hàng dự kiến từ 2-3 ngày làm việc, không kể Thứ 7 - Chủ nhật</span>
                                    <p>Thông tin về đơn hàng đã được gửi đến email
                                        <i className="text-success"> xuanhoang997@gmail.com</i>.
                                        <span> Nếu không tìm thấy vui lòng kiểm tra trong hộp thư
                                            <strong> Spam</strong> hoặc <strong>Junk folder</strong>
                                        </span>
                                    </p>
                                </div>

                                <div className="order_next text-primary text-right">
                                    <Link to="/" className="">
                                        Tiếp tục mua hàng
                                    </Link>
                                </div>
                            </div>
                            <hr />
                            <h6 className="text-secondary">Các câu hỏi thường gặp</h6>
                            <div className="">
                                <div><a href="">Xác nhận đơn hàng như thế nào ?</a></div>
                                <div><a href="">Thời gian giao hàng</a></div>
                                <div><a href="">Chính sách đổi trả hàng</a></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default OrderSuccess;