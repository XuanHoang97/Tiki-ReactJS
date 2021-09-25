import React from 'react';

function Sort(props) {
    return (
        <div className="tab__product">
            <ul className="nav nav-pills" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="pill" href="#home">
                        <span>Phổ biến</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#menu1">
                        <span>Bán chạy</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#menu2">
                        <span>Hàng mới</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#menu3">
                        <span>Giá thấp</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#menu4">
                        <span>Giá cao</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sort;