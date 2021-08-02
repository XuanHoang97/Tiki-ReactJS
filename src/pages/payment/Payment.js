import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Payment extends Component {
    render() {
        return (
            <div className="main bg-light pt-3 pb-3">
                <div className="container">
                    {/* Payment  */}
                    <div className="row m-1 justify-content-between">
                        <div className="col-md-9 pl-0 ">
                            <div className="bg-white p-3">
                                <h6 className="text-dark">1. Chọn hình thức giao hàng</h6>
                                <div className="option_delivery row">
                                    <div className="standard col-md-6 ">
                                        <div class="custom-control custom-radio bg-light p-4 text-center">
                                            <input type="radio" class="custom-control-input" id="customRadio" name="gh" value="gh" checked />
                                            <label class="custom-control-label" for="customRadio">Giao hàng tiêu chuẩn</label>
                                        </div>
                                    </div>

                                    <div className="fast col-md-6">
                                        <div class="custom-control custom-radio bg-light p-4 text-center">
                                            <input type="radio" class="custom-control-input" id="customRadio1" name="gh" value="gh" />
                                            <label class="custom-control-label" for="customRadio1">Giao hàng nhanh</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="info_prod border border-light mt-3 p-3 m-0 row justify-content-between">
                                    <div className="col-md-6 p-0 row">
                                        <div className="col-md-3 p-0 text-left">
                                            <img className="w-75" src="https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FProduct%2Fss-galaxy-zFold.png?alt=media&token=c2ac1c49-3f4f-4fa9-9836-7b6face16473" alt="" />
                                        </div>
                                        <div className="col-md-5 p-0">
                                            <small>Samsung galaxy ZFold2</small>
                                            <p>Số lượng: X1 </p>
                                        </div>

                                        <div className="col-md-4 p-0 text-right">
                                            <span>49.000.000 <u>đ</u></span>
                                        </div>
                                    </div>

                                    <div className="col-md-6 p-0 row">
                                        <div className="col-md-8 ">
                                            <span className="text-success">Giao vào thứ 7, 26/06/2021</span>
                                            <p>Được giao bởi TikiPost</p>
                                            <span className="text-danger">Giao tiêu chuẩn</span>
                                        </div>

                                        <div className="col-md-4 p-0 text-right">
                                            <span>Miễn phí</span>
                                        </div>
                                    </div>
                                </div>

                                <h6 className="text-dark mt-3 mb-3">2. Chọn hình thức thanh toán</h6>
                                <div className="option_payment border border-light mt-3 p-3">
                                    {/* <div class="form-check">
                                <input type="radio" class="form-check-input" id="payment_money"  name="payment" value="option1" />
                                <label class="custom-control-label" for="pm1">
                                    <img className="ml-3 mr-2" src="https://st2.depositphotos.com/5266903/8036/v/950/depositphotos_80362180-stock-illustration-payment-icon-from-business-bicolor.jpg" style={{width:'4%'}} alt="" /> 
                                    Thanh toán tiền mặt khi nhận hàng
                                </label>
                            </div>

                            <div class="form-check">
                                <input type="radio" class="form-check-input" id="payment_visa"  name="payment" value="option2" />
                                <label class="custom-control-label" for="pm2">
                                    <img className="ml-3 mr-2" src="https://p.kindpng.com/picc/s/279-2797793_transparent-payment-icon-png-credit-card-payment-icon.png" style={{width:'4%'}} alt="" />
                                    Thanh toán bằng thẻ quốc tế Visa, Master, JCB
                                </label>
                            </div> */}

                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                                        <label class="form-check-label" for="money">
                                            <img className="ml-3 mr-2" src="https://st2.depositphotos.com/5266903/8036/v/950/depositphotos_80362180-stock-illustration-payment-icon-from-business-bicolor.jpg" style={{ width: '4%' }} alt="" />
                                            Thanh toán tiền mặt khi nhận hàng
                                        </label>
                                    </div>

                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                        <label class="form-check-label" for="visa">
                                            <img className="ml-3 mr-2" src="https://p.kindpng.com/picc/s/279-2797793_transparent-payment-icon-png-credit-card-payment-icon.png" style={{ width: '4%' }} alt="" />
                                            Thanh toán bằng thẻ quốc tế Visa, Master, JCB
                                        </label>
                                    </div>

                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
                                        <label class="form-check-label" for="atm">
                                            <img className="ml-3 mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbWI8dSRiK5LXloG_F_w6nY4GURmG6l0iqA&usqp=CAU" style={{ width: '4%' }} alt="" />
                                            Thẻ ATM nội địa/Internet Banking (Miễn phí thanh toán)
                                        </label>
                                    </div>

                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios4" value="option4" />
                                        <label class="form-check-label" for="momo">
                                            <img className="ml-3 mr-2" src="https://developers.momo.vn/images/favicon/ms-icon-310x310.png" style={{ width: '4%' }} alt="" />
                                            Thanh toán bằng ví MoMo
                                        </label>
                                    </div>

                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios5" value="option5" />
                                        <label class="form-check-label" for="zalopay">
                                            <img className="ml-3 mr-2" src="https://play-lh.googleusercontent.com/F8cUV5oOLjCTMSvSRymK1154MwKalnvkepN4xGrfWBC_tcXvNTq_sEStiwCYV61lRdI" style={{ width: '4%' }} alt="" />
                                            Thanh toán bằng ZaloPay
                                        </label>
                                    </div>



                                    {/* <div class="form-check">
                                <input type="radio" class="form-check-input" id="payment_atm"  name="payment" value="option3" />
                                <label class="custom-control-label" for="pm3">
                                    <img className="ml-3 mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbWI8dSRiK5LXloG_F_w6nY4GURmG6l0iqA&usqp=CAU" style={{width:'4%'}} alt="" /> 
                                    Thẻ ATM nội địa/Internet Banking (Miễn phí thanh toán)
                                </label>
                            </div>

                            <div class="form-check">
                                <input type="radio" class="form-check-input" id="payment_momo"  name="payment" value="option4" />
                                <label class="custom-control-label" for="pm4">
                                    <img className="ml-3 mr-2" src="https://developers.momo.vn/images/favicon/ms-icon-310x310.png" style={{width:'4%'}} alt="" /> 
                                    Thanh toán bằng ví MoMo
                                </label>
                            </div>

                            <div class="form-check">
                                <input type="radio" class="form-check-input" id="payment_zalopay"  name="payment" value="option5" />
                                <label class="custom-control-label" for="pm5">
                                    <img className="ml-3 mr-2" src="https://play-lh.googleusercontent.com/F8cUV5oOLjCTMSvSRymK1154MwKalnvkepN4xGrfWBC_tcXvNTq_sEStiwCYV61lRdI" style={{width:'4%'}} alt="" /> 
                                    Thanh toán bằng ZaloPay
                                </label>
                            </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 pr-0">
                            <div className="bg-white p-3">
                                <div className="row justify-content-around">
                                    <h6>Địa chỉ giao hàng</h6>
                                    <button type="button" name id className="btn btn-success btn-sm" style={{ fontSize: '12px' }}>Thay đổi</button>
                                </div>
                                <hr />
                                <div className>
                                    <h6 className>Lê Xuân Hoàng</h6>
                                    <p className="mb-0">Địa chỉ: Hà Đông- Hà Nội</p>
                                    <p className="mb-0">Điện thoại: 0986380270</p>
                                </div>
                            </div>
                            <div className="bg-white mt-3 p-2">
                                <div className="row  pl-3 pr-3 p-2 justify-content-between">
                                    <div>
                                        <h6>Đơn hàng</h6>
                                        <small>1 sản phẩm</small>
                                    </div>
                                    <button type="button" name id className="btn btn-success btn-sm" style={{ fontSize: '12px', height: '28px' }}>Thay đổi</button>
                                </div>

                                <div className="row  pl-3 pr-3 p-2 justify-content-between">
                                    <div>
                                        <span>Tạm tính</span>
                                    </div>
                                    <h6>49.000.000 đ</h6>
                                </div>

                                <div className="row  pl-3 pr-3 p-2 justify-content-between">
                                    <div>
                                        <span>Giảm giá</span>
                                    </div>
                                    <h6>-10.000 đ</h6>
                                </div>

                                <div className="row  pl-3 pr-3 p-2 justify-content-between">
                                    <div>
                                        <span>Phí vận chuyển</span>
                                    </div>
                                    <h6>30.000 đ</h6>
                                </div>
                                <hr />

                                <div className="row  pl-3 pr-3 p-2 justify-content-between">
                                    <div>
                                        <span>Thành tiền</span>
                                    </div>
                                    <h5 className="text-danger">49.020.000 đ</h5>
                                    <div className="w-100 text-right">
                                        <small className="text-secondary">(Đã bao gồm VAT nếu có)</small>
                                    </div>
                                </div>
                            </div>
                            <Link to="/dat-hang-thanh-cong">
                                <button type="button" name id className="btn btn-danger btn-md btn-block mt-3 mb-1">Tiến hành thanh toán</button>
                            </Link>
                            <div className="text-right">
                                <small className="text-secondary">( Vui lòng kiểm tra đơn hàng trước khi thanh toán )</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Payment;
