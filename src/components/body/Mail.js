import React, { Component } from 'react';

class Mail extends Component {
    render() {
        return (
            <div className="row p-3 mt-3 align-items-center">
                <div className="col-md-6 row">
                <div className="col-md-3 col-3">
                    <img className="w-100" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/newsletter.png" alt="" />
                </div>
                <div className="info--mail col-md-9 col-9">
                    <h6>Đăng ký nhận bản tin Tiki</h6>
                    <p className="small">Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn</p>
                </div>
                </div>
                <div className="input-group col-md-6">
                <input type="text" className="form-control" placeholder="Địa chỉ Email của bạn" />
                <button className="btn btn-success" type="submit" style={{height: '38px', borderRadius: 0}}>Đăng ký</button>
                </div>
            </div>
        );
    }
}

export default Mail;