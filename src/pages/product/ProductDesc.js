import React, { useState } from 'react';
import News_Event from './News_Event';

const MoreContent = () => {
    return (
        <>
            <h6 className="mt-2">Màn hình gập 7,6 inch lớn nhất thế giới smartphone</h6>
            <img className="w-100" src="https://media.doanhnghiepvn.vn/Images/Uploaded/Share/2021/05/05/6e1iphone-12-series.jpg" alt="" />
            <p>Màn hình gập Galaxy Z Fold 2 5G khi mở ra có kích thước lớn tới 7,6 inch và được làm viền mỏng cả 4 cạnh tuyệt đẹp. Bạn sẽ được tận hưởng màn hình lớn chưa từng thấy trên thế giới smartphone, dù là đọc báo, vào mạng xã hội, xem phim hay chơi game, tất cả đều cho những trải nghiệm thú vị.</p>
        </>
    );
};

function ProductDesc(props) {
    const [isShow, setShow] = useState(false);
    return (
        <>
            <h6 className="mt-4 mb-2 m-0">MÔ TẢ SẢN PHẨM</h6>
            <div className="description row bg-white p-3 m-1">
                <div className="description--product col-md-8 p-0 pr-2">
                    <p>Không giống bất kỳ chiếc điện thoại nào khác, Samsung Galaxy Z Fold 2 5G sở hữu màn hình gập kỳ diệu mà mỗi khi mở màn hình, bạn đã mở ra tương lai của ngành công nghiệp smartphone.</p>
                    <img className="w-100" src="https://images.fpt.shop/unsafe/fit-in/filters:quality(90)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/samsung-galaxy-zfold2-6.jpg" alt="" />
                    
                    {isShow === true ? <MoreContent /> : ''}
                    {isShow === false ?
                    <div className="text-center ShowMore">
                        <button type="button" onClick={()=> {setShow(true);}} className="btn btn-primary btn-sm mt-3">Đọc thêm 
                            <i className="fas fa-caret-down ml-2" />
                        </button>
                    </div>
                    : ''} 
                </div>
                
                <News_Event />
            </div>
        </>
    );
}

export default ProductDesc;