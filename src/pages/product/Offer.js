import React from 'react';
import PropTypes from 'prop-types';

Offer.propTypes = {
    
};

function Offer(props) {
    return (
        <div className="col-md-3">
            <div className="row justify-content-center mb-1">
                <button type="button" name id className="btn btn-default mr-2">
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-like.svg" alt="" />
                </button>
                <button type="button" name id className="btn btn-default ">
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-account-social.svg" alt="" />
                </button>
            </div>
            <div className="card bg-light">
                <div className="card-header font-weight-bold p-1">Phụ kiện đi kèm</div>
                <div className="card-body m-1 pl-3 pr-3 p-0">
                <div className=" row p-2 p-0 justify-content-between">
                    <span>Sạc</span>
                    <span>x1</span>
                </div>
                <div className=" row p-2 p-0 justify-content-between">
                    <span>Cáp sạc</span>
                    <span>x2</span>
                </div>
                <div className=" row p-2 p-0 justify-content-between">
                    <span>Cây lấy sim</span>
                    <span>x2</span>
                </div>
                <div className=" row p-2 p-0 justify-content-between">
                    <span>Tai nghe </span>
                    <span>x1</span>
                </div>
                <div className=" row p-2 p-0 justify-content-between">
                    <span>Sách hướng dẫn</span>
                    <span>x1</span>
                </div>
                <div className=" row p-2 p-0 justify-content-between">
                    <span>Ốp lưng</span>
                    <span>x2</span>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Offer;