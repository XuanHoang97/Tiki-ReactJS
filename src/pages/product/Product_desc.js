import React, { useState } from 'react';
import {connect} from 'react-redux';


const MoreContent = () => {
    return (
        <>
            <h6 className="mt-2">Màn hình gập 7,6 inch lớn nhất thế giới smartphone</h6>
            <img className="w-100" src="https://media.doanhnghiepvn.vn/Images/Uploaded/Share/2021/05/05/6e1iphone-12-series.jpg" alt="" />
            <p>Màn hình gập Galaxy Z Fold 2 5G khi mở ra có kích thước lớn tới 7,6 inch và được làm viền mỏng cả 4 cạnh tuyệt đẹp. Bạn sẽ được tận hưởng màn hình lớn chưa từng thấy trên thế giới smartphone, dù là đọc báo, vào mạng xã hội, xem phim hay chơi game, tất cả đều cho những trải nghiệm thú vị.</p>
        </>
    );
};
function Product_desc(props) {
    const [isShow, setShow] = useState(false);
    return (
        <div className="row bg-white pt-4 pb-4 p-3 m-1">
            <div className="description--product col-md-7">
            <p>Không giống bất kỳ chiếc điện thoại nào khác, Samsung Galaxy Z Fold 2 5G sở hữu màn hình gập kỳ diệu mà mỗi khi mở màn hình, bạn đã mở ra tương lai của ngành công nghiệp smartphone.</p>
            <img className="w-100" src="https://images.fpt.shop/unsafe/fit-in/filters:quality(90)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/samsung-galaxy-zfold2-6.jpg" alt="" />
            
            {isShow === true ? <MoreContent /> : ''}
            {isShow === false ?
            <div className="text-center">
                <button type="button" onClick={()=> {setShow(true);}} className="btn btn-success btn-sm mt-3">Đọc thêm 
                <i className="fas fa-caret-down ml-2" />
                </button>
            </div>
            : ''} 

            </div>
            <div className="col-md-5">
                <h5 className="mb-4">Tin tức và sự kiện</h5>

                <div className="list_news row pl-3 pr-3">

                    <div className="row mb-2 col-md-12 p-0">
                        <img className="col-md-4" src="https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FProduct%20New%20Image%2Fss-galaxy-zFold-new04.png?alt=media&token=19053c30-7a46-4cdb-9851-c97da0ff5276" alt="" />
                        <small className="col-md-8">Samsung đang đưa một số tính năng của Galaxy S21 lên các thiết bị cũ hơn</small>
                    </div>
                    <div className="row mb-2 col-md-12 p-0">
                        <img className="col-md-4" src="https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FProduct%20New%20Image%2Fss-galaxy-zFold-new04.png?alt=media&token=19053c30-7a46-4cdb-9851-c97da0ff5276" alt="" />
                        <small className="col-md-8">Samsung đang đưa một số tính năng của Galaxy S21 lên các thiết bị cũ hơn</small>
                    </div>
                    <div className="row mb-2 col-md-12 p-0">
                        <img className="col-md-4" src="https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FProduct%20New%20Image%2Fss-galaxy-zFold-new04.png?alt=media&token=19053c30-7a46-4cdb-9851-c97da0ff5276" alt="" />
                        <small className="col-md-8">Samsung đang đưa một số tính năng của Galaxy S21 lên các thiết bị cũ hơn</small>
                    </div>
                    <div className="row mb-2 col-md-12 p-0">
                        <img className="col-md-4" src="https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FProduct%20New%20Image%2Fss-galaxy-zFold-new04.png?alt=media&token=19053c30-7a46-4cdb-9851-c97da0ff5276" alt="" />
                        <small className="col-md-8">Samsung đang đưa một số tính năng của Galaxy S21 lên các thiết bị cũ hơn</small>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Product_desc;