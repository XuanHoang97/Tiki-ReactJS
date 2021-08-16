import React from 'react';
import { Link } from 'react-router-dom';

function Result(search) {
    return (
        <div className="Result__search bg-light pb-3">
            <ul className="breadcrumb mb-0">
                <li><Link to="/">Home</Link></li>
                <li>Phone</li>
            </ul>

            <div className="product bg-white">
                <div className="sort">
                    <div className="category">
                        <h6>DANH MỤC SẢN PHẨM</h6>
                        <p>Tai nghe có dây nhét tai</p>
                        <p>Điện thoại Smartphone</p>
                        <p>Tai nghe</p>
                        <p>Phụ kiện máy ảnh</p>

                        <div className="viewMore text-primary small">Xem thêm
                            <i class="fas fa-sort-down  ml-1"></i>
                        </div>
                    </div>

                    <div className="addr__receive">
                        <h5>ĐỊA CHỈ NHẬN HÀNG</h5>
                        <h6>P. Yên NGhĩa, Q. Hà Đông, Hà Nội</h6>
                        <div className="change__addr text-primary">
                            ĐỔI ĐỊA CHỈ
                        </div>
                    </div>

                    <div className="service">
                        <h6>DỊCH VỤ</h6>
                        <div className="item__service">
                            <input type="checkbox" name="" id="" />
                            <img src="https://salt.tikicdn.com/ts/upload/f9/ad/0e/a8a97f5ac7661d637942b42796893662.png" alt="" />
                            <span>Giao siêu tốc 2H</span>
                        </div>

                        <div className="item__service">
                            <input type="checkbox" name="" id="" />
                            <img src="https://salt.tikicdn.com/ts/upload/af/84/fc/2037c3b93a81767aed21358ebf3f8b8e.png" alt="" />
                            <span>Không giới hạn</span>
                        </div>

                        <div className="item__service">
                            <input type="checkbox" name="" id="" />
                            <span>Rẻ hơn hoàn tiền</span>
                        </div>
                    </div>

                    <div className="branding">
                        <h6>THƯƠNG HIỆU</h6>
                        <div className="item__branding">
                            <input type="checkbox" name="" id="" />
                            <span>Giao siêu tốc 2H</span>
                        </div>

                        <div className="item__branding">
                            <input type="checkbox" name="" id="" />
                            <span>Không giới hạn</span>
                        </div>

                        <div className="item__branding">
                            <input type="checkbox" name="" id="" />
                            <span>Rẻ hơn hoàn tiền</span>
                        </div>
                    </div>

                    <div className="branding">
                        <h6>KIỂU TAI NGHE</h6>
                        <div className="item__branding">
                            <input type="checkbox" name="" id="" />
                            <span>Giao siêu tốc 2H</span>
                        </div>

                        <div className="item__branding">
                            <input type="checkbox" name="" id="" />
                            <span>Không giới hạn</span>
                        </div>

                        <div className="item__branding">
                            <input type="checkbox" name="" id="" />
                            <span>Rẻ hơn hoàn tiền</span>
                        </div>
                    </div>

                    <div className="branding">
                        <h6>MÀU SẮC</h6>
                        <div className="item__branding">
                            <input type="checkbox" name="" id="" />
                            <span>Giao siêu tốc 2H</span>
                        </div>

                        <div className="item__branding">
                            <input type="checkbox" name="" id="" />
                            <span>Không giới hạn</span>
                        </div>

                        <div className="item__branding">
                            <input type="checkbox" name="" id="" />
                            <span>Rẻ hơn hoàn tiền</span>
                        </div>
                    </div>
                </div>

                <div className="list__product">
                    <div className="suggest__list">
                        <div>
                            <div >
                            <div className="Prod__Suggest"> <h5 className="m-0">Kết quả tìm kiếm cho `phone`: 5k+ kết quả</h5> </div>

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
                            </div>
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
                                </div>
                            </div>

                            <div id="menu1" className="container tab-pane fade"><br />
                            <h6>Menu 1</h6>
                            </div>

                            <div id="menu2" className="container tab-pane fade"><br />
                            <h6>Menu 2</h6>
                            </div>

                            <div id="menu3" className="container tab-pane fade"><br />
                            <h6>Menu 3</h6>
                            </div>

                            <div id="menu4" className="container tab-pane fade"><br />
                            <h6>Menu 4</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Result;