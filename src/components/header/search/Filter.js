import React from 'react';

function Filter(props) {
    return (
        <div className="sort">
            <div className="category">
                <h6>DANH MỤC SẢN PHẨM</h6>
                <p>Tai nghe có dây nhét tai</p>
                <p>Điện thoại Smartphone</p>
                <p>Tai nghe</p>
                <p>Phụ kiện máy ảnh</p>

                <div className="viewMore text-primary small">Xem thêm
                    <i class="fas fa-sort-down  ml-1"></i>
                </div>
            </div>

            <div className="addr__receive">
                <h5>ĐỊA CHỈ NHẬN HÀNG</h5>
                <h6>P. Yên NGhĩa, Q. Hà Đông, Hà Nội</h6>
                <div className="change__addr text-primary">
                    ĐỔI ĐỊA CHỈ
                </div>
            </div>

            <div className="service">
                <h6>DỊCH VỤ</h6>
                <div className="item__service">
                    <input type="checkbox" name="" id="" />
                    <img src="https://salt.tikicdn.com/ts/upload/f9/ad/0e/a8a97f5ac7661d637942b42796893662.png" alt="" />
                    <span>Giao siêu tốc 2H</span>
                </div>

                <div className="item__service">
                    <input type="checkbox" name="" id="" />
                    <img src="https://salt.tikicdn.com/ts/upload/af/84/fc/2037c3b93a81767aed21358ebf3f8b8e.png" alt="" />
                    <span>Không giới hạn</span>
                </div>

                <div className="item__service">
                    <input type="checkbox" name="" id="" />
                    <span>Rẻ hơn hoàn tiền</span>
                </div>
            </div>

            <div className="branding">
                <h6>THƯƠNG HIỆU</h6>
                <div className="item__branding">
                    <input type="checkbox" name="" id="" />
                    <span>Giao siêu tốc 2H</span>
                </div>

                <div className="item__branding">
                    <input type="checkbox" name="" id="" />
                    <span>Không giới hạn</span>
                </div>

                <div className="item__branding">
                    <input type="checkbox" name="" id="" />
                    <span>Rẻ hơn hoàn tiền</span>
                </div>
            </div>

            <div className="branding">
                <h6>KIỂU TAI NGHE</h6>
                <div className="item__branding">
                    <input type="checkbox" name="" id="" />
                    <span>Giao siêu tốc 2H</span>
                </div>

                <div className="item__branding">
                    <input type="checkbox" name="" id="" />
                    <span>Không giới hạn</span>
                </div>

                <div className="item__branding">
                    <input type="checkbox" name="" id="" />
                    <span>Rẻ hơn hoàn tiền</span>
                </div>
            </div>

            <div className="branding">
                <h6>MÀU SẮC</h6>
                <div className="item__branding">
                    <input type="checkbox" name="" id="" />
                    <span>Giao siêu tốc 2H</span>
                </div>

                <div className="item__branding">
                    <input type="checkbox" name="" id="" />
                    <span>Không giới hạn</span>
                </div>

                <div className="item__branding">
                    <input type="checkbox" name="" id="" />
                    <span>Rẻ hơn hoàn tiền</span>
                </div>
            </div>
        </div>
    );
}

export default Filter;