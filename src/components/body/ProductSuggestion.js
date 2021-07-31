import React, { useState } from 'react';
import PropTypes from 'prop-types';

ProductSuggestion.propTypes = {
  
};

function ProductSuggestion(props) {
  return (
    <>
      <div className="Prod__Suggest">
        <h5 className="m-0">Gợi Ý Hôm Nay</h5>
      </div>

      <div className="tab__product">
        <ul className="nav nav-pills" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="pill" href="#home">
              <img src="https://salt.tikicdn.com/cache/w100/ts/upload/6d/56/64/3c4a8a3a7475311d8c6892d9ede8ead7.png.webp" alt="" />
              <span>Dành cho bạn</span> 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#menu1">
              <img src="https://salt.tikicdn.com/cache/w100/ts/category/a6/9f/45/460fdecbbe0f81da09c7da37aa08f680.png.webp" alt="" />
              <span>Đi chợ siêu Sale</span> 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#menu2">
              <img src="https://salt.tikicdn.com/cache/w100/ts/product/7f/cc/71/ebca15e1230b667ea18f714184a7043d.jpg.webp" alt="" />
              <span>Củ quả siêu tươi</span> 
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#menu1">
              <img src="https://salt.tikicdn.com/cache/w100/ts/personalish/11/73/ea/570cae3c03f657c59690f463b5c94166.jpg.webp" alt="" />
              <span>Deal siêu hot</span> 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#menu2">
              <img src="https://salt.tikicdn.com/cache/w100/ts/upload/14/d2/fa/49a9882cea6c62cc2527d297634f345a.png.webp" alt="" />
              <span>Hàng mới</span> 
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#menu1">
              <img src="https://salt.tikicdn.com/cache/w100/ts/upload/3b/b7/5d/161ce01cd4c91ba5495bc44790314016.png.webp" alt="" />
              <span>Không giới hạn</span> 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#menu2">
              <img src="https://salt.tikicdn.com/cache/w100/ts/category/48/96/3b/9403c9f9579883b9433decf44e3d4591.png.webp" alt="" />
              <span>Thời trang nữ</span> 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#menu1">
              <img src="https://salt.tikicdn.com/cache/w100/ts/category/12/29/a2/7409ff03cff5c0d3d695cb19f8f15896.png.webp" alt="" />
              <span>Nhà cửa-đời sống</span> 
            </a>
          </li>
          
        </ul>
      </div>
      
      
      <div className="tab-content">
        <div id="home" className="container tab-pane active"><br />
          <h6>HOME</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div id="menu1" className="container tab-pane fade"><br />
          <h6>Menu 1</h6>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div id="menu2" className="container tab-pane fade"><br />
          <h6>Menu 2</h6>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
        </div>
      </div>
      
    </>
  );
}

export default ProductSuggestion;