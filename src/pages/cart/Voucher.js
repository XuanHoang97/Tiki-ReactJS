import React from 'react';

function Voucher(props) {
    return (
        <div className="bg-white p-3">
            <div className="row pb-0 justify-content-around">
                <span>Tiki khuyến mãi</span>
                <small className="text-secondary">Có thể chọn 2
                    <i className="fas fa-info-circle" />
                </small>
            </div>
            <div className="text-primary">
                <i className="fas fa-money-check-alt mr-3" />
                <span className="small">Chọn hoặc nhập mã khuyến mãi</span>
            </div>
        </div>
    );
}

export default Voucher;