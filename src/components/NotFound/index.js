import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="container main">
            <div className="row err">
                <div className="col">
                    <div className="banner-top"></div>
                    <div className="banner-bottom"></div>
                    <div className="banner-content">
                        <div className="err-404 question"><img className="w-75" src="https://salt.tikicdn.com/assets/img/404/super.png" /></div>
                        <div className="err-404"><img className="w-75" src="https://salt.tikicdn.com/assets/img/404/404.png" /></div>
                        <div className="err-404 err-h">
                            <h1>Xin lỗi, trang bạn tìm kiếm <br /> đang trong quá trình phát triển !</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="err">
                <h5 className="suggest">Bạn có thể thử những liên kết sau</h5>
                <hr />
                <div className='row btn-quit'>
                    <Link to='/'>
                        <button type="button" class="btn btn-outline-primary"><i className="fa fa-angle-left"></i> Quay lại trang trước</button>
                    </Link>
                    <Link to='/'>
                        <button type="button" class="btn btn-outline-success">Tiếp tục mua hàng</button>
                    </Link>
                    <Link to='/'>
                        <button type="button" class="btn btn-outline-primary"> Xem thông tin tài khoản <i className="fa fa-angle-right"></i></button>
                    </Link>
                </div>
            </div>


        </div>
    );
}

export default NotFound;