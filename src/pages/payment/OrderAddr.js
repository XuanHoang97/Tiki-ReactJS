import React from 'react';

function OrderAddr(props) {
    return (
        <div className="bg-white p-3">
            <div className="row justify-content-around">
                <h6>Địa chỉ giao hàng</h6>
                <button type="button" className="btn btn-success btn-sm" style={{ fontSize: '12px' }}>Thay đổi</button>
            </div>
            <hr />
            <div>
                <h6>Lê Xuân Hoàng</h6>
                <p className="mb-0">Địa chỉ: Hà Đông- Hà Nội</p>
                <p className="mb-0">Điện thoại: 0986380270</p>
            </div>
        </div>
    );
}

export default OrderAddr;