import React from 'react';
import { Link } from 'react-router-dom';

function NotFound(props) {
    return (
        <div className="container main">
            <div className="row err">
                <div className="col">
                    <div className="banner-top"></div>
                    <div className="banner-bottom"></div>
                    <div className="banner-content">
                        <div className="err-404"><img src="https://salt.tikicdn.com/assets/img/404/super.png" /></div>
                        <div className="err-404"><img src="https://salt.tikicdn.com/assets/img/404/404.png" /></div>
                        <div className="err-404 err-h">
                            <h1>Xin lỗi, trang bạn đang tìm kiếm <br /> không tồn tại!</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="err">
                <h5>Bạn có thể thử những liên kết sau</h5>
                <hr />
                <div className='row btn-quit'>
                    <Link to='/'><button><i class="fa fa-angle-left"></i> Quay lại trang trước</button></Link>
                    <Link to='/'><button>Tiếp tục mua hàng</button></Link>
                    <Link to='/'><button>Xem thông tin tài khoản <i class="fa fa-angle-right"></i></button></Link>
                </div>
            </div>


        </div>
    );
}

export default NotFound;