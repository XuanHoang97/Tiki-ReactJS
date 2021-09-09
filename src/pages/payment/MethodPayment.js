import React from 'react';

function MethodPayment(props) {
    return (
        <div>
            <h6 className="text-dark mt-3 mb-3">2. Chọn hình thức thanh toán</h6>

            <div className="option_payment border border-light mt-3 p-3">
                <div className="form-check mb-3">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" defaultChecked />
                    <label className="form-check-label" htmlFor="money">
                        <img className="ml-3 mr-2" src="https://st2.depositphotos.com/5266903/8036/v/950/depositphotos_80362180-stock-illustration-payment-icon-from-business-bicolor.jpg" style={{ width: '4%' }} alt="" />
                        Thanh toán tiền mặt khi nhận hàng
                    </label>
                </div>

                <div className="form-check mb-3">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                    <label className="form-check-label" htmlFor="visa">
                        <img className="ml-3 mr-2" src="https://p.kindpng.com/picc/s/279-2797793_transparent-payment-icon-png-credit-card-payment-icon.png" style={{ width: '4%' }} alt="" />
                        Thanh toán bằng thẻ quốc tế Visa, Master, JCB
                    </label>
                </div>

                <div className="form-check mb-3">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
                    <label className="form-check-label" htmlFor="atm">
                        <img className="ml-3 mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbWI8dSRiK5LXloG_F_w6nY4GURmG6l0iqA&usqp=CAU" style={{ width: '4%' }} alt="" />
                        Thẻ ATM nội địa/Internet Banking (Miễn phí thanh toán)
                    </label>
                </div>

                <div className="form-check mb-3">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios4" value="option4" />
                    <label className="form-check-label" htmlFor="momo">
                        <img className="ml-3 mr-2" src="https://developers.momo.vn/images/favicon/ms-icon-310x310.png" style={{ width: '4%' }} alt="" />
                        Thanh toán bằng ví MoMo
                    </label>
                </div>

                <div className="form-check mb-3">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios5" value="option5" />
                    <label className="form-check-label" htmlFor="zalopay">
                        <img className="ml-3 mr-2" src="https://play-lh.googleusercontent.com/F8cUV5oOLjCTMSvSRymK1154MwKalnvkepN4xGrfWBC_tcXvNTq_sEStiwCYV61lRdI" style={{ width: '4%' }} alt="" />
                        Thanh toán bằng ZaloPay
                    </label>
                </div>
            </div>

        </div>
    );
}

export default MethodPayment;