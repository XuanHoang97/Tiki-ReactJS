import React from 'react';

function Reply(props) {
    return (
        <div className="reply ml-5 mt-3 p-2 pl-3 bg-light">
            <div className="ml-2">
                <div className="title d-flex align-items-baseline">
                    <h6 className="text-capitalize mb-0">Lê Xuân Hoàng</h6>
                    <span className="badge badge-success ml-2">Admin</span>
                    <span className="ml-2 text-muted small">1 ngày trước</span>
                </div>
                <div className="content">Tks you</div>
            </div>
        </div>
    );
}

export default Reply;