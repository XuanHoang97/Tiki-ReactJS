import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="search input-group align-items-center">
                <input type="text" className="form-control" placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..." id="demo" name="email" style={{ borderRadius: '2px 0px 0px 2px'}} />
                <div className="btn_search input-group-append" style={{ height: '38px', width:"105px" }}>
                    <button type="button" className="btn btn-primary p-0" style={{ background: 'rgb(13, 92, 182)' }}>
                        {/* <i className="fas fa-search small mr-2" /> */}
                        <img src="https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png" className="mr-1" alt="" style={{width: '15%'}} />
                        <small>Tìm kiếm</small>
                    </button>
                </div>
            </div>
        );
    }
}

export default Search;