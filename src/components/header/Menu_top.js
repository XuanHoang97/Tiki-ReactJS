import React, { Component } from 'react';

class MenuTop extends Component {
    render() {
        return (
            <div className="row menu--suggest pb-2 pl-3 pr-2 justify-content-between align-items-center" style={{ marginTop: '-0.75rem' }} >
                <div className="col-md-2">
                    <a>
                        <img className="w-50" src="https://salt.tikicdn.com/ts/upload/23/97/dd/2d66c7c7cd54895f698aae24dce13b90.png" alt="" />
                    </a>
                </div>

                <div className="col-md-8 row" style={{ fontSize: '11px', paddingLeft: '25px' }}>
                    <a className="mr-3 text-white">Đồng hồ thông minh</a>
                    <a className="mr-3 text-white">Mũ bảo hiểm</a>
                    <a className="mr-3 text-white">Đầm dự tiệc</a>
                    <a className="mr-3 text-white">Bình giữ nhiệt</a>
                    <a className="mr-3 text-white">Tai nghe Bluetooth</a>
                    <a className="mr-3 text-white">Máy lạnh</a>
                </div>

                <div className="col-md-2 text-right mr-2">
                    <a className="small text-white">💰Bán hàng cùng Tiki</a>
                </div>
            </div>
        );
    }
}

export default MenuTop;