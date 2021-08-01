import React, { useState, useEffect}from 'react';
import PropTypes from 'prop-types';

Search.propTypes = {
    
};

function Search(props) {
    const [suggest, setSuggest]=useState(false);

    return (
        <div className="search input-group align-items-center">
            <input type="text" className="form-control" placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..." id="demo" name="email" style={{ borderRadius: '2px 0px 0px 2px'}} />
            
            <div className="search__info">
                <div className="search__popular">
                    <img src="https://salt.tikicdn.com/ts/upload/4f/03/a0/2455cd7c0f3aef0c4fd58aa7ff93545a.png" alt="" />
                    <span>Tìm kiếm phổ biến</span>
                </div>
                <div className="list__search row">
                    <div className="list__item col-md-4">
                        <img src="https://salt.tikicdn.com/cache/280x280/ts/product/bc/8c/45/ed78f077e72d0c7719f506eeb04e30d7.jpg" alt="" />
                        <span>Toeic</span>
                    </div>

                    <div className="list__item col-md-4">
                        <img src="https://salt.tikicdn.com/cache/280x280/ts/product/bc/8c/45/ed78f077e72d0c7719f506eeb04e30d7.jpg" alt="" />
                        <span>Toeic</span>
                    </div>

                    <div className="list__item col-md-4">
                        <img src="https://salt.tikicdn.com/cache/280x280/ts/product/bc/8c/45/ed78f077e72d0c7719f506eeb04e30d7.jpg" alt="" />
                        <span>Toeic</span>
                    </div>

                    <div className="list__item col-md-4">
                        <img src="https://salt.tikicdn.com/cache/280x280/ts/product/bc/8c/45/ed78f077e72d0c7719f506eeb04e30d7.jpg" alt="" />
                        <span>Toeic</span>
                    </div>

                    <div className="list__item col-md-4">
                        <img src="https://salt.tikicdn.com/cache/280x280/ts/product/bc/8c/45/ed78f077e72d0c7719f506eeb04e30d7.jpg" alt="" />
                        <span>Toeic</span>
                    </div>

                    <div className="list__item col-md-4">
                        <img src="https://salt.tikicdn.com/cache/280x280/ts/product/bc/8c/45/ed78f077e72d0c7719f506eeb04e30d7.jpg" alt="" />
                        <span>Toeic</span>
                    </div>
                </div>
            </div>

            <div className="btn_search input-group-append" style={{ height: '38px', width:"105px" }}>
                <button type="button" className="btn btn-primary p-0" style={{ background: 'rgb(13, 92, 182)' }}>
                    <img src="https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png" className="mr-1" alt="" style={{width: '15%'}} />
                    <small>Tìm kiếm</small>
                </button>
                
            </div>
        </div>
    );
}

export default Search;