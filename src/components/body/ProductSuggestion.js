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
            <a className="nav-link" data-toggle="pill" href="#menu3">
              <img src="https://salt.tikicdn.com/cache/w100/ts/personalish/11/73/ea/570cae3c03f657c59690f463b5c94166.jpg.webp" alt="" />
              <span>Deal siêu hot</span> 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#menu4">
              <img src="https://salt.tikicdn.com/cache/w100/ts/upload/14/d2/fa/49a9882cea6c62cc2527d297634f345a.png.webp" alt="" />
              <span>Hàng mới</span> 
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#menu5">
              <img src="https://salt.tikicdn.com/cache/w100/ts/upload/3b/b7/5d/161ce01cd4c91ba5495bc44790314016.png.webp" alt="" />
              <span>Không giới hạn</span> 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#menu6">
              <img src="https://salt.tikicdn.com/cache/w100/ts/category/48/96/3b/9403c9f9579883b9433decf44e3d4591.png.webp" alt="" />
              <span>Thời trang nữ</span> 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#menu7">
              <img src="https://salt.tikicdn.com/cache/w100/ts/category/12/29/a2/7409ff03cff5c0d3d695cb19f8f15896.png.webp" alt="" />
              <span>Nhà cửa-đời sống</span> 
            </a>
          </li>
          
        </ul>
      </div>
      
      
      <div className="tab-content">
        <div id="home" className="container tab-pane active"><br />
          <div className="list">
            <div className="list__prod">
              <img src="https://salt.tikicdn.com/cache/w200/ts/product/58/ec/8a/117d32e6848e12d3074a51654f2a997f.jpg.webp" alt="" />
              <p className="text-secondary mt-3 mb-1">Dầu gội X-Men For Boss Luxury - Hương trầm sang trọng 650g</p>
              <div className="rate">
                <div className="vote">
                    <span className="fa fa-star checked text-warning small" />
                    <span className="fa fa-star checked text-warning small" />
                    <span className="fa fa-star checked text-warning small" />
                    <span className="fa fa-star text-secondary small" />
                    <span className="fa fa-star text-secondary small" />
                </div>
                <span className="">Đã bán 111</span>
              </div>

              <div className="price">
                <span className="price_prod">185.000 đ</span>
                <span className="badge badge-danger">-6%</span>
              </div>
            </div>

            <div className="list__prod">
              <img src="https://salt.tikicdn.com/cache/w200/ts/product/97/a8/7f/ad08dd2c9c6c67429d6745570c35ceb4.png.webp" alt="" />
              <p className="text-secondary mt-3 mb-1">Dầu gội X-Men For Boss Luxury - Hương trầm sang trọng 650g</p>
              <div className="rate">
                <div className="vote">
                    <span className="fa fa-star checked text-warning small" />
                    <span className="fa fa-star checked text-warning small" />
                    <span className="fa fa-star checked text-warning small" />
                    <span className="fa fa-star text-secondary small" />
                    <span className="fa fa-star text-secondary small" />
                </div>
                <span className="">Đã bán 111</span>
              </div>

              <div className="price">
                <span className="price_prod">185.000 đ</span>
                <span className="badge badge-danger">-6%</span>
              </div>
            </div>

            <div className="list__prod">
              <img src="https://salt.tikicdn.com/cache/w200/ts/product/0e/46/bf/7ab154cf51b3997236698f4e4f119f77.jpg.webp" alt="" />
              <p className="text-secondary mt-3 mb-1">Dầu gội X-Men For Boss Luxury - Hương trầm sang trọng 650g</p>
              <div className="rate">
                <div className="vote">
                    <span className="fa fa-star checked text-warning small" />
                    <span className="fa fa-star checked text-warning small" />
                    <span className="fa fa-star checked text-warning small" />
                    <span className="fa fa-star text-secondary small" />
                    <span className="fa fa-star text-secondary small" />
                </div>
                <span className="">Đã bán 111</span>
              </div>

              <div className="price">
                <span className="price_prod">185.000 đ</span>
                <span className="badge badge-danger">-6%</span>
              </div>
            </div>

            <div className="list__prod">
              <img src="https://salt.tikicdn.com/cache/w200/ts/product/30/9b/d2/7e0bc1b0705ca490f78c38a9443421d1.png.webp" alt="" />
              <p className="text-secondary mt-3 mb-1">Dầu gội X-Men For Boss Luxury - Hương trầm sang trọng 650g</p>
              <div className="rate">
                <div className="vote">
                    <span className="fa fa-star checked text-warning small" />
                    <span className="fa fa-star checked text-warning small" />
                    <span className="fa fa-star checked text-warning small" />
                    <span className="fa fa-star text-secondary small" />
                    <span className="fa fa-star text-secondary small" />
                </div>
                <span className="">Đã bán 111</span>
              </div>

              <div className="price">
                <span className="price_prod">185.000 đ</span>
                <span className="badge badge-danger">-6%</span>
              </div>
            </div>

            <div className="list__prod">
              <img src="https://salt.tikicdn.com/cache/w200/ts/product/e2/c3/ca/7b35384775f70062f2ad96f34bf89eec.jpg.webp" alt="" />
              <p className="text-secondary mt-3 mb-1">Dầu gội X-Men For Boss Luxury - Hương trầm sang trọng 650g</p>
              <div className="rate">
                <div className="vote">
                    <span className="fa fa-star checked text-warning small" />
                    <span className="fa fa-star checked text-warning small" />
                    <span className="fa fa-star checked text-warning small" />
                    <span className="fa fa-star text-secondary small" />
                    <span className="fa fa-star text-secondary small" />
                </div>
                <span className="">Đã bán 111</span>
              </div>

              <div className="price">
                <span className="price_prod">185.000 đ</span>
                <span className="badge badge-danger">-6%</span>
              </div>
            </div>
          </div>
          
          <div className="view__more"> 
            <button type="button" class="btn btn-sm btn-outline-primary">Xem thêm</button>
          </div>
        </div>

        <div id="menu1" className="container tab-pane fade"><br />
          <h6>Menu 1</h6>
          <p>Mua gì cũng rẻ</p>
        </div>

        <div id="menu2" className="container tab-pane fade"><br />
          <h6>Menu 2</h6>
          <p>Tươi không cần tưới</p>
        </div>

        <div id="menu3" className="container tab-pane fade"><br />
          <h6>Menu 3</h6>
          <p>Chốt deal nhanh chóng</p>
        </div>

        <div id="menu4" className="container tab-pane fade"><br />
          <h6>Menu 4</h6>
          <p>Hàng mới ngon-bổ-rẻ</p>
        </div>

        <div id="menu5" className="container tab-pane fade"><br />
          <h6>Menu 5</h6>
          <p>Mua gì cũng có</p>
        </div>

        <div id="menu6" className="container tab-pane fade"><br />
          <h6>Menu 6</h6>
          <p>Thời trang-phong cách-chất chơi người dơi</p>
        </div>

        <div id="menu7" className="container tab-pane fade"><br />
          <h6>Menu 7</h6>
          <p>Tiện ích đủ thứ</p>
        </div>
      </div>
      
    </>
  );
}

export default ProductSuggestion;