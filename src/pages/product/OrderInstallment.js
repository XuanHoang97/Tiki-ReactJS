import React from 'react';

function OrderInstallment(props) {
    return (
        <div className="row mt-2 m-0">
            <button type="button" className="col-md-6 btn btn-outline-primary btn-sm">
                <h6 className="m-0">TRẢ GÓP 0%</h6>
                <small>Duyệt nhanh qua điện thoại</small>
            </button>
            <button type="button" className="col-md-6 btn btn-outline-primary btn-sm">
                <h6 className="m-0">TRẢ GÓP QUA THẺ</h6>
                <small>Visa, Master Card, VCB</small>
            </button>
        </div>
    );
}

export default OrderInstallment;